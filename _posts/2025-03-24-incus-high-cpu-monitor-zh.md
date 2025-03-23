---
title: '解决Incus LXC容器导致CPU占用异常高的问题'
date: 2025-03-24
permalink: /posts/2025/03/incus-high-cpu-monitor/
tags:
  - Linux
  - Incus
  - LXC
  - 脚本
  - 系统监控
lang: zh
other_lang: /posts/2025/03/incus-high-cpu-monitor/
---

最近在CLAW JP上分割了几个LXC子容器，发现时不时CPU会跑满。通过top命令查看，发现是incus进程占用异常：
```
incusd --group incus-admin --logfile /var/log/incus/incusd.log
```

检查了各个分割的LXC实例，发现具体实例内部的CPU占用并不高，而且实例都有CPU使用率限制，理论上不可能跑到100%。内存也远远没有爆满，磁盘空间充足，情况十分奇怪。

# 解决方案

我让Claude帮我写了一个监控脚本，每分钟检查一次incusd进程的CPU占用率。如果连续三分钟占用率超过80%，就自动重启incusd服务。之后再观察是否还会复发。

脚本内容如下：

```bash
#!/bin/bash
# 脚本文件：/root/monitor_incusd.sh
# 功能：每分钟检查incusd进程的CPU占用率，如果连续3分钟超过80%，则重启服务

# 设置日志文件与计数器文件路径
LOG_FILE="/root/incusd_monitor.log"
COUNTER_FILE="/tmp/incusd_high_cpu_counter"

# 如果计数器文件不存在，则创建并初始化为0
if [ ! -f "$COUNTER_FILE" ]; then
    echo "0" > "$COUNTER_FILE"
fi

# 获取当前时间
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

# 获取incusd进程的CPU使用率（取所有匹配项中的最大值）
CPU_USAGE=$(ps aux | grep incusd | grep -v grep | awk '{print $3}' | sort -nr | head -n 1)

# 检查是否找到incusd进程
if [ -z "$CPU_USAGE" ]; then
    echo "$CURRENT_TIME - incusd进程未运行" >> "$LOG_FILE"
    echo "0" > "$COUNTER_FILE"
    exit 0
fi

# 使用bc比较CPU_USAGE与80.0的大小（返回1表示为真）
if [ "$(echo "$CPU_USAGE > 80.0" | bc -l)" -eq 1 ]; then
    # 增加计数器
    COUNTER=$(<"$COUNTER_FILE")
    COUNTER=$((COUNTER + 1))
    echo "$COUNTER" > "$COUNTER_FILE"
    
    echo "$CURRENT_TIME - incusd进程最高CPU使用率: $CPU_USAGE%，计数器: $COUNTER" >> "$LOG_FILE"
    
    # 如果连续3次检测到CPU使用率高，则重启服务
    if [ "$COUNTER" -ge 3 ]; then
        echo "$CURRENT_TIME - incusd进程CPU使用率连续3分钟超过80%，正在重启服务…" >> "$LOG_FILE"
        systemctl restart incus >> "$LOG_FILE" 2>&1
        echo "$CURRENT_TIME - incus服务重启完成" >> "$LOG_FILE"
        # 重置计数器
        echo "0" > "$COUNTER_FILE"
    fi
else
    # CPU使用率正常，重置计数器
    echo "0" > "$COUNTER_FILE"
    echo "$CURRENT_TIME - incusd进程最高CPU使用率: $CPU_USAGE%，状态正常" >> "$LOG_FILE"
fi
```

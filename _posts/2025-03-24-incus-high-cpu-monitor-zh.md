---
title: '解决Incus LXC容器导致CPU占用异常高的问题'
date: 2025-03-24
permalink: /zh/posts/2025/03/incus-high-cpu-monitor/
author_profile: false
tags:
  - Linux
  - Incus
  - LXC
  - Script
  - System Monitoring
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
# 脚本文件：/root/monitor_incusd_top.sh
# 功能：每分钟检查incusd进程的CPU占用率（使用top采样），如果连续3分钟超过80%，则重启服务

LOG_FILE="/root/incusd_monitor.log"
COUNTER_FILE="/tmp/incusd_high_cpu_counter"

if [ ! -f "$COUNTER_FILE" ]; then
    echo "0" > "$COUNTER_FILE"
fi

CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

# 使用top采样，注意：不同系统中top的输出字段可能有所不同，一般CPU使用率在第9列，可根据实际情况调整
sleep 1
CPU_USAGE=$(top -b -n1 | grep incusd | grep -v grep | awk '{print $9}' | sort -nr | head -n 1)

if [ -z "$CPU_USAGE" ]; then
    echo "$CURRENT_TIME - incusd进程未运行" >> "$LOG_FILE"
    echo "0" > "$COUNTER_FILE"
    exit 0
fi

# 如果可能，打印一下采样值格式（有百分号时需要去掉）
CPU_USAGE_NUM=$(echo "$CPU_USAGE" | sed 's/%//g')

if [ "$(echo "$CPU_USAGE_NUM > 80.0" | bc -l)" -eq 1 ]; then
    COUNTER=$(<"$COUNTER_FILE")
    COUNTER=$((COUNTER + 1))
    echo "$COUNTER" > "$COUNTER_FILE"
    echo "$CURRENT_TIME - incusd进程最高CPU使用率: $CPU_USAGE_NUM%，计数器: $COUNTER" >> "$LOG_FILE"
    if [ "$COUNTER" -ge 3 ]; then
        echo "$CURRENT_TIME - incusd进程CPU使用率连续3分钟超过80%，正在重启服务…" >> "$LOG_FILE"
        systemctl restart incus >> "$LOG_FILE" 2>&1
        echo "$CURRENT_TIME - incus服务重启完成" >> "$LOG_FILE"
        echo "0" > "$COUNTER_FILE"
    fi
else
    echo "0" > "$COUNTER_FILE"
    echo "$CURRENT_TIME - incusd进程最高CPU使用率: $CPU_USAGE_NUM%，状态正常" >> "$LOG_FILE"
fi
```

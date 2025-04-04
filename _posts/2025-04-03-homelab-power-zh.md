---
title: '家里云清洁计算指南：如何优雅地薅电费羊毛'
date: 2025-04-03
permalink: /zh/posts/2025/04/homelab-power/
author_profile: false
tags:
  - Linux
  - LXC
  - System Monitoring
  - HomeLab
  - Energy Saving
lang: zh
other_lang: /posts/2025/04/homelab-power/
---

> 观前提示：本文经DeepSeek V3深度润色，保证比你的电费账单更让人心情愉悦。

## 背景故事：从数据囤积症到电费焦虑症

自从患上"数字仓鼠症"，我的NAS就成了影视作品的养老院。为了给这些"老艺术家们"瘦身，我开发了两个神器：
1. [视频减肥专家](https://github.com/t0saki/video-converter)：用AV1+Opus黑科技，把视频体积砍半还不掉颜值
2. [漫画瘦身大师](https://github.com/t0saki/manga_cbz_creator)：用AVIF魔法，把漫画压缩到原来1/10大小，画质却像用了美颜相机

但是！天下没有免费的午餐，AV1编码这个"健身教练"收费可不便宜——它要的不是钱，而是电！我的i5-13500H笔记本CPU在全力转码时，活像个小电炉，功率直飙90W。

让我们做个简单的数学题：
- 一天两度电 ≈ 一年700度
- 赶上第三阶梯电价（冬天开地暖时必然触发）
- 电费账单：🤯💸
- 其他计算密集型服务可能会堵塞（毕竟E核性能有限）

## 省电妙招：让CPU"996"变"弹性工作制"

### 妙招一：让能效核当"996打工人"

我的转码服务住在PVE LXC的"单身公寓"里，通过以下骚操作让它只能使用能效核（E核）干活：

```bash
# 在容器的conf文件里加上"用工限制"
lxc.cgroup2.cpuset.cpus = 8-15  # 只给E核的工位
```

效果立竿见影：
- 功耗从90W降到33W（降幅63%）
- 性能只损失50%（这性价比，资本家都落泪）
- 其他服务响应几乎不受影响（性能核终于能喘口气了）

![CPU监控图](https://i.tsk.im/file/4c18ICLH.jpg)

### 妙招二：蹭电费的"深夜食堂"优惠

既然电力公司搞峰谷电价，我们就要学会"薅羊毛"！但要注意：直接杀掉转码进程就像打断厨子做饭——既浪费食材又得重头再来。正确的做法是给进程"按暂停键"。

创建一个智能"电费管家"脚本：

```bash
#!/bin/bash
LOG="/tmp/convert_control.log"
echo "$(date): 电费管家收到指令：$1" >> $LOG

case $1 in
    start)
        # 给进程发"开工红包"
        /usr/bin/pkill -CONT -f "ffmpeg -nostdin -i /con" && echo "进程继续搬砖" >> $LOG || echo "叫醒服务失败" >> $LOG
        ;;
    stop)
        # 给进程放"带薪假"
        /usr/bin/pkill -STOP -f "ffmpeg -nostdin -i /con" && echo "进程进入省电模式" >> $LOG || echo "放假通知发送失败" >> $LOG
        ;;
esac
```

然后设置cron定时任务，让转码服务过上"朝十晚八"的规律生活：

```bash
0 8 * * * /path/to/control.sh stop   # 早上8点：收工睡觉
0 22 * * * /path/to/control.sh start # 晚上10点：夜班开始
```

看看这效果，电费曲线比我的体重曲线还让人欣慰：

![功耗监控图](https://i.tsk.im/file/bkjbaXKb.jpg)

**省电心得**：让CPU学会"摸鱼"，才是真正的节能艺术！
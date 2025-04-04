---
title: 'The HomeLab Power Diet: How to Encode AV1 Without Burning Your Wallet'
date: 2025-04-03
permalink: /posts/2025/04/homelab-power/
author_profile: false
tags:
  - Linux
  - LXC
  - System Monitoring
  - HomeLab
  - Energy Saving
lang: en
other_lang: /zh/posts/2025/04/homelab-power/
---

> Pro tip: This guide has been seasoned with DeepSeek V3's special humor sauce.

## Confessions of a Data Hoarder Turned Power Accountant

After catching the "digital hoarding" bug, my NAS became a retirement home for media files. To keep these "aging celebrities" in shape, I built two magic tools:
1. [Video Liposuction Tool](https://github.com/t0saki/video-converter): Shrinks videos by 50% with AV1+Opus while keeping their good looks
2. [Comic Book Slimming Serum](https://github.com/t0saki/manga_cbz_creator): Squeezes manga to 1/10th size using AVIF magic

But here's the plot twist - AV1 encoding is like a personal trainer who charges in kilowatt-hours! My i5-13500H laptop CPU transforms into a space heater during encodes, guzzling 90W like it's happy hour.

Let's do some "fun" math:
- 2kWh daily ≈ 700kWh yearly
- Hits tier-3 pricing (inevitable when winter heating kicks in)
- Electricity bill: 💸🔥
- Other compute-intensive services might be blocked (E-cores are limited)

## Power Saving Hacks: Making Your CPU Work Smarter, Not Harder

### Hack #1: Enlist the E-Cores as Minimum Wage Workers

My encoding service lives in a PVE LXC "studio apartment" with employment restrictions:

```bash
# In the container's conf file
lxc.cgroup2.cpuset.cpus = 8-15  # E-cores only - the bargain bin workers
```

The results speak for themselves:
- Power draw drops from 90W to 33W (63% diet)
- Only 50% performance penalty (even Jeff Bezos would approve this efficiency)
- Other services respond almost as fast as before (E-cores are still fast)

![CPU monitoring](https://i.tsk.im/file/4c18ICLH.jpg)

### Hack #2: Become a Night Owl for Off-Peak Discounts

When the power company offers happy hour pricing, we RSVP "hell yes!" But remember - killing encodes is like firing a chef mid-meal. Instead, we hit the pause button.

Meet your new "Power Butler" script:

```bash
#!/bin/bash
LOG="/tmp/convert_control.log"
echo "$(date): Power Butler received command: $1" >> $LOG

case $1 in
    start)
        # Whisper sweet nothings to wake the process
        /usr/bin/pkill -CONT -f "ffmpeg -nostdin -i /con" && echo "Process resumed its grind" >> $LOG || echo "Wake-up call failed" >> $LOG
        ;;
    stop)
        # Tuck the process into bed
        /usr/bin/pkill -STOP -f "ffmpeg -nostdin -i /con" && echo "Process entered power nap mode" >> $LOG || echo "Bedtime story failed" >> $LOG
        ;;
esac
```

Then schedule these energy-saving siestas with cron:

```bash
0 8 * * * /path/to/control.sh stop   # 8AM: Night shift ends
0 22 * * * /path/to/control.sh start # 10PM: Vampire hours begin
```

Behold - a power consumption chart prettier than my sleep schedule:

![Power monitoring](https://i.tsk.im/file/bkjbaXKb.jpg)

**Pro Tip**: A CPU that knows how to slack off is a happy CPU. Your wallet will thank you!
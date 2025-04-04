---
title: 'Solving High CPU Usage Issues with Incus LXC Containers'
date: 2025-03-24
permalink: /posts/2025/03/incus-high-cpu-monitor/
author_profile: false
tags:
  - Linux
  - Incus
  - LXC
  - Script
  - System Monitoring
lang: en
other_lang: /zh/posts/2025/03/incus-high-cpu-monitor/
---

Recently, after setting up several LXC sub-containers on CLAW JP, I noticed that occasionally the CPU would hit 100% usage. Using the top command, I discovered that the incus process was consuming an abnormal amount of CPU:
```
incusd --group incus-admin --logfile /var/log/incus/incusd.log
```

After checking each individual LXC instance, I found that the CPU usage within the specific instances wasn't high, and since the instances have CPU usage limits, they theoretically shouldn't be able to reach 100%. Memory was far from exhausted, disk space was plentiful—the situation was quite puzzling.

# Solution

I asked Claude to write a monitoring script that checks the CPU usage of the incusd process every minute. If the usage exceeds 80% for three consecutive minutes, the script automatically restarts the incusd service. After implementing this, I'll monitor whether the issue recurs.

Here's the script:

```bash
#!/bin/bash
# Script file: /root/monitor_incusd_top.sh
# Function: Check the CPU usage of the incusd process every minute (using top sampling), and restart the service if it exceeds 80% for 3 consecutive minutes

# Set log file and counter file paths
LOG_FILE="/root/incusd_monitor.log"
COUNTER_FILE="/tmp/incusd_high_cpu_counter"

# If the counter file doesn't exist, create and initialize it to 0
if [ ! -f "$COUNTER_FILE" ]; then
    echo "0" > "$COUNTER_FILE"
fi

# Get current time
CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

# Use top sampling, note: the output fields of top may vary in different systems, 
# generally the CPU usage is in the 9th column, adjust according to actual situation
sleep 1
CPU_USAGE=$(top -b -n1 | grep incusd | grep -v grep | awk '{print $9}' | sort -nr | head -n 1)

# Check if the incusd process was found
if [ -z "$CPU_USAGE" ]; then
    echo "$CURRENT_TIME - incusd process not running" >> "$LOG_FILE"
    echo "0" > "$COUNTER_FILE"
    exit 0
fi

# If possible, print the sampling value format (remove percentage sign if present)
CPU_USAGE_NUM=$(echo "$CPU_USAGE" | sed 's/%//g')

# Use bc to compare CPU_USAGE with 80.0 (returns 1 if true)
if [ "$(echo "$CPU_USAGE_NUM > 80.0" | bc -l)" -eq 1 ]; then
    # Increment counter
    COUNTER=$(<"$COUNTER_FILE")
    COUNTER=$((COUNTER + 1))
    echo "$COUNTER" > "$COUNTER_FILE"
    
    echo "$CURRENT_TIME - incusd process highest CPU usage: $CPU_USAGE_NUM%, counter: $COUNTER" >> "$LOG_FILE"
    
    # If high CPU usage is detected 3 consecutive times, restart the service
    if [ "$COUNTER" -ge 3 ]; then
        echo "$CURRENT_TIME - incusd process CPU usage exceeded 80% for 3 consecutive minutes, restarting service..." >> "$LOG_FILE"
        systemctl restart incus >> "$LOG_FILE" 2>&1
        echo "$CURRENT_TIME - incus service restart completed" >> "$LOG_FILE"
        # Reset counter
        echo "0" > "$COUNTER_FILE"
    fi
else
    # CPU usage normal, reset counter
    echo "0" > "$COUNTER_FILE"
    echo "$CURRENT_TIME - incusd process highest CPU usage: $CPU_USAGE_NUM%, status normal" >> "$LOG_FILE"
fi
```

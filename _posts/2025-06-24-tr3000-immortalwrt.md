---
title: 'Tinkering with the Cudy TR3000 and ImmortalWrt'
date: 2025-06-24
permalink: /posts/2025/06/tr3000-immortalwrt/
author_profile: false
tags:
  - Cudy
  - TR3000
  - ImmortalWrt
  - OpenWrt
  - Router
lang: en
other_lang: /zh/posts/2025/06/tr3000-immortalwrt/
---
I've been using soft routers for quite some time now. At my home, my setup was an x86 mini PC running ImmortalWrt (an OpenWrt fork) with separate ACs and APs for wireless coverage. For this, I even set up a project (https://github.com/t0saki/openwrt-personal/releases/) to store my build configurations and to take advantage of the free compute power from GitHub Actions. You could say it was a practical DevOps exercise (I'm sure of it).

However, I recently moved into a rented apartment, and my need for an open router system remains. Using an x86 mini PC with a wireless card is not only bulky, but getting the card to work in wireless repeater mode can also be quite a hassle. The transmission power is often underwhelming, and more importantly, most Wi-Fi cards don't support simultaneous 2.4G and 5G APs, which means my 2.4G-only Kindle wouldn't be able to connect to the internet. (Seriously, Amazon, when are you going to release a Kindle with physical buttons that supports 5G Wi-Fi and USB-C?) Also, considering my HomeLab with all its compute power is back at my family home, my performance needs in the apartment aren't that high. So, getting a dedicated open-source hardware router would be more convenient and cost-effective.

After some searching, I settled on the Cudy TR3000 (this is not an ad, though I wish I were getting paid for one). The main factors were its small size and "good enough" specs. I had previously been tempted by the very similar MT3000, which uses the same hardware solution, but was scared off by its high price. In contrast, this device costs only 123 RMB, which is quite cheap for an AX3000 router, and it doesn't have the "miniaturization premium." As for the downsides, the single 2.5G port is a bit odd (you'd need at least two for them to be truly useful, but I don't need it anyway), and the specs—a dual-core A53 CPU and 128MB of storage—are really just "good enough."

![jd-order.png](https://i.tsk.im/file/BzFuKFF7.png)![photo.JPG](https://i.tsk.im/file/qCoJTKji.jpg)

Cudy seems to be a savvy company. After someone on the OpenWrt Forum adapted the firmware for the TR3000 and contacted them, Cudy released a signed unlocking firmware. The specific steps can be found [here](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8411618) (in Chinese), and the U-Boot to use is [this one](https://www.right.com.cn/forum/thread-8415351-1-1.html) (in Chinese).

Initially, I wanted to try the `ubootmod` version adapted for the TR3000 by ImmortalWrt, which is supposed to include an FIP partition after building. However, after flashing it, it still seemed to be the small partition version, with only a few MB of available space. Frustrated, I had to resort to using the regular target without `ubootmod`. This method is actually more widely discussed in the Chinese community. For example, the aforementioned U-Boot, which supports three different partition sizes, is suitable for the regular target (the one without a suffix). The firmware I built is the 112M version of it (`immortalwrt-tosaki-yyyymmdd-mediatek-filogic-cudy_tr3000-v1-squashfs-sysupgrade_v24.10.1_tr3000_v1.bin`).

![tr3000-web.jpg](https://i.tsk.im/file/htr3rbq0.jpg)

Flashing a `ubootmod` device back to a standard one has a little pitfall. You need to write to the FIP partition, but the firmware mentioned in the tutorials for writing to the FIP partition only works on the standard (non-`ubootmod`) devices. I documented the solution [here](https://www.right.com.cn/forum/thread-8433045-1-1.html) (in Chinese). In short, you build the firmware with the `kmod-mtd-rw` package included, and then unlock the partition using `insmod mtd-rw.ko i_want_a_brick=1`.

So far, I'm quite satisfied with it. I haven't encountered any stability issues yet. Running proxy applications, including encryption/decryption overhead, I can get speeds of 500Mbps+. Anything higher is likely limited by my current internet bandwidth.
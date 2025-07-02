---
title: 'Cudy TR3000 + ImmortalWrt 折腾记录'
date: 2025-06-24
permalink: /zh/posts/2025/06/tr3000-immortalwrt/
author_profile: false
tags:
  - Cudy
  - TR3000
  - ImmortalWrt
  - OpenWrt
  - Router
lang: zh
other_lang: /posts/2025/06/tr3000-immortalwrt/
---
我接触软路由已有不短时日，之前在家里用的就是x86小主机+ImmortalWrt(OpenWrt变种)+单独的AC、AP无线覆盖。为此也搞了个项目(https://github.com/t0saki/openwrt-personal/releases/)用来存编译配置和白嫖Actions编译算力，也算是DevOps实战了(确信)。

不过最近搬入了出租房，对开放路由系统的需求依然存在。使用带无线网卡的x86小主机不仅占地，要让网卡支持无线中继也可能颇费周折，发射功率也不尽如人意，而且重要的是网卡大多不支持同时发射2.4G和5G的AP，意味着仅支持2.4G的Kindle会无法联网。(所以说亚马逊什么时候才能出支持5G和Type-C的实体按键Kindle？)再考虑到其实HomeLab算力都在家里，出租屋这边对小主机的性能需求并不高，不如直接搞个开放的硬路由方便又省钱。

经过一番挑选，最后还是选了Cudy TR3000这款(不是广告，我倒是想收广告费)。主要因素是小、参数够用，而且之前曾经被非常相似的同方案MT3000种过草，但被高昂的售价吓退了；相比之下这玩意只要123r，在AX3000里也算便宜了，没有mini化的溢价。缺点的话就是单2.5G意义不明(至少两个才有用吧，不过对我来说也不需要)，以及CPU双核A53、存储128M这些参数真的就只是够用而已。

![jd-order.png](https://i.tsk.im/file/BzFuKFF7.png)![photo.JPG](https://i.tsk.im/file/O7cAqVxC.jpeg)

Cudy这家还是挺懂的，在OpenWrt Fourm上看到有人适配了TR3000后联系Cudy，这公司就放出了个带签名的解锁固件。具体操作流程参考[这里](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8411618)，UBoot使用[这个](https://www.right.com.cn/forum/thread-8415351-1-1.html)。

起先我还想试用一下ImmortalWrt为TR3000适配的ubootmod，构建完后会带有FIP分区。但刷入之后看起来还是小分区版本，可用空间只有几M，无奈只能使用普通的不带ubootmod的target。这种方法在中文社区反倒讨论更多，比如上面提到的三种分区大小可适配的UBoot就适用于普通不带后缀的target，我构建的固件则是其中112M的版本(immortalwrt-tosaki-yyyymmdd-mediatek-filogic-cudy_tr3000-v1-squashfs-sysupgrade_v24.10.1_tr3000_v1.bin)。

![tr3000-web.jpg](https://i.tsk.im/file/htr3rbq0.jpg)

ubootmod设备刷回普通设备也有点小坑，需要刷写FIP分区，但本身教程中可写FIP分区的固件只适用于无后缀的设备。方法我记在了[这里](https://www.right.com.cn/forum/thread-8433045-1-1.html)，简单来说就是带上`kmod-mtd-rw`构建，之后使用`insmod mtd-rw.ko i_want_a_brick=1`解锁。

目前用下来挺满意，稳定性暂时没发现问题，跑那啥算上加解密也能有500Mbps+，再高可能是这边带宽限制了。
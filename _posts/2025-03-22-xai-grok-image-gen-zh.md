---
title: '使用CF Workers直接让Open WebUI使用xAI的Grok 2 Image图像生成模型'
date: 2025-03-22
permalink: /zh/posts/2025/03/xai-grok-image-gen/
author_profile: false
tags:
  - Cloudflare
  - xAI
  - Grok
  - Open WebUI
  - LLM
  - AI
lang: zh
other_lang: /posts/2025/03/xai-grok-image-gen/
---

项目地址：[**xAI-Image-Gen-API-Refine**](https://github.com/t0saki/xAI-Image-Gen-API-Refine)

# 背景介绍

xAI近期推出了grok-2-image模型，可以进行文生图，。Linux DO站内已有帖子支持通过函数的方式使用文生图（[**open-webui通过函数调用grok-2-image模型生成图片**](https://linux.do/t/topic/507091)），但终究不是Open WebUI(下文简称owui)原生的方式（如下图，原生文生图在首页即可直接调用）。

![image.png](https://i.tsk.im/file/u99ihMeT.png)

根据xAI的文档[Image Generations - Guides](https://docs.x.ai/docs/guides/image-generations)可知，grok-2-image的API风格和OpenAI一致，因此owui应该可以直接使用xAI的API，对…对吗？

![image.png](https://i.tsk.im/file/YKntvB57.png)

如果你直接填入了xAI的API地址[`https://api.x.ai/v1`](https://api.x.ai/v1)，就会发现生成会报错，查看log得知错误信息为`The size parameter is not supported at the moment. Leave it empty.`。好吧，查看API Docs得知目前不能传入size等控制参数。那图片分辨率那一栏留空呢？那就会发现owui不支持这种配置，分辨率是必填项。

# 效果展示

本项目就是为了解决这个问题，使用Cloudflare Workers过滤Image Generation的请求，只保留xAI目前支持的参数，从而让owui可以原生支持grok文生图模型。可以在使用任何模型时点击对话框的图像生成即可。

![image.png](https://i.tsk.im/file/3f4Qlyym.png)

效果如下：

![image.png](https://i.tsk.im/file/6UdUFNWM.png)

# 部署方式

与其他Workers的部署方式相似，您可以直接clone本项目后使用`npm run deploy`即可部署。或者，更简单的方式是直接新建一个Hello World模板的Worker，之后替换为这个文件中的代码[src/index.js](https://github.com/t0saki/xAI-Image-Gen-API-Refine/blob/master/src/index.js)。无需进行其他配置，因为该项目不存储任何KEY等数据，均从每次请求中获取。

# 其他

- 如果您所在地区不能访问CF默认的`workers.dev`域名，可以使用自定义域。
- 本项目不会故意存储信息或后门转发，欢迎各位大佬提供公益API，但不保证第三方的安全性。
- 理论上这个项目也能用于代理对话补全（普通文字对话），但我还没测过。 
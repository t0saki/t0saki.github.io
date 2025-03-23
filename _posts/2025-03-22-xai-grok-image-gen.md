---
title: 'Using CF Workers to Enable Open WebUI to Directly Use xAI''s Grok 2 Image Generation Model'
date: 2025-03-22
permalink: /posts/2025/03/xai-grok-image-gen/
author_profile: false
tags:
  - Cloudflare
  - xAI
  - Grok
  - Open WebUI
  - LLM
  - AI
lang: en
other_lang: /zh/posts/2025/03/xai-grok-image-gen/
---

Project Repository: [**xAI-Image-Gen-API-Refine**](https://github.com/t0saki/xAI-Image-Gen-API-Refine)

# Background

xAI recently launched the grok-2-image model, which can generate images from text. There's already a post on Linux DO showing how to use the text-to-image feature through functions ([**Using grok-2-image model to generate images via function calls in open-webui**](https://linux.do/t/topic/507091)), but this isn't the native method in Open WebUI (abbreviated as owui below), where native image generation can be directly called from the homepage, as shown below.

![image.png](https://i.tsk.im/file/u99ihMeT.png)

According to xAI's documentation [Image Generations - Guides](https://docs.x.ai/docs/guides/image-generations), the API style of grok-2-image is consistent with OpenAI, so owui should be able to use xAI's API directly, right?

![image.png](https://i.tsk.im/file/YKntvB57.png)

If you directly enter xAI's API address [`https://api.x.ai/v1`](https://api.x.ai/v1), you'll encounter an error. Checking the logs reveals the error message: `The size parameter is not supported at the moment. Leave it empty.` Well, looking at the API Docs, we learn that currently control parameters like size cannot be passed. What if we leave the image resolution field empty? That won't work either, as owui doesn't support this configuration - resolution is a required field.

# Demo

This project aims to solve this problem by using Cloudflare Workers to filter Image Generation requests, keeping only the parameters currently supported by xAI, thereby allowing owui to natively support the grok text-to-image model. You can click on image generation in the chat box when using any model.

![image.png](https://i.tsk.im/file/3f4Qlyym.png)

Here's the result:

![image.png](https://i.tsk.im/file/6UdUFNWM.png)

# Deployment

Similar to deploying other Workers, you can simply clone this project and use `npm run deploy` to deploy it. Alternatively, an easier method is to create a new Worker with the Hello World template, and then replace it with the code from this file: [src/index.js](https://github.com/t0saki/xAI-Image-Gen-API-Refine/blob/master/src/index.js). No additional configuration is needed, as the project doesn't store any KEYs or data, obtaining everything from each request.

# Additional Notes

- If you can't access CF's default `workers.dev` domain in your region, you can use a custom domain.
- This project doesn't intentionally store information or include backdoor forwarding. Community APIs are welcome, but third-party security is not guaranteed.
- Theoretically, this project could also be used to proxy conversation completions (regular text conversations), but I haven't tested it yet. 
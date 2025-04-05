---
permalink: /zh/blog/
title: "博客"
author_profile: false
lang: zh
redirect_from: 
  - /zh/blog.html
other_lang: /blog/
---

有部分文章可能使用了LLM(大部分为DeepSeek V3)进行润色，请谨慎阅读。

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "最近文章" }}</h3>

{% for post in site.posts %}
  {% if post.lang == 'zh' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | replace: '//', '/' }}" class="pagination--pager">{{ site.data.ui-text[site.locale].pagination_previous | default: "上一页" }}</a>
  {% else %}
    <span class="pagination--pager disabled">{{ site.data.ui-text[site.locale].pagination_previous | default: "上一页" }}</span>
  {% endif %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | replace: '//', '/' }}" class="pagination--pager">{{ site.data.ui-text[site.locale].pagination_next | default: "下一页" }}</a>
  {% else %}
    <span class="pagination--pager disabled">{{ site.data.ui-text[site.locale].pagination_next | default: "下一页" }}</span>
  {% endif %}
</div> 
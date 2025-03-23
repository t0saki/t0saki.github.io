---
permalink: /blog/
title: "Blog"
author_profile: false
lang: en
redirect_from: 
  - /blog.html
other_lang: /zh/blog/
---

<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "Recent Posts" }}</h3>

{% for post in site.posts %}
  {% if post.lang == 'en' or post.lang == nil %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | replace: '//', '/' }}" class="pagination--pager">{{ site.data.ui-text[site.locale].pagination_previous | default: "Previous" }}</a>
  {% else %}
    <span class="pagination--pager disabled">{{ site.data.ui-text[site.locale].pagination_previous | default: "Previous" }}</span>
  {% endif %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | replace: '//', '/' }}" class="pagination--pager">{{ site.data.ui-text[site.locale].pagination_next | default: "Next" }}</a>
  {% else %}
    <span class="pagination--pager disabled">{{ site.data.ui-text[site.locale].pagination_next | default: "Next" }}</span>
  {% endif %}
</div> 
---
title: "Tag: Grok"
layout: archive
permalink: /zh/tags/grok/
tag: Grok
lang: zh
---

{% include base_path %}
{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == page.tag %}
    {% assign posts = group_items[forloop.index0] %}
    <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
    {% for post in posts %}
      {% if post.lang == page.lang %}
        {% include archive-single.html %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

<div class="pagination">
  <a href="{{ base_path }}/zh/tags/" class="pagination--pager">查看所有标签</a>
</div>

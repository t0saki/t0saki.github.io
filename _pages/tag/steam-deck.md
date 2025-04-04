---
title: "Tag: Steam Deck"
layout: archive
permalink: /tags/steam-deck/
author_profile: false
tag: Steam Deck
---

{% include base_path %}
{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% if tag == page.tag %}
    {% assign posts = group_items[forloop.index0] %}
    {% for post in posts %}
      {% if post.lang != 'zh' %}
        {% include archive-single.html %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

<div class="pagination">
  <a href="{{ base_path }}/tags/" class="pagination--pager">View All Tags</a>
</div>

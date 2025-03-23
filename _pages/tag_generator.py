#!/usr/bin/env python3

import os
import re
import yaml
import glob

# Configuration
tag_dir = "_pages/tag"
tag_layout = "archive"

# Create tag directory if it doesn't exist
os.makedirs(tag_dir, exist_ok=True)

# Get list of posts
posts = glob.glob('_posts/*.md')

# Extract tags
all_tags = []
for post in posts:
    with open(post, 'r', encoding='utf-8') as f:
        content = f.read()
        front_matter_match = re.search(r'^---\s+(.*?)\s+---', content, re.DOTALL)
        if front_matter_match:
            try:
                front_matter = yaml.safe_load(front_matter_match.group(1))
                if 'tags' in front_matter and front_matter['tags']:
                    all_tags.extend(front_matter['tags'])
            except Exception as e:
                print(f"Error processing {post}: {e}")

# Remove duplicates
all_tags = list(set(all_tags))

# Create tag pages
for tag in all_tags:
    if tag:  # Skip empty tags
        tag_filename = os.path.join(tag_dir, f"{tag.lower().replace(' ', '-')}.md")
        with open(tag_filename, 'w', encoding='utf-8') as f:
            f.write("---\n")
            f.write(f"title: \"Tag: {tag}\"\n")
            f.write(f"layout: {tag_layout}\n")
            f.write(f"permalink: /tags/{tag.lower().replace(' ', '-')}/\n")
            f.write(f"tag: {tag}\n")
            f.write("---\n\n")
            f.write("{% include base_path %}\n")
            f.write("{% include group-by-array collection=site.posts field=\"tags\" %}\n\n")
            f.write("{% for tag in group_names %}\n")
            f.write("  {% if tag == page.tag %}\n")
            f.write("    {% assign posts = group_items[forloop.index0] %}\n")
            f.write("    <h2 id=\"{{ tag | slugify }}\" class=\"archive__subtitle\">{{ tag }}</h2>\n")
            f.write("    {% for post in posts %}\n")
            f.write("      {% include archive-single.html %}\n")
            f.write("    {% endfor %}\n")
            f.write("  {% endif %}\n")
            f.write("{% endfor %}\n\n")
            f.write("<div class=\"pagination\">\n")
            f.write("  <a href=\"{{ base_path }}/tags/\" class=\"pagination--pager\">查看所有标签</a>\n")
            f.write("</div>\n")

print(f"Generated tag pages for: {', '.join(all_tags)}") 
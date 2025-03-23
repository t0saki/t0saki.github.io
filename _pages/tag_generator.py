#!/usr/bin/env python3

import os
import re
import yaml
import glob

# Configuration
tag_dir = "_pages/tag"
zh_tag_dir = "_pages/zh/tag"
tag_layout = "archive"

# Create tag directories if they don't exist
os.makedirs(tag_dir, exist_ok=True)
os.makedirs(zh_tag_dir, exist_ok=True)

# Get list of posts
posts = glob.glob('_posts/*.md')

# Extract tags and language
en_tags = []
zh_tags = []

for post in posts:
    with open(post, 'r', encoding='utf-8') as f:
        content = f.read()
        front_matter_match = re.search(r'^---\s+(.*?)\s+---', content, re.DOTALL)
        if front_matter_match:
            try:
                front_matter = yaml.safe_load(front_matter_match.group(1))
                
                # Determine language based on filename or front matter
                is_zh = False
                if 'lang' in front_matter:
                    is_zh = front_matter.get('lang') == 'zh'
                elif '-zh' in os.path.basename(post):
                    is_zh = True
                
                # Add tags to appropriate language list
                if 'tags' in front_matter and front_matter['tags']:
                    if is_zh:
                        zh_tags.extend(front_matter['tags'])
                    else:
                        en_tags.extend(front_matter['tags'])
            except Exception as e:
                print(f"Error processing {post}: {e}")

# Remove duplicates
en_tags = list(set(en_tags))
zh_tags = list(set(zh_tags))

# Function to create tag page
def create_tag_page(tag, output_dir, permalink_prefix, lang=None):
    tag_filename = os.path.join(output_dir, f"{tag.lower().replace(' ', '-')}.md")
    with open(tag_filename, 'w', encoding='utf-8') as f:
        f.write("---\n")
        f.write(f"title: \"Tag: {tag}\"\n")
        f.write(f"layout: {tag_layout}\n")
        f.write(f"permalink: {permalink_prefix}{tag.lower().replace(' ', '-')}/\n")
        f.write(f"author_profile: false\n")
        f.write(f"tag: {tag}\n")
        if lang:
            f.write(f"lang: {lang}\n")
        f.write("---\n\n")
        f.write("{% include base_path %}\n")
        f.write("{% include group-by-array collection=site.posts field=\"tags\" %}\n\n")
        
        if lang:
            f.write("{% for tag in group_names %}\n")
            f.write("  {% if tag == page.tag %}\n")
            f.write("    {% assign posts = group_items[forloop.index0] %}\n")
            f.write("    {% for post in posts %}\n")
            f.write("      {% if post.lang == page.lang %}\n")
            f.write("        {% include archive-single.html %}\n")
            f.write("      {% endif %}\n")
            f.write("    {% endfor %}\n")
            f.write("  {% endif %}\n")
            f.write("{% endfor %}\n\n")
        else:
            f.write("{% for tag in group_names %}\n")
            f.write("  {% if tag == page.tag %}\n")
            f.write("    {% assign posts = group_items[forloop.index0] %}\n")
            f.write("    {% for post in posts %}\n")
            f.write("      {% if post.lang != 'zh' %}\n")
            f.write("        {% include archive-single.html %}\n")
            f.write("      {% endif %}\n")
            f.write("    {% endfor %}\n")
            f.write("  {% endif %}\n")
            f.write("{% endfor %}\n\n")
        
        # 返回链接
        if lang == 'zh':
            f.write("<div class=\"pagination\">\n")
            f.write("  <a href=\"{{ base_path }}/zh/tags/\" class=\"pagination--pager\">查看所有标签</a>\n")
            f.write("</div>\n")
        else:
            f.write("<div class=\"pagination\">\n")
            f.write("  <a href=\"{{ base_path }}/tags/\" class=\"pagination--pager\">View All Tags</a>\n")
            f.write("</div>\n")

# Create English tag pages
for tag in en_tags:
    if tag:  # Skip empty tags
        create_tag_page(tag, tag_dir, "/tags/")

# Create Chinese tag pages
for tag in zh_tags:
    if tag:  # Skip empty tags
        create_tag_page(tag, zh_tag_dir, "/zh/tags/", 'zh')

print(f"Generated English tag pages for: {', '.join(en_tags)}")
print(f"Generated Chinese tag pages for: {', '.join(zh_tags)}") 
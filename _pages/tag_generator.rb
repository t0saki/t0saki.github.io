#!/usr/bin/env ruby

require 'yaml'

# Load _config.yml
config = YAML.load_file('_config.yml')
tag_dir = "_pages/tag"
tag_layout = "archive"

# Get list of posts
posts = Dir.glob('_posts/*md')

# Extract tags
all_tags = []
posts.each do |post|
  content = File.read(post)
  if content =~ /^---(.+?)---/m
    front_matter = YAML.load($1)
    if front_matter['tags']
      all_tags.concat(front_matter['tags'])
    end
  end
end

# Remove duplicates
all_tags.uniq!

# Create tag pages
all_tags.each do |tag|
  tag_filename = "#{tag_dir}/#{tag.downcase.gsub(' ', '-')}.md"
  File.open(tag_filename, 'w') do |file|
    file.puts "---"
    file.puts "title: \"Tag: #{tag}\""
    file.puts "layout: #{tag_layout}"
    file.puts "permalink: /tags/#{tag.downcase.gsub(' ', '-')}/"
    file.puts "tag: #{tag}"
    file.puts "---"
    file.puts ""
    file.puts "{% include base_path %}"
    file.puts "{% include group-by-array collection=site.posts field=\"tags\" %}"
    file.puts ""
    file.puts "{% for tag in group_names %}"
    file.puts "  {% if tag == page.tag %}"
    file.puts "    {% assign posts = group_items[forloop.index0] %}"
    file.puts "    <h2 id=\"{{ tag | slugify }}\" class=\"archive__subtitle\">{{ tag }}</h2>"
    file.puts "    {% for post in posts %}"
    file.puts "      {% include archive-single.html %}"
    file.puts "    {% endfor %}"
    file.puts "  {% endif %}"
    file.puts "{% endfor %}"
    file.puts ""
    file.puts "<div class=\"pagination\">"
    file.puts "  <a href=\"{{ base_path }}/tags/\" class=\"pagination--pager\">查看所有标签</a>"
    file.puts "</div>"
  end
end

puts "Generated tag pages for: #{all_tags.join(', ')}" 
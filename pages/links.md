---
layout: page
title: Links
description: 没有链接的博客是孤独的
keywords: 友情链接
comments: true
menu: 链接
permalink: /links/
---

<section>
  <h2>我的朋友们</h2>
  <div class="link-container">
    {% for link in site.data.links %}
    <div class="link-card">
      <img src="{{ link.icon }}" alt="{{ link.name }} icon" class="link-icon">
      <a href="{{ link.url }}" target="_blank">{{ link.name }}</a>
    </div>
    {% endfor %}
  </div>
</section>

---
layout: page
title: About / 关于
description: 不知道写啥，以后再改
keywords: 关于,青云志
comments: true
menu: 关于
permalink: /about/
---

----

对于网络，又菜又爱玩，喜欢搜集乱七八糟的玩意  
对于生活，有很多期待，也有很多失望  
对于工作，已经失去了热爱，变成了谋生的手段  

## 联系

<ul>
{% for website in site.data.social %}
<li>{{website.sitename }}：<a href="{{ website.url }}" target="_blank">@{{ website.name }}</a></li>
{% endfor %}
{% if site.url contains 'yutian81.github.io' %}
<li>
微信公众号：<br />
<img style="height:192px;width:192px;border:1px solid lightgrey;" src="{{ site.url }}/assets/images/qrcode.jpg" alt="青云志" />
</li>
{% endif %}
</ul>


## 关键词

{% for skill in site.data.skills %}
### {{ skill.name }}
<div class="btn-inline">
{% for keyword in skill.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}

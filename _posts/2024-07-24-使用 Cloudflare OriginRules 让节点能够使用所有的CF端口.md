---  
layout: post  
title: 使用 Cloudflare OriginRules 让节点能够使用所有的CF端口  
name: 2024-07-24-使用 Cloudflare OriginRules 让节点能够使用所有的CF端口  
description: 使用场景：有很多优选IP；回源端口不一致；节点端口不是CF支持的端口  
categories:  
  - 端口  
  - 回源  
  - cloudflare  
keywords:   
share: true  
topmost: false  
---  
  
## 使用场景  
  
- 有很多优选 IP  
- 回源端口不一致  
- 节点端口不是 CF 支持的端口  
  
## 回源规则配置  
  
### 关于 CF CDN 端口问题解释  
  
无回源规则:    
80->80    
443->443    
2052->2052    
一一对应    
有回源规则 如回源到 12345    
80->12345    
443->12345    
2052->12345    
所有 CF 支持的端口全部访问指定的回源端口  
  
#### 经过实际测试 SSL 开灵活除 443 端口以为其他 TLS 端口均无法生效  
  
## 节点配置  
  
节点我们需要有两个节点一个不使用 TLS 一个使用 TLS  
  
![1690736824356.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690736824356.png)  
  
![1690736953404.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690736953404.png)  
  
### 两个节点端口必须不同, uuid host path 必须相同 这样是为了方便合并成一个节点  
  
## CF 回源规则配置  
  
对于 CF 的回源规则同样需要两个规则  
  
![1690737328992.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690737328992.png)  
  
![1690737374203.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690737374203.png)  
  
![1690737430855.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690737430855.png)  
  
现在你的节点就能够使用 CF 的 13 个端口了  
  
### 进阶配置  
  
1.使用 URL 路径来批量指定节点  
  
![1690737629255.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690737629255.png)  
  
2.使用 Configuration Rules 来设置 SSL 是否为完全  
  
![1690737780552.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690737780552.png)  
  
拉到最底部  
  
![1690737807369.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690737807369.png)  
  
## 至此配置完成  
  
![1690738142250.png](https://r2.bestip.one/image/%E4%BD%BF%E7%94%A8CloudflareOriginRules%E8%AE%A9%E8%8A%82%E7%82%B9%E8%83%BD%E5%A4%9F%E6%89%80%E6%9C%89%E7%9A%84CF%E7%AB%AF%E5%8F%A3/1690738142250.png)  
  
节点的 TLS 只需要简单的在 v2 里面点击打开就行了不需要输入相关配置  

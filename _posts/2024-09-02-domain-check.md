---  
layout: post  
title: domain-check：监控域名到期并通过TG提醒  
name: 2024-09-02-domain-check  
description: 这是一个简洁高效的域名可视化展示面板，基于 Cloudflare Workers 构建。它提供了一个直观的界面，让用户能够一目了然地查看他们域名的状态、注册商、注册日期、过期日期和使用进度，并可在到期前通过 TG 机器人向用户推送通知  
categories:  
  - 监控  
  - 域名  
  - TG  
keywords:   
share: true  
topmost: false  
---  
  
## 部署方法  
  
### 1、workers 部署  
  
在 cf 中创建一个 workers，复制 `_worker.js` 中的代码到 workers 中，点击保存并部署。    
  
项目地址：[GitHub - yutian81/domain-check](https://github.com/yutian81/domain-check)  
  
[![快速部署到 CF Worker](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/yutian81/domain-check)  
  
### 2、pages 部署  
  
fork 本仓库，在 cf 中创建一个 pages，链接到你 fork 的仓库，点击部署  
  
## 变量设置  
  
| 变量名      | 填写示例                                                          | 说明                         | 是否必填 |  
| -------- | ------------------------------------------------------------- | -------------------------- | ---- |  
| SITENAME | 我的域名监控                                                        | 自定义站点名称，默认为 `域名监控`         | 否    |  
| DOMAINS  | `https://raw.githubusercontent.com/用户名/仓库名/main/domains.json` | 替换为你自己的 json 文件            | 是    |  
| TGID     | 652***4277                                                    | TG 机器人 ID，不需要通知可不填         | 否    |  
| TGTOKEN  | 60947***43:BBCrcWzLbXghYU8vdtt0jyESjpL9-uKM7p8                | TG 机器人 TOKEN，不需要通知可不填      | 否    |  
| DAYS     | 7                                                             | 提前几天发送 TG 提醒，必须是整数，默认为 `7` | 否    |  
  
## 域名信息 json 文件格式  
  
**示例**  
  
```  
[  
  { "domain": "883344.best", "registrationDate": "2024-06-16", "expirationDate": "2025-07-15", "system": "SpaceShip", "systemURL": "https://www.spaceship.com/zh" },  
  { "domain": "711911.xyz", "registrationDate": "2024-04-16", "expirationDate": "2029-04-15", "system": "SpaceShip", "systemURL": "https://www.spaceship.com/zh" },  
  { "domain": "hello.xyz", "registrationDate": "2024-07-17", "expirationDate": "2025-07-16", "system": "SpaceShip", "systemURL": "https://www.spaceship.com/zh" }  
]  
```  
  
## 相关截图  
  
TG 通知截图    
![TG通知.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/1724210502008%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20240821104404.png)  
  
监控页面截图    
![监控页面.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17242327870871724232786683.png)  
  
## 致谢  
  
[ypq123456789](https://github.com/ypq123456789/domainkeeper)  

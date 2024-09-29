---  
layout: post  
title: 在 Koyeb 上搭建 Uptime Kuma 来监测站点、服务和节点  
name: 2024-09-26-koyeb-uptime-kuma  
description: 在 Koyeb 上搭建 Uptime Kuma，用来监控站点是否可以正常访问、服务是否在线、节点端口是否可连通、argo隧道是否在线、api服务是否可用等等，功能非常丰富  
categories:  
  - 监测  
  - Koyeb  
  - Uptime  
keywords:  
  - koyeb  
  - uptime  
share: true  
topmost: false  
---  
  
## 项目资源  
  
这个项目原作者是 `louislam` 大佬，仓库地址：[点此直达](https://github.com/louislam/uptime-kuma) ，docker 镜像：[点此直达](https://hub.docker.com/r/louislam/uptime-kuma)  
  
项目部署方式有多种，主要有：VPS-docker 方式、VPS- 非 docker 方式、PaaS 平台 docker 镜像方式等  
  
大家可以先去仓库看看作者的文档，了解基本原理，顺便给作者点个 star！  
  
搭建好的 DEMO：[Serv00 状态监测](https://uptime.24811213.xyz/status/serv00)  
  
## 部署平台  
  
本文不再赘述 VPS 部署方式，作者的文档已经写的非常情况  
  
这里主要探讨通过如何通过 PaaS 平台拉取 docker 镜像的方式部署  
  
我这里使用的平台是 `Koyeb`，其他支持 docker 的平台比如 `Northflank` 也是同样的原理  
  
推荐使用 `koyeb` 来部署，因为 koyeb 官方提供了非常便捷的一键部署  
  
部署过程中所需要填写的 `变量名` 都已经自动生成，只需填入 `变量值`  
  
koyeb 官网：[https://www.koyeb.com/](https://www.koyeb.com/)  
  
koyeb 一键部署项目：[GitHub - koyeb/example-uptime-kuma](https://github.com/koyeb/example-uptime-kuma)  
  
## 部署步骤  
  
### 一、先申请一个免费的 S3 存储桶  
  
`S3存储桶` 是为了存储项目的数据库，避免服务重启后设置项丢失  
  
koyeb 官方推荐的 S3 是 `Backblaze`，[点击直达](https://www.backblaze.com/)  
  
但我个人并不推荐这个，由于未知原因，`Backblaze` 并未按预期存储任何数据，我就经历了数据丢失、设置全无的情况，重新配置监控项目是很麻烦的事情  
  
这里我推荐使用 `CF` 家的 `R2` 存储桶服务，免费用户 `10G` 容量，足够了  
  
进入 CF 官网【[点击直达](https://dash.cloudflare.com/)】，创建一个 R2 存储桶  
  
![17273411718141727341171367.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273411718141727341171367.png)  
  
![17273413331181727341332564.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273413331181727341332564.png)  
  
> [!IMPORTANT]  
>  
> **将这里的存储桶名称、地理位置记录复制下来保存，比如——名称：uptime，位置：APAC**  
  
然后回到 `R2概述` 界面，点击右侧的 `管理 R2 API 令牌`，创建一个管理令牌  
  
![17273415359261727341535258.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273415359261727341535258.png)  
  
按下图选择，完成后点击创建  
  
![17273417504191727341749907.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273417504191727341749907.png)  
  
> [!IMPORTANT]  
>  
> **重点：然后会生成一些数据，将以下数据保存下来备用**  
  
![17273419250671727341924477.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273419250671727341924477.png)  
  
### 二、一键部署到 Koyeb  
  
首先登录你的 koyeb，然后 [点此一键部署](https://www.koyeb.com/deploy/uptime-kuma)  
  
> [!WARNING]  
>  
> koyeb 新号部署服务容易触发风控并封号，建议号注册满 1 周以上再部署服务  
  
选择免费实例  
  
![17273432160171727343215472.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273432160171727343215472.png)  
  
最重要的 `Environment variables` 环境变量设置，一共有 7 个变量，按以下说明填写：  
  
- LITESTREAM_ACCESS_KEY_ID=对应 R2 存储桶的 `访问密钥 ID`  
- LITESTREAM_BUCKET=对应 R2 存储桶的 `存储桶名称`，比我的是 uptime  
- LITESTREAM_PATH=uptime 项目再存储桶中的存储路径，可以自定义，比如 `koyeb`  
- LITESTREAM_REGION=对应 R2 存储桶的区域，我选的是亚太地区，即 `APAC`  
- LITESTREAM_SECRET_ACCESS_KEY=对应 R2 存储桶的 `机密访问密钥`  
- LITESTREAM_URL=对应 R2 存储桶的 `S3 客户端终结点`，以 `https://` 开头  
- UPTIME_KUMA_PORT=开放的端口，就填 `8000` 不要乱改
- UPTIME_KUMA_CLOUDFLARED_TOKEN=argo的token，[token获取教程](https://github.com/louislam/uptime-kuma/wiki/Reverse-Proxy-with-Cloudflare-Tunnel)，token可以在这里设置变量，也可以搭建好后在项目管理面板的设置里去定义，设置好argo后，即可以通过访问argo域名来访问项目，也即`反向代理`

设置完成后，点击创建，等待部署完成，得到 koyeb 分配的一个网址，格式为：`xxxx-xxxx-xxxx.koyeb.app`  
  
![17273438750941727343874253.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273438750941727343874253.png)  
  
点击进入，即可访问项目管理面板，第一个访问面板并创建的账号就是管理员账号  
  
## 项目设置  
  
设置部分不再详细描述，简单截几张图，根据自己的需要去设置就可以了。  
  
![17273441040921727344104043.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273441040921727344104043.png)  
  
![17273443190951727344318119.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273443190951727344318119.png)  
  
添加好监控项后，进入状态页面设置，点击右上角 `状态页面`  
  
![17273444300991727344429645.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273444300991727344429645.png)  
  
![17273445490491727344548477.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273445490491727344548477.png)  
  
![17273446478771727344647294.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273446478771727344647294.png)  
  
设置完成后，得到一个公开的网址：[Serv00 状态监测](https://uptime.24811213.xyz/status/serv00)，任何人都可以访问这个网址  
  
如果你的站点、服务或 API 掉线了，通过 TG 机器人你可以第一时间获得通知  
  
![17273447940541727344793479.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273447940541727344793479.png)  
  
其他还有很多设置项，你可以自己去摸索  
  
> [!TIPS]  
>  
> koyeb 免费版不支持绑定自定义域名，推荐使用cf的argo隧道来反代，项目本身支持运行argo：        
> 通过项目后台设置里自带的 `cloudflared` 选项进行设置：    
> 在 CF 后台创建一个 argo 隧道，协议选 `http`，服务填 `http://localhost:8000`，将获取的 `token` 填入到项目的 `cloudflared` 设置项里并启动它。
> 如果在部署时已经设置了这个变量`UPTIME_KUMA_CLOUDFLARED_TOKEN`，则此处不用再设置，`cloudflared`会自动启动  
  
![17273454946951727345494151.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17273454946951727345494151.png)  

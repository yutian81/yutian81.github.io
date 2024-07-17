---  
layout: post  
title: 通过 Cloudflare Tunnel 对内网 Web 服务进行反向代理发布 Web 站点  
name: 2024-07-17-Cloudflare-Tunnel-fandai  
description: 通过 Cloudflare Tunnel 对内网 Web 服务进行反向代理发布 Web 站点，将部署在内网的本地服务反向代理到公网，本文以docker方式部署  
categories:  
  - 反向代理  
  - argo  
  - cloudflare  
keywords:   
share: true  
topmost: false  
---  
  
## 1、来到 cloudflare 首页  
  
https://www.cloudflare.com/zh-cn  
  
## 2、登入到 cloudflare，首页点击 zero trust  
  
![2024-05-08T07:29:43.png](https://www.milaone.com/usr/uploads/2024/05/2017611789.png "2024-05-08T07:29:43.png")  
  
## 3、在进入到 Networks-->Tunnels  
  
![2024-05-08T07:41:42.png](https://www.milaone.com/usr/uploads/2024/05/3353415380.png "2024-05-08T07:41:42.png")  
  
## 4、再选择添加一个通道 Add a tunnel  
  
![2024-05-08T07:44:17.png](https://www.milaone.com/usr/uploads/2024/05/4179603346.png "2024-05-08T07:44:17.png")  
  
## 5、选择使用 cloudflared 客户端，再下一步  
  
![2024-05-08T07:47:16.png](https://www.milaone.com/usr/uploads/2024/05/3351229790.png "2024-05-08T07:47:16.png")  
  
## 6、给这个通道取名，方便识别，再下一步  
  
![2024-05-08T07:50:53.png](https://www.milaone.com/usr/uploads/2024/05/3647999332.png "2024-05-08T07:50:53.png")  
  
## 7、先选择 docker 平台，然后再点第 2 步中的复制，把这段代码复制出来备用  
  
![2024-05-08T08:00:55.png](https://www.milaone.com/usr/uploads/2024/05/1297867551.png "2024-05-08T08:00:55.png")  
  
```  
docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiNGQwNTk5NWQ0ZTFiZTk5ZDJjMTZkOGMzYjQ1NDhkMjYiLCJ0IjoiMGIzNmFiMmQtMzQ1NC00N2NhLWE0NzQtZDA0ZjkwMGI4ODcyIiwicyI6Ik9UTmhaRFV5Tfdafa0RdjsdjJtu3dsdGFS5tVm1OUzAwTm1Jd0xXRTVNak10T1RJellUUTJNRFV6WldNNCJ9  
```  
  
> 因为官方给出的 docker 创建方式，缺少一个重启后的策略，所以再重启后不能自动运行，所以我们只选择复制出来的命令中的 token 的密码部分，下面的代码是我修改过的部署 docker 容器的命令，最后加入您复制出来的 token 密码即可使用  
  
```  
docker run --name cloudflared -d --restart=unless-stopped cloudflare/cloudflared:latest tunnel --no-autoupdate run --token ‘这里替换成你的token密码，不要带引号’  
```  
  
## 8、然后复制到路由器 ssh 终端中进行部署  
  
![2024-05-08T08:14:34.png](https://www.milaone.com/usr/uploads/2024/05/1121620860.png "2024-05-08T08:14:34.png")  
  
## 9、容器运行起来后继续设置  
  
当前隧道的设置页面来到了域名部分：  
  
- 第 1 步，这里填一个子域名，选择一个当前可以使用的域。  
- 第 2 步，这里选择提供 web 服务的内网 ip 及端口以及协议。  
- 第 3 步，保存，设置结束，去访问一下看看吧。  
  
![2024-05-08T08:22:13.png](https://www.milaone.com/usr/uploads/2024/05/2263970796.png "2024-05-08T08:22:13.png")  
  
原文出处：[米拉一频道](https://milaone.com/archives/44.html)  

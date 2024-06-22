---  
layout: post  
title: 如何在手机上优选cloudflare ip  
name: 2024-06-22-如何在手机上优选cloudflare ip  
description: 在手机上通过开源的Termux以及CloudflareSpeedTest工具优选CFIP  
categories:  
  - cloudflare  
  - IP筛选  
keywords:   
share: true  
topmost: false  
---  
  
## 需要的软件  
  
优选 ip 工具：[https://github.com/XIU2/CloudflareSpeedTest](https://github.com/XIU2/CloudflareSpeedTest)  
  
Termux 下载: [https://github.com/termux/termux-app/releases](https://github.com/termux/termux-app/releases)  
  
## 运行 Termux  
  
更新软件源  
  
```  
pkg update -y  
```  
  
给 termux 读取手机存储的权限：  
  
```  
termux-setup-storage  
```  
  
安装 wget  
  
```  
pkg install wget -y  
```  
  
下载优选 ip 工具  
  
```  
wget -N https://ghproxy.net/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.2.5/CloudflareST_linux_arm64.tar.gz    
```  
  
或者  
  
```  
wget -N https://gh-proxy.com/https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.2.5/CloudflareST_linux_arm64.tar.gz    
```  
  
解压优选 ip 工具压缩包  
  
```  
tar -zxf CloudflareST_linux_arm64.tar.gz  
```  
  
添加执行权限  
  
```  
chmod +x CloudflareST  
```  
  
优选 ip  
  
```  
./CloudflareST -url https://cdn.cloudflare.steamstatic.com/steam/apps/256843155/movie_max.mp4  
```  
  
> 上面的地址是一个测速地址，也可以换成其他地址，比如 mingyu 大佬提供的    
> `https://spurl.api.030101.xyz/100mb  

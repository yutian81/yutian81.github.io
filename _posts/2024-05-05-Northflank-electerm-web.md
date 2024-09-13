---  
layout: post  
title: 用 Northflank 实现 electerm 网页版的私有化部署  
name: 2024-05-05-Northflank-electerm-web  
description: 用 Northflank 实现 electerm 网页版的私有化部署，无需vps，纯免费。可以无需梯子访问被墙的vps，可以访问纯ipv6的vps，可以与你的桌面版 electerm 客户端同步设置，客户端所具有的一切功能，web版都可以实现  
categories:  
  - 客户端  
  - electerm  
  - Northflank  
  - SSH  
keywords:   
share: true  
topmost: false  
---  
  
首先需要致谢 electerm-web 的作者 zxdong262  
  
作者仓库主页：[electerm · GitHub](https://github.com/electerm/)  
  
作者项目地址：[GitHub - electerm/electerm-web: Running electerm as web app](https://github.com/electerm/electerm-web)，喜欢就去 star 吧  
  
其次需要感谢非常良心的 PaaS 平台——[Northflank](https://app.northflank.com/)，免费且可挂载额外的磁盘  
  
## 前置准备  
  
### 1、注册一个 Northflank 账号  
  
Northflank 是免费的，但是需要绑信用卡。每个账号可以新建 1 个项目，每个项目可以运行两个实例  
  
以下以 `NF` 作为简称  
  
### 2、找到 electerm-web 的 docker 镜像  
  
[hub.docker.com/r/zxdong262/electerm-web](https://hub.docker.com/r/zxdong262/electerm-web)  
  
以下以 `et` 作为简称  
  
## 开始部署  
  
### 第一步：在 NF 新建一个团队（team）  
  
- 建好是这样的：  
  
![17262037012801726203700715.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262037012801726203700715.png)  
  
- 点击你的团队，点击右上角 `Create new` 新建一个服务    
![17262039122381726203911669.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262039122381726203911669.png)  
  
- 选择 docker 镜像方式部署  
- 选择拉取外部镜像，镜像地址填写：`zxdong262/electerm-web:latest`  
  
![17262041087241726204108172.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262041087241726204108172.png)  
  
- 资源选择免费的，推荐选择 512m，资源里的高级选项不要去设置，被扣费不关我的事  
  
![17262043057251726204304789.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262043057251726204304789.png)  
  
- 端口设置：这步最关键，一定要设置为 `5577`，协议选 `http`, `Publicly expose this port to the internet` 打√，名称随便写，比如 `ssh`  
  
![17262045146131726204514027.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262045146131726204514027.png)  
  
- 点击部署，部署好之后可获得一个自动分配的域名，格式类似这样，保存这个域名备用  
  
```  
ssh--electerm--sykk8bwr425w.code.run  
```  
  
- 进入项目的设置界面，左侧栏选择 `Volumes`，挂载磁盘，挂载路径随意填写一个，但是一定要有 `/` 开头，比如 `/electerm-web`，保存这个路径备用  
  
![17262049351141726204934428.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262049351141726204934428.png)  
  
- 再点击左侧边栏的环境变量，设置三个变量，然后保存  
	- DB_PATH = /electerm-web/db；这个 `/electerm-web` 就是刚刚挂载的磁盘的路径  
	- SERVER；这里的值填写项目分配的域名并加上前缀 `https://项目域名`  
	- HOST = 0.0.0.0  
  
![17262050984321726205097838.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262050984321726205097838.png)  
  
- 点击右上角重新部署，等待部署完成，然后点击项目域名，打开网页  
  
![17262055505871726205550026.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262055505871726205550026.png)  
  
- 打开后的效果是这样的，点击左侧 `+` 号或者页面中的 `新书签`，填入服务器信息，即可登录 ssh  
  
![17262056749471726205674769.png](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17262056749471726205674769.png)  
  
## 几个尚未解决的问题  
  
1. *虽然 NF 可以设置自定义域，但是这个项目设置之后，访问自定义域无法跳转到设置界面*  
2. *通过 `cname` 或者 `cf woker` 搭建反代，也存在同样的问题*  
3. 不宜作为公开服务分享，因为网页版可以通过新建本地连接，从终端连接你部署的这个项目，并可以进行操作  
4. **建议自用！**  
  
## 写在最后  
  
`electerm` 是一个非常强大的 ssh 连接工具，支持 Ssh、Telnet、Serial、Web、Rdp、Vnc，具备 sftp 功能，可以管理远程设备的文件，也可以启动本地终端，进行本地的 cmd、powershell 操作  
  
ssh 连接方面，支持交互式密码，类似 serv00 这种服务器，设置交互式密码后无需二次输入密码就可直接连接  
  
最最强大的是支持多端同步、设置快捷命令，服务器登录信息和常用命令都可以同步，当你在一台设备登录后，在另一台设备无需再次设置，直接打开书签，登录信息全部都在  
  
还支持多服务器一键批处理，如果你要在多台服务器执行相同的命令，这就很方便了。  
  
**客户端地址**：[GitHub - electerm/electerm: 📻Terminal/ssh/telnet/serialport/RDP/VNC/sftp client(linux, mac, win)](https://github.com/electerm/electerm)，别忘了给作者标个星  

---  
layout: post  
title: Cloudflare CDN 全端口回源设置，IPv6无门槛使用VMess  
name: 2024-06-02-Cloudflare CDN 全端口回源设置，IPv6无门槛使用VMess  
description: Cloudflare CDN 全端口回源设置教程，纯IPv6的VPS无门槛使用VMess节点  
categories:  
  - cloudflare  
  - 端口  
  - CDN  
  - 回源  
  - IP  
  - VPS  
keywords:   
share: true  
topmost: true  
---  
  
## 准备工作  
  
1. 一个已经转入 CloudFlare 的，且是全功能的域名，千万不要使用双向解析的域名  
2. 一台 VPS (IPv6 和 IPv4 都可以)  
3. [WebSSH](https://ssh.090227.xyz/) (让没有 IPv6 环境的小白朋友也可以连上 VPS 的 SSH)  
  
---  
  
## 部署开始  
  
## 1. 通过 WebSSH 安装 X-ui  
  
打开 [WebSSH](https://ssh.090227.xyz/) ，`Hostname / 主机` 填入你 VPS 的 IP 即可，IPv6 无需修改 IP 格式直接填入即可，    
然后填入你 VPS 的 `Username / 用户名` 和 `Password / 密码` 后点击 `Connect` 连上你的 VPS  
  
连上机器后安装 X-ui，这里就使用 [甬哥的X-ui脚本](https://github.com/yonggekkk/x-ui-yg)  
  
```  
bash <(curl -Ls https://raw.githubusercontent.com/yonggekkk/x-ui-yg/main/install.sh  
```  
  
*注意: 如果你的机器未安装 BBR，请**优先安装 BBR**后再展开后续的工作。*  
  
**X-ui 面板端口**设为 `2052`，CF 支持 HTTP 回源端口如下：`80`、`8080`、`8880`、`2052`、`2082`、`2086`、`2095`，推荐使用除了 `80` 之外的端口  
  
X-ui 面板**用户名**和**密码**`随意即可`  
  
*注意: 如果机器出口没有 `IPv4`，可通过安装 `WARP` 来给机器添加 `IPv4出口`*  
  
---  
  
## 2. 设置域名  
  
打开 CloudFlare， 选中你要使用的域名，以下例子使用 `google.com` 域名举例；  
  
- 进入 `SSL/TLS` > `概述` > `SSL/TLS 加密模式` 为 `完全`  
- 进入 `SSL/TLS` > `边缘证书` > **关闭** `始终使用 HTTPS` 和 `自动 HTTPS 重写`  
- 进入 `SSL/TLS` > `源服务器` > **创建证书** 将 `证书` 和 `密钥` **复制出来！保存好！！！**  
- 进入 `DNS` > `记录` 添加 2 条 **AAAA 记录**， `xui.google.com` 和 `vmess.google.com`，地址就填入你的小鸡 IPv6 即可 ，其中 `xui` 必须**开启小黄云**    
*注意: `vmess.google.com` 将会作为你 VMess 节点的伪装域名使用*  
  
---  
  
## 3. 登录 X-ui 面板，设置 VMess 节点  
  
打开 `http://xui.google.com:2052`， 填入你设置的 X-ui 面板**用户名**和**密码**后点击登录即可  
  
- 添加节点 `VMess-ws noTLS` 节点    
	**协议**: `vmess`    
	**端口**: `随意` **复制下来备用**    
	**uuid**: **复制下来备用**    
	**传输协议: `ws`**    
	**TLS**: `关闭`    
	**点击 `添加` 完成**  
  
- 添加节点 VMess-ws-TLS 节点    
	**协议**: `vmess`    
	**端口**: `随意` **复制下来备用**    
	**uuid**: 将**第 3.1 步**复制下来的 `uuid` 粘贴在此处    
	**传输协议: `ws`**    
	**TLS**: `开启`    
	**证书方式**: `certificate file content`    
	**公钥内容**: 填入**第 2.3 步**复制下来的 `证书` 内容    
	**密钥内容**: 填入**第 2.3 步**复制下来的 `密钥` 内容    
	**点击 `添加` 完成**  
  
---  
  
## 4. 设置 CF 的**Origin Rules**回源规则  
  
打开 CloudFlare， 选中你要使用的域名  
  
- 进入 `规则` > `Origin Rules` > `创建规则`    
	**规则名称**: `noTLS`    
	**字段**: `主机名` > `等于` > `vmess.google.com` > `And`    
	**字段**: `SSL/HTTPS` > `关闭`    
	**目标端口**: `重写到` > 填入**第 3.1 步**复制下来的 `noTLS端口` 内容    
	**点击 `部署` 完成**  
  
- 进入 `规则` > `Origin Rules` > `创建规则`    
	**规则名称**: `TLS`    
	**字段**: `主机名` > `等于` > `vmess.google.com` > `And`    
	**字段**: `SSL/HTTPS` > `开启`    
	**目标端口**: `重写到` > 填入**第 3.2 步**复制下来的 `TLS端口` 内容    
	**点击 `部署` 完成**  
  
---  
  
## 5. 填入你 VMess 节点信息，完成优选订阅  
  
```  
https://VMess.fxxk.dedyn.io/sub?cc=[VMess](https://vmess.fxxk.dedyn.io/sub?cc=%5BVMess) 服务名字]&host=[你的 VMess 域名]&uuid=[你的 UUID]&path=[你的 ws 路径]&alterid=[额外 ID]&security=[加密方式]  
```  
  
- **host 必填项**，你 VMess 节点的 `伪装域名`    
- **uuid 必填项**，你 VMess 节点的 `uuid`    
- **path 非必填项**，你 VMess 节点的 `路径`，默认 `/`  
- **cc 非必填项**，可能会影响使用在线订阅转换,推荐使用地区代号，例如 HK、SG、US    
- **alterid 非必填项**，默认 `0`    
- **security 非必填项**，默认 `auto`  
  
**快速订阅方式**  
  
```  
https://VMess.fxxk.dedyn.io/sub?host=[你的VMess域名]&uuid=[你的UUID]&path=[你的ws路径])  
```  
  
例如： `https://VMess.fxxk.dedyn.io/sub?host=obdii.cfd&uuid=05641cf5-58d2-4ba4-a9f1-b3cda0b1fb1d&path=/linkws`  
  
---  
  
作者 [CMLiussss](https://www.youtube.com/@CMLiussss)  

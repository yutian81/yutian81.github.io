---  
layout: post  
title: Serv00 & ct8 节点搭建及保活完整缝合版（魔改脚本）  
name: 2024-09-03-serv00-ct8-nodes-keepalive  
description: Serv00 & ct8 免费且不限流量，搭建节点速度尚可。但是由于玩家众多，服务器负载一旦偏高，官方就会清理进程以及面板corn计划任务，以降低服务器负载。本人整合了老王的脚本，进行了魔改，缝合cm的action保活，以期尽可能的保活节点  
categories:  
  - 保活  
  - 节点  
  - Serv00  
keywords:   
share: true  
topmost: false  
---  
  
## 一、关于 serv 和 ct8 的注册  
  
serv 注册相对简单，cm 的博文写的非常清楚，详见：[CM博文内的账号注册](https://blog.cmliussss.com/p/Serv00-Socks5/#%E6%B3%A8%E5%86%8C%E5%B8%90%E5%8F%B7)  
  
一点经验：**GCP 节点 + 正经邮箱**比较容易注册成功，域名邮箱很大概率收不到邮件  
  
## 二、开放端口，打开程序运行权限  
  
过程略过，详见：[CM博文-开放端口]([https://blog.cmliussss.com/p/Serv00-Socks5/#%E6%AD%A5%E9%AA%A41-%E7%94%B3%E8%AF%B7%E7%AB%AF%E5%8F%A3)、[CM博文-打开权限](https://blog.cmliussss.com/p/Serv00-Socks5/#%E6%AD%A5%E9%AA%A42-%E5%BC%80%E5%90%AF%E7%AE%A1%E7%90%86%E6%89%A7%E8%A1%8C%E6%9D%83%E9%99%90)  
  
**注意点 1**：总共只能开放 3 个端口，本文的搭建脚本需要两个 TCP（vmess 和 socks5 使用）和一个 UDP（HY2 使用）  
  
**注意点 2**：最好不要手动指定端口，使用随机端口为宜。手动指定的端口可能已经被他人占用或者被墙，导致节点服务无法运行  
  
## 三、一键脚本  
  
本一键脚本基于老王的四合一魔改而来，[点击进入老王仓库](https://github.com/eooce/Sing-box) 查看原版脚本，使用教程详见仓库内的说明  
  
本人魔改的仓库：<https://github.com/yutian81/serv00-ct8-ssh>  
  
本人魔改的一键脚本：  
  
```  
curl -s https://raw.githubusercontent.com/yutian81/serv00-ct8-ssh/main/sb_serv00_socks.sh -o sb00.sh && bash sb00.sh  
```  
  
 * 具备老王一键脚本的参数前置功能，可在一键脚本前添加 `PORT=端口号` 等功能  
 * 简化二次运行命令，可通过执行 `bash sb00.sh` 重新唤出脚本的主菜单  
 * 主菜单整合了 `清理进程并重启服务`、`重置服务器`、`添加守护CORN` 三个独立模块，如图：  
  
![主菜单截图](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17253518329711725351832428.png)  
  
安装过程不再赘述  
  
## 四、关于 ARGO 隧道  
  
**注意**： argo 隧道最好使用固定隧道，临时隧道在服务器重启或官方杀进程后会失效  
  
### argo 固定隧道设置方式 1：TOKEN 方式  
  
借用 `fscarman` 大佬的教程：[ArgoX/README.md at main · fscarmen/ArgoX · GitHub](https://github.com/fscarmen/ArgoX/blob/main/README.md#argo-token-%E7%9A%84%E8%8E%B7%E5%8F%96)  
  
**注意**： Serv00 & ct8 服务器 argo 隧道的端口一定要设置为你在面板中开放的 vmess 端口，例如：  
  
![argo隧道端口设置](https://fastly.jsdelivr.net/gh/yutian81/yutian81.github.io@master/assets/images/17253554424221725355441969.png)  
  
### argo 固定隧道设置方式 2：JSON 方式  
  
借用 `fscarman` 大佬的教程：[ArgoX/README.md at main · fscarmen/ArgoX · GitHub](https://github.com/fscarmen/ArgoX/blob/main/README.md#argo-json-%E7%9A%84%E8%8E%B7%E5%8F%96)  
  
## 六、Github Action 保活  
  
CM 大佬的教程已经写的很清楚了，我就不赘述了：[CM博文-开启action保活](https://blog.cmliussss.com/p/Serv00-Socks5/#%E6%AD%A5%E9%AA%A44-%E5%BC%80%E5%90%AFGithub-Actions%E4%BF%9D%E6%B4%BB)  
  
还有天诚大佬使用 CF 搭建面板保活并推送给 TG 的教程：[天诚大佬CF保活](https://linux.do/t/topic/181957)  
  
两种方式都可以，任选其一  
  
## 五、写在最后  
  
**说说保活逻辑**： CM 大佬和天诚大佬的保活方式虽然不同，但逻辑一致：  
  
首先通过`action` 或者`CF`面板 定期连接 ssh 服务器，如果服务器面板的 corn 存在，则退出连接，如果 corn 不存在，则自动写入 corn 计划任务  
  
而面板 corn 则每 10 分钟（可自行设置，我设置的是 10 分钟，再短也没必要）检查节点进程是否存在，若进程存在，则忽略；若进程不存在，则通过 CORN 重建进程，以保持进程的活动  
  
*有可能刚好在 action 检查完 corn 退出了 ssh 连接后，corn 被服务器杀了，你的节点掉线了！这时就需要等待 12 个小时（CM的默认设置是12小时），等 action 重新连接 ssh 重建 corn，corn 再拉起进程，节点会重新上线*  
  
我设置的是每 6 小时运行一次 action，不建议再短，频繁运行可能导致 Github 被封号  

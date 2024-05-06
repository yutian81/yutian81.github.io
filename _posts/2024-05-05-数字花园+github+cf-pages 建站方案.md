---  
layout: post  
title: 数字花园+github+cf-pages 建站方案  
name: 2024-05-05-数字花园+github+cf-pages 建站方案  
categories:  
  - 自建网站  
  - cloudflare  
  - github  
share: true  
mathjax:   
description: 用 github 链接到 cloudflare 托管 digital garden 博客模板的库，无需服务器就可以使用 obsidian 发布你的博客文章到外网  
---  
  
## 引言  
  
能读到这篇文章说明你对 Obsidian 有一定了解了，双链笔记的特性已经不用赘述。该文档介绍了如何通过 GitHub 私有库和 Cloudflare 的 Pages 服务资源实现完美的一键发布的方法。  
  
### 能力要求  
  
1. 该方案需要懂一点点 GitHub 的操作  
2. 本文假定如果用户需要自定义域名,那么用户应具有添加域名解析 CNAME 的能力,相关知识不再赘述  
  
### 使用插件  
  
数字花园 [Digital Garden](https://github.com/oleeskild/obsidian-digital-garden#-obsidian-digital-garden)  
  
### 第三方服务  
  
[https://github.com/](https://github.com/) [https://cloudflare.com/](https://cloudflare.com/)  
  
## 实施方法  
  
### 安装插件  
  
#### 插件市场安装  
  
在插件市场搜索 digital garden 安装  
  
#### 手动安装  
  
如果没有科学上网可以在 [Github](https://github.com/oleeskild/obsidian-digital-garden/releases) 上下载 zip 包到本地解压    
把 digitalgarden 文件夹放入你的库文件夹下的 `.obsidian/plugins` 路径下    
比如我的库名是 _test_ ,那么插件文件夹路径就是 `test/.obsidian/plugins/digitalgarden`    
正常情况下 digitalgarden 下有  
  
- main.js  
- manifest-beta.json  
- manifest.json  
- styles.css    
    等你配置好了以后会有 data.json 文件夹保存你的配置 这些都不用手动干涉  
  
### 克隆库  
  
1. 首先 fork 仓库 [https://github.com/oleeskild/digitalgarden](https://github.com/oleeskild/digitalgarden)  
2. 然后设置仓库为 private  
  
### 将库部署到 CloudFlare  
  
1. 进入控制台 选择左侧目录 _Workers 和 Pages_  
2. 选择 _创建应用程序_  
3. tab 中选择 _Pages_  
4. 点击连接到 git  
5. 授权 github 权限  
6. 点击 _从您的帐户部署站点_  
7. 选择 github 账户 并选择之前 fork 的仓库 _digitalgarden_  
8. 点击开始设置  
9. 预设类型留空 构建命令 `npm run build` 构建输出目录 `dist`  
10. 点击开始  
  
### 域名绑定  
  
1. [购买一个域名](%E5%A6%82%E4%BD%95%E8%B4%AD%E4%B9%B0%E5%9F%9F%E5%90%8D.md)，并 [托管](%E5%9F%9F%E5%90%8D%E6%89%98%E7%AE%A1%E5%88%B0CF%E6%95%99%E7%A8%8B.md) 到 [CF](CF%20%E8%83%BD%E5%B9%B2%E4%BB%80%E4%B9%88.md)。  
2. 返回 [CF](CF%20%E8%83%BD%E5%B9%B2%E4%BB%80%E4%B9%88.md#注册域名%20) 控制台，`Workers` 和 `Pages` 面板，点击你创建的 `Pages`  
3. tab 中选择 `自定义域`  
4. 设定你自己的域名，点击 `激活域`  
5. 稍微等待一下，显示 `有效` 即为成功  
  
### 插件配置  
  
1. 点击 [https://github.com/settings/tokens/new?scopes=repo](https://github.com/settings/tokens/new?scopes=repo) 新建一个令牌  
2. 复制 令牌填充到 `Github token` 这栏  
3. `Github repo name` 那一栏填你 克隆的库名  
4. `Github Username` 填你的 Github 用户名称  
5. 下面的 `Base URL` 填你的域名 包含子域名 不带协议  
6. `Slugify Note URL` 置空 否则中文路径出错  
7. `Features` 这里配置页面出现的内容  
8. `Appearance` 这里控制站点的名称 主题样式 语言 图标等  
9. 关闭后自动保存  
  
### 尝试发布  
  
1. 写一个新文档  
2. 添加文档属性 可以通过快捷键 `⌘(ctrl)+p` 唤出快捷栏，输入 `tag`，选中 `Digital Garden: Add publish flag`，然后文章头部出现文档属性  
3. 可以通过在 ob 中设置模板 [批量添加 frontmatter](../ob-digital%20%E5%8F%91%E5%B8%83.md)  
4. `⌘(ctrl)+p` 然后输入 `publish single Note`, 回车即可看到提示栏信息发布状态  
5. 返回 CloudFlare 控制台,`Workers 和 Pages面板` 的 page 模块中，点击你创建的 Pages 查看构建状态等待完成 如果有错误 查看报错信息  
6. 去自己的域名看看发布效果  
7. 左侧的工具栏有个按钮，可控制批量更新发布  
  
### 其他  
  
1. 网站样式、风格和标题等在插件的配置里有详细说明，可以参考 [插件文档](https://dg-docs.ole.dev/getting-started/04-appearance-settings/)。  
2. GitHub 账户务必做好隐私保护，将库设为 _private_ 并限制好 CloudFlare 授权的库，最好不要选择全部授权。  
3. 图床使用 GitHub 和 Cloudflare，无需繁琐的额外配置，相当于白嫖了。  
4. 注意标记添加文档属性 _dg-home_ 为 ==首页==，可以通过快捷键⌘(ctrl)+p 唤出快捷栏，输入 tag，选中 _Digital Garden: Add publish flag_，然后文章头部出现文档属性，添加 _dg-home_，选则属性类型为复选框，然后选中即可设置当前页为首页。注意不要重复设置首页，发布构建会报错。  
5. 为什么不选择教程中的方法呢？因为 [Vercel](https://vercel.com/dashboard) 和 [Netlify](https://app.netlify.com/) 在大陆地区的访问都有点麻烦，而且速度慢。Vercel 即使 CNAME 指向中国也是访问很慢，而 Netlify 则可能莫名其妙封禁用户。因此，我探索了 CloudFlare 方案。  
6. 每次发布构建 GitHub 都发邮件好烦怎么办？将 GitHub 的库 _watch_ 改为 _ignore_ 即可忽略邮件。但是这样你也会错过发布失败的提示，考虑到发布半分钟后你可能回去页面刷新预览，也不是不能接受。  
  
## 总结  
  
1. Cloudflare 免费资源有上限，但一般情况下个人很难用完。这个资源和 workers 是共享的,注意有 workers 大量需求的用户,观察资源的余量  
2. 最后，我个人强烈建议新手看下 obsidian 社区 `软通达` 大佬的 [建议](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E6%9C%AC%E4%BA%BA%E5%AF%B9obsidian%E6%96%B0%E6%89%8B%E7%9A%84%E5%BB%BA%E8%AE%AE%EF%BC%882022%E7%89%88%E6%9C%AC%EF%BC%89+by+%E8%BD%AF%E9%80%9A%E8%BE%BE#%E4%B8%8D%E5%BB%BA%E8%AE%AE%E4%BD%A0%E7%AB%8B%E5%88%BB%E5%81%9A%E7%9A%84%E4%BA%8B%E6%83%85) ，那就是不要做那些花里胡哨的东西，笔记的本质是记录和总结。  
3. 作者主页  
    1. [类星体](https://blog.186886996.xyz/)  
    2. [掘金](https://juejin.cn/user/2506542241561223/posts)  
    3. [语雀](https://www.yuque.com/u488064)  
    4. [什么值得买](https://zhiyou.smzdm.com/member/4478692379/article/)  
    5. [bilibili](https://space.bilibili.com/1499065/article)  

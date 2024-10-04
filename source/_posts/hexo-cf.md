---  
title: 搭建 hexo 博客 + 安知鱼主题，直接部署到 CF Pages，实现在 git 里写文章后直接发布  
name: hexo-cf  
description: 跳过部署到 <用户名>.github.io 的步骤，直接部署到 cf pages，将在本地生成的 hexo+anzhiyu 源码文件推送到 git 私库，从私库直接部署到 cf。如果要发布文章，直接通过 vscode 或者 obsidian 这样的编辑器，将写好的文章推送到 git私库/source/_post文件夹，就能成功发布，或者直接在上述仓库文件夹内编写md文档后提交。  
data: 2024-10-04  
updata: 2024-10-04  
tags:  
  - 安知鱼  
  - 博客  
  - cloudflare  
  - hexo  
categories:  
  - 技术分享  
  - 原创文章  
keywords:   
top_img:   
cover:   
sticky: 100  
swiper_index: 10  
top_group_index: 10  
share: true  
---  
  
## 前置工作  
  
### 安装必要的软件  
  
- node.js：[Node.js — Run JavaScript Everywhere](https://nodejs.org/en)  
- git：[Git - Downloads](https://git-scm.com/downloads)  
  
## 在本地安装 hexo  
  
过程不详述，[看CM的教程](https://blog.cmliussss.com/p/HexoBlogNo1/)  
  
按以下流程执行：  
  
- 本地新建一个文件夹，如 `E:\hexo-blog`  
- 在此文件夹右键打开 git，依次运行以下命令：  
  
```git  
npm config set registry https://mirrors.huaweicloud.com/repository/npm/  
npm install -g hexo-cli && hexo -v  
hexo -v  
hexo init blog-demo  
cd blog-demo  
npm i  
```  
  
- `E:\hexo-blog\blog-demo` 就是你博客文件的目录  
- 启动项目  
  
```git  
hexo cl && hexo s  
```  
  
- 预览项目：打开浏览器，输入地址：<http://localhost:4000>  
- 按 `ctrl+c` 退出预览  
  
## 在本地安装安知鱼主题  
  
### 方式一：github  
  
```git  
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu  
```  
  
### 方式二：下载主题文件  
  
下载 [最新 release 版本](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases) 解压到 `E:\hexo-blog\blog-demo\theme` 目录，并将解压出的文件夹重命名为 `anzhiyu`。  
  
> [!TIPS]    
> 无论上述哪种方式，安装完主题后都需要复制 `/themes/anzhiyu/_config.yml` 此文件到 hexo 根目录，即 `E:\hexo-blog\blog-demo`，并重命名为 `_config.anzhiyu.yml`  
  
### 应用主题  
  
打开 **Hexo** 根目录下的 `config.yml`, 找到以下配置项，把主题改为 `theme: anzhiyu`，注意 `:` 后面有个 `空格`  
  
### 安装主题渲染器  
  
```git  
npm install hexo-renderer-pug hexo-renderer-stylus --save  
```  
  
### 配置主题  
  
按 [官方文档](https://docs.anheyu.com/intro.html) 的教程逐项配置主题，同步修改 `_config.anzhiyu.yml` 文件中的配置选项    
在本地全部配置完成，运行命令 `hexo cl && hexo s` 启动本地预览  
  
## 将本地文件推送到 git 仓库  
  
### 新建一个仓库  
  
在 github 上新建一个仓库，[点此直达](https://github.com/new)，仓库名随意，假如为 `blog-demo`  
  
### 配置 ssh 密钥  
  
具体过程详见 [CM的教程](https://blog.cmliussss.com/p/HexoBlogNo1/#3-%E9%85%8D%E7%BD%AE-Git-%E5%AF%86%E9%92%A5%E5%B9%B6%E8%BF%9E%E6%8E%A5%E8%87%B3-Github)  
  
主要步骤如下：  
  
- 配置用户名和邮箱，依次运行：  
  
```git  
git config --global user.name "你的github用户名"    
git config --global user.email "你的github邮箱"  
```  
  
- 检查是否配置成功：`git config -l`  
- 生成 生成 git 的 sshkey，依次运行  
  
```git  
ssh-keygen -t rsa -C "yutian88881@hotmail.com"    
ssh-keygen -t rsa -C "14463989@qq.com"    
ssh -T git@github.com  
```  
  
### 推送本地文件到远程仓库  
  
**步骤 1**：在本地博客的同级目录，也就是 `E:\hexo-blog\` 目录，在 `blog-demo` 同级，新建一个 sh 脚本文件，假设为 `push_blog.sh`，输入以下代码：  
  
```bash  
#!/bin/bash  
  
# 定义本地和远程仓库名称  
LOCAL_REPO="blog-demo"  #改为你本地博客的文件夹名  
GIT_REPO="git@github.com:your_user/your_repo.git"  # 替换为你自己的用户名和仓库名  
GIT_EMAIL="your_email"   # 替换为你自己仓库账号的邮箱  
GIT_USER="your_user"  # 替换为你自己仓库账号的用户名  
PUSH_REMAKE="由 git bash 自动提交"  
THEME_URL="https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git" # 安知鱼主题子模块 URL  
# ---------------------------以下内容无需修改-----------------------------  
  
git config --global core.autocrlf true  
  
echo "检查 SSH 配置..."  
SSH_OUTPUT=$(ssh -T git@github.com 2>&1)  
if echo "$SSH_OUTPUT" | grep -q 'success'; then  
    echo "SSH 配置正确，连接 GitHub 成功"  
else  
    echo "错误：SSH 配置不正确，请确保 SSH 密钥已设置，并添加到 GitHub"  
    exit 1  
fi  
  
cd "$LOCAL_REPO" || { echo "目录 $LOCAL_REPO 不存在，脚本即将退出。"; exit 1; }  
if [ ! -d ".git" ]; then  
    git init  
    git remote add origin "$GIT_REPO"  
    git config --global user.email "$GIT_EMAIL"  
    git config --global user.name "$GIT_USER"  
    echo "已初始化新的 Git 仓库并设置远程仓库"  
fi  
if [ -d "themes/anzhiyu/.git" ]; then  
    git rm -r --cached themes/anzhiyu  
    rm -rf themes/anzhiyu/.git  
    echo "已移除嵌套的 Git 仓库：themes/anzhiyu"  
fi  
if [ ! -d "themes/anzhiyu" ]; then  
    git submodule add "$THEME_URL" themes/anzhiyu  
    echo "已添加子模块：$THEME_URL"  
else  
    echo "子模块已存在，更新子模块"  
    git submodule update --init --recursive themes/anzhiyu  
fi  
  
git checkout -B main  
echo "已切换到 'main' 分支"  
git add .  
echo "已将所有文件添加到暂存区"  
  
if ! git diff --cached --quiet; then  # 仅在有更改时提交  
    git commit -m "$PUSH_REMAKE"  
    echo "已提交更改"  
else  
    echo "没有更改需要提交"  
fi  
  
git pull origin main --rebase  
echo "已拉取远程更改并合并"  
git push -u origin main  
echo "已将本地更改推送到远程仓库"  
echo "操作完成！"  
```  
  
**步骤 2**：在 `push_blog.sh` 的同级目录，新建一个 `bat` 文件，假设文件名为 `run.bat`，输入以下代码：  
  
```bat  
@echo off  
  
"C:\Program Files\Git\bin\bash.exe" -c "./push_blog.sh"  
pause  
```  
  
**步骤 3**：以管理员身份运行 `run.bat`  
  
运行完成后，检查 git 仓库中文件是否已被推送，文件结构与本地博客目录是否一致  
  
![仓库目录结构](https://pan.811520.xyz/2024-10/1728029784703.webp)  
  
## 部署到 CF Pages  
  
这里就不需要详述了吧，具体流程如下：  
  
- 新建一个 `pages`  
- 链接 `github`  
- 导入刚刚生成的仓库，例如我的是  
- **重点 1**：构建命令填 `npm run build`  
- **重点 2**：构建输出填 `public`  
- 其他留空，点击部署  
  
部署完成后等待两分钟，点击 cf 分配的域名访问一下博客  
  
如果没有问题，在 pages 设置中绑定自定义域，就可以使用自己的域名进行访问了  
  
## 如何发布文章  
  
hexo 博客原始的发布方式比较繁琐，对不会命令行的小白很不友好  
  
现在可以无需命令行，直接在仓库的 `/source/_posts` 文件夹中新建一个 `md` 文件，编辑完后保存，`cf pages` 会自动同步仓库更新，稍等片刻，文章即可发布成功  
  
> [!TIPS]    
> 注意：编写的文章必须在文章头部添加 `Front-matter` 文章属性，详见官方文档的详细释义：[Front-matter](https://docs.anheyu.com/page/front-matter.html#%F0%9F%A7%B1-front-matter-%E7%9A%84%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%86)，根据自身的需求添加需要的字段  
  
这里我提供一个推荐的 `Front-matter` 字段。注意：每个字段的 `:` 后面必须有一个 `英文空格`  
  
```yml  
title: 搭建 hexo 博客 + 安知鱼主题，直接部署到 CF Pages，实现在 git 里写文章后直接发布  
date: 2024-10-04  
updated: 2024-10-04  
tags:   
  - hexo  
  - 安知鱼  
  - cloudflare  
categories:   
  - 技术分享  
  - 原创文章  
description: 跳过部署到 <用户名>.github.io 的步骤，直接部署到 cf pages，将在本地生成的 hexo+anzhiyu 源码文件推送到 git 私库，从私库直接部署到 cf。如果要发布文章，直接通过 vscode 或者 obsidian 这样的编辑器，将写好的文章推送到 git私库/source/_post文件夹，就能成功发布，或者直接在上述仓库文件夹内编写md文档后提交。  
top_img: https://pan.811520.xyz/2024-10/1728029784703.webp  
cover: https://pan.811520.xyz/2024-10/1728029784703.webp  
sticky: 5  
swiper_index: 1  
top_group_index: 1  
```  
  
## 写在最后  
  
其实，最后发布文章可以借助一些 MD 编辑器，比如：[Obsidian 黑曜石](https://obsidian.md/)，或者微软的 [vscode](https://code.visualstudio.com/)，借助插件可以一键将本地编辑好的文章推送到指定仓库的指定目录，不用每次都打开 github 仓库，git 的 md 编辑器实在太不好用了。`obsidian` 可以将 `Front-matter` 字段设置为模板，每次写完文章直接套用模板发布即可，非常方便，它还可以借助插件帮你自动格式化、美化 MD 文档  

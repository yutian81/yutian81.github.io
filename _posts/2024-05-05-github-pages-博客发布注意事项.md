---  
layout: post  
title: github pages 博客发布注意事项  
name: 2024-05-05-github-pages-博客发布注意事项  
categories:  
  - 发布博客  
  - 自建网站  
  - github pages  
share: true  
description: 借用 github pages 可以免服务器部署静态站点，然后用 obsidian 的 GitHub publisher 插件，可以在 obsidian 中编辑好文章后直接发布到站点，使其在外网可见  
topmost: true  
---  
  
## 项目地址  
  
[GitHub - mzlogin/mzlogin.github.io](https://github.com/mzlogin/mzlogin.github.io)  
  
## 发布所需的 frontmatter 文件头  
  
- layout: post `如果要发布图集，则写为 gallery`  
- title: Hello 2015 `博客模板实际显示的文章名`  
- name: 2024-05-01-title `在 github publish 插件中设置的参数，用于改变上传到 github 中的文件名为前缀带日期的格式，必须是这样的前缀才会显示在博客网页上，否则文章不显示`  
- categories: `[Blogging, Demo]`  
- author: Hux  
- keywords: `[Blogging, Demo]` `类似于tags，有啥作用不知道，但作者的博客都带了这个参数`  
- share: true `参数为 true，则github publish 插件 会识别为这篇文章可发布，否则不发布`  
- description: `必要，否则文章只显示标题`  
- topmost: true `是否置顶`  
  
## 集成了高级图表  
  
- 以下四个开关分别对应 flowchart.js（流程图）、sequence-diagram.js（时序图）、mermaid 和 MathJax 的支持，按需开启即可，然后就可以在正文里正常画图了，展示效果可以参见 [https://mazhuang.org/wiki/markdown/](https://mazhuang.org/wiki/markdown/)。  
  
```  
flow: true  
sequence: true  
mermaid: true  
mathjax: true  
```  
  
- 对应写法参考源文件 [https://github.com/mzlogin/mzlogin.github.io/blob/master/_wiki/markdown.md](https://github.com/mzlogin/mzlogin.github.io/blob/master/_wiki/markdown.md)。  
  
## 文章中插入本地图片  
  
```  
![](/images/xxx/yyy.png)  
```  
  
> [!TIP] 特别注意    
> 模板库根目录 `index.html` 第 `59` 行和第 `84` 行的 `post.excerpt` 需要修改为 `post.description`，yaml 中的 `description` 参数才会起作用，否则文章在网页上会呈现第一段或者全部内容作为摘要。  

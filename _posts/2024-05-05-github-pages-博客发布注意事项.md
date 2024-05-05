---  
layout: post  
title: github pages 博客发布注意事项  
name: 2024-05-05-github-pages-博客发布注意事项  
categories:  
  - 发布博客  
  - 自建网站  
  - github pages  
share: true  
---  
  
## 项目地址  
  
[GitHub - mzlogin/mzlogin.github.io](https://github.com/mzlogin/mzlogin.github.io)  
  
## 发布所需的 frontmatter 文件头  
  
- layout: post  
- title: Hello 2015  
- subtitle:  
- categories: `[Blogging, Demo]`  
- author: Hux  
- tags: `[Blogging, Demo]`  
- share: 是否  
  
## 如何置顶文章  
  
- topmost: true  
  
## 文件名格式  
  
必须是 xxxx 年 -xx 月 -xx 日 - 标题.md  
  
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

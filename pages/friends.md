---
title: 博客友圈
aside: false
comment: true
---

<style>
h1 {
    display: none;
}
div#page {
    background: none !important;
    box-shadow: none;
    padding: 0;
    border: none;
}
#random-article:hover {
    border: var(--style-border-hover)!important;
}
.card:hover {
    border: var(--style-border-hover)!important;
}
#random-article {
    display: none!important;
}
#friend-circle-lite-root {
    margin-top: 10px;
}
</style>
<link rel="stylesheet" href="https://fc.ruom.top/main/fclite.css">
<div class="author-content author-content-item fcirclePage single" style="background:url(https://cdn.bsgun.cn/Hexo-static/img/essay-bg.avif) center /cover no-repeat!important">
    <div class="card-content">
        <div class="author-content-item-tips">朋友圈</div><span class="author-content-item-title">最新文章订阅</span>
        <div class="content-bottom">
            <div class="tips">使用 轻量友链朋友圈 订阅友链最新文章</div>
        </div>
        <div class="banner-button-group"><a class="banner-button" style="padding: 8px 12px;" onclick="pjax.loadUrl(&quot;/pages/about&quot;)" data-pjax-state=""><i class="anzhiyufont anzhiyu-icon-arrow-circle-right" style="font-size:22px;margin-right:.25rem"></i><span class="banner-button-text">关于本人</span></a></div>
    </div>
</div>
<div class="title-h2-a">
    <div class="title-h2-a-left">
        <h2 style="padding-top:0;margin:.6rem 0 .6rem">🎣 钓鱼</h2><a class="random-post-start no-text-decoration" href="javascript:fetchRandomPost();" data-pjax-state="" style="transition-duration: 0.3s; transform: rotate(5400deg); opacity: 1;"><i class="anzhiyufont anzhiyu-icon-arrow-rotate-right"></i></a>
    </div>
    <div class="title-h2-a-right"><a class="random-post-all no-text-decoration" href="/link/" data-pjax-state="">全部友链</a></div>
</div>
<div id="random-post"></div>
<div class="title-h2-a">
    <div class="title-h2-a-left">
        <h2>🐟 鱼塘</h2>
    </div>
</div>
<div id="friend-circle-lite-root"></div>
<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            private_api_url: 'https://rss.811520.xyz/',
            page_turning_number: 20,
            error_img: 'https://cdn.bsgun.cn/Hexo-static/img/error-404.avif',
        }
    }
</script>
<script src="/js/anzhiyu/random_friends_post.js"></script>
<script src="https://fc.ruom.top/main/fclite.js"></script>

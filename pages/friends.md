---
title: 友圈鱼塘
aside: false
comment: true
---

# 友圈鱼塘

<div class="friend-circle-container">

<style>
    body {
        background-image: url('https://github.com/yutian81/blogrss/raw/main/static/bg-light.webp');
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        height: fit-content;
    }
    .root-container {
        width: 100%;
        margin-top: 40px;
        max-width: 1100px;
    }    
    @media (max-width: 1200px) {
        .root-container {
            max-width: 95%;
            margin-top: 20px;
        }
    }
</style>

<div class="root-container">
    <div id="friend-circle-lite-root"></div>
</div>

<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            private_api_url: 'https://rss.811520.xyz/',
            page_turning_number: 20,
            error_img: 'https://cdn.bsgun.cn/Hexo-static/img/error-404.avif'
        }
    }
</script>

<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/yutian81/blogrss@main/main/fclite.css">
<script src="https://fastly.jsdelivr.net/gh/yutian81/blogrss@main/main/fclite.js"></script>

</div>

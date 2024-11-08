---
title: 友圈鱼塘
aside: false
comment: true
---

<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="https://github.com/yutian81/blogrss/raw/page/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="https://github.com/yutian81/blogrss/raw/page/favicon.ico" type="image/x-icon">
    <meta name="description" content="🐱一个精简版，无后端，且仅利用github action运行的精简版友链朋友圈程序，兼容fc的json格式信息，同时支持推送友圈更新，支持他人订阅个人站点并在更新时发送邮箱推送。">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friend-Circle-Lite</title>
</head>
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

<body>
    <div class="root-container">
        <div id="friend-circle-lite-root"></div>
    </div>

<script>
    if (typeof UserConfig === 'undefined') {
        var UserConfig = {
            // 填写你的fc Lite地址
            private_api_url: 'https://rss.811520.xyz/',
            // 点击加载更多时，一次最多加载几篇文章，默认20
            page_turning_number: 20,
            // 头像加载失败时，默认头像地址
            error_img: 'https://cdn.bsgun.cn/Hexo-static/img/error-404.avif' // 'https://i.p-i.vip/30/20240815-66bced9226a36.webp'
        }
    }
</script>

<link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/yutian81/blogrss@main/main/fclite.css">
<script src="https://fastly.jsdelivr.net/gh/yutian81/blogrss@main/main/fclite.js"></script>
</body>

</html>

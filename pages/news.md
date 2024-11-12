---
title: 每日早报
aside: false
comment: true
---

# 每日早报

<div class="image-container">
    <img src="https://v2.alapi.cn/api/zaobao?token=ZHbYkwQ9R8r0fi1C&format=image" alt="每日早报">
</div>

<style>
    /* 重置样式 */
    body, html {
        margin: 0 !important;
        padding: 0 !important;
        height: 100% !important;
        background: transparent !important; /* 设置为透明 */
    }

    /* 图片容器和图片样式 */
    .image-container {
        width: 60% !important;
        height: 90vh !important; /* 设置容器的高度为视口的 90% */
        overflow-y: scroll !important; /* 使图片在容器内可以滚动 */
        display: flex !important;
        justify-content: center !important;
    }

    .image-container img {
        width: 90% !important;
        transform-origin: top !important;
        transition: transform 0.3s ease !important; /* 添加平滑过渡 */
        transform: scale(1.6) !important; /* 默认缩放设置为1.6 */
    }

    /* 针对移动端的适配 */
    @media (max-width: 768px) {
        .image-container img {
            width: 90% !important;
            object-fit: contain !important;
            transform: scale(1) !important; /* 移动端不需要缩放 */
        }
    }
</style>

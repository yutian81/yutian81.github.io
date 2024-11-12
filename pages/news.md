---
title: 每日早报
aside: false
comment: true
---

<div class="image-container">
    <img src="https://v2.alapi.cn/api/zaobao?token=ZHbYkwQ9R8r0fi1C&format=image" alt="每日早报">
</div>

<style>
    /* 重置样式 */
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        background: transparent; /* 设置为透明 */
    }
    /* 图片容器和图片样式 */
    .image-container {
        width: 100%;
        height: 90vh; /* 设置容器的高度为视口的 90% */
        overflow-y: scroll; /* 使图片在容器内可以滚动 */
        display: flex;
        justify-content: center;
    }
    .image-container img {
        width: 95%;
        transform-origin: top;
        transition: transform 0.3s ease; /* 添加平滑过渡 */
        transform: scale(1.6); /* 默认缩放设置为1.6 */
    }
    /* 针对移动端的适配 */
    @media (max-width: 768px) {
        .image-container img {
            width: 95%;
            object-fit: contain;
            transform: scale(1); /* 移动端不需要缩放 */
        }
    }
</style>

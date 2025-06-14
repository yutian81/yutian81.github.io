// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "九天之上",
    // 站点描述
    description: "基于 vitepress-theme-curve 搭建的 github pages 站点",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://blog2.811520.xyz",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "雨天狂奔",
      cover: "/images/logo/logo.webp",
      email: "admin@24811213.xyz",
      link: "https://daoyi.hidns.vip/#/",
    },
  },
  // 备案信息
  icp: "鄂ICP备202411-001号",
  // 建站日期
  since: "2024-11-1",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://blog2.811520.xyz/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
        { text: "我的项目", link: "/pages/project", icon: "code" },
        { text: "收藏大全", link: "https://daoyi.hidns.vip/#/", icon: "tools" },
        { text: "工作备忘", link: "/pages/categories/工作备忘", icon: "people" },
        //{ text: "效率工具", link: "/pages/tools", icon: "tools" },
      ],
    },
    {
      text: "友圈",
      items: [
        { text: "友圈鱼塘", link: "/pages/friends", icon: "fish" },
        { text: "友情链接", link: "/pages/link", icon: "people" },
        { text: "畅所欲言", link: "/pages/message", icon: "chat" },
      ],
    },
    {
      text: "关于",
      items: [
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
        { text: "隐私政策", link: "/pages/privacy", icon: "chat" },
        { text: "版权协议", link: "/pages/cc", icon: "people" },
        { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "博客主站",
          url: "https://blog.811520.xyz/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "博客演示站",
          url: "/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "个人主页",
          url: "https://daoyi.hidns.vip/#/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "私有工具",
          url: "https://blog.811520.xyz/tlink/",
        },
      ],
    },
    {
      name: "常用",
      list: [
        {
          icon: "https://cover.ruom.top/favicon.ico",
          name: "封面制作",
          url: "https://cover.ruom.top/",
        },
        {
          icon: "https://www.favicon.vip/get.php?url=img.ytian.us.kg",
          name: "兰空图床",
          url: "https://img.811520.xyz/",
        },
        {
          icon: "https://pan.811520.xyz/2024-10/插入链接.webp",
          name: "短链生成",
          url: "https://slink.yuzong.nyc.mn/duanlian",  
        },
        {
          icon: "https://ctool.dev/favicon.ico",
          name: "开发工具",
          url: "https://ctool.dev/",
        },
        {
          icon: "https://suburl.v1.mk/favicon.ico",
          name: "图片压缩",
          url: "https://imgtool.v1.mk/",
        },
        {
          icon: "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png",
          name: "博客仓库",
          url: "https://github.com/yutian81/yutian81.github.io",
        },
      ],
    },
    {
      name: "服务",
      list: [
        {
          icon: "https://pan.811520.xyz/2024-11/1730875618-1730875614898.webp",
          name: "今日热榜",
          url: "https://hot.imsyy.top/",
        },
        {
          icon: "https://rss.811520.xyz/favicon.ico",
          name: "友圈后端",
          url: "https://rss.811520.xyz/",
        },
        {
          icon: "https://pan.811520.xyz/2024-11/1730634973-Cloudflare_Logo.webp",
          name: "CF优选",
          url: "https://blog2.811520.xyz/blogrss/",
        },
        {
          icon: "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png",
          name: "Serv00",
          url: "https://github.com/yutian81/serv00-ct8-ssh",
        },
      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'left',
      // 默认封面(随机展示)
      defaultCover: [
        'https://pan.811520.xyz/2024-10/1728279557702.webp',
        'https://pan.811520.xyz/2024-10/1728387512098.webp'
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:admin@24811213.xyz",
      },
      {
        icon: "github",
        link: "https://github.com/yutian81/",
      },
      {
        icon: "telegram",
        link: "https://t.me/yutian88881",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/677845115",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "我的博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          { text: "文章归档", link: "/pages/archives" },
        ],
      },
      {
        text: "云端平台",
        items: [
          { text: "Vercel", link: "https://vercel.com/", newTab: true },
          { text: "NorthFlank", link: "https://app.northflank.com/", newTab: true },
          { text: "Koyeb", link: "https://app.koyeb.com/", newTab: true },
          { text: "Huawei", link: "https://www.huaweicloud.com/intl/zh-cn/", newTab: true },
        ],
      },
      {
        text: "我的专栏",
        items: [
          { text: "技术分享", link: "/pages/categories/技术分享" },
          { text: "我的项目", link: "/pages/project" },
          { text: "收藏大全", link: "https://daoyi.hidns.vip/#/", newTab: true },
          { text: "工作备忘", link: "/pages/categories/工作备忘" },
        ],
      },
      {
        text: "项目推荐",
        items: [
          { text: "edgetunnel", link: "https://github.com/cmliu/edgetunnel", newTab: true },
          { text: "twikoo", link: "https://github.com/yutian81/twikoo", newTab: true },
          { text: "alist", link: "https://alist.nn.ci/zh/", newTab: true },
          { text: "nezha", link: "https://nezha.wiki/guide/dashboard.html", newTab: true },
        ],
      }, 
      {        
        text: "页面导航",
        items: [
          //{ text: "畅所欲言", link: "/pages/message" },
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
          { text: "致谢名单", link: "/pages/thanks" },
        ],
      },
      {
        text: "网站服务",
        items: [
          { text: "音乐时刻", link: "https://blog.811520.xyz/music/", newTab: true },
          { text: "站点状态", link: "https://uptime.ytian.us.kg/status/service", newTab: true },
          { text: "站点订阅", link: "https://blog2.811520.xyz/rss.xml", newTab: true },
          { text: "问题反馈", link: "https://github.com/yutian81/yutian81.github.io/issues", newTab: true, },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "twikoo",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "https://twikoo.24811213.xyz/",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "这里有我的各种<strong>折腾笔记</strong>，也有一些<strong>工作备忘</strong>和<strong>生活随笔</strong>。又菜又爱玩，<strong>万事都不难</strong>。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "春节",
        date: "2025-05-01",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "https://blog2.811520.xyz/blogrss/",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: false,
    // url
    url: "https://meting-api-ten.vercel.app",
    // id
    id: 8152976493,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: true,
    appId: "J8AAAZLZZ7",
    apiKey: "94c1d72ea8e1533fc67c3e7244c7e196",
    indexName: "daoyi-wiki",
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://pan.811520.xyz/2024-11/1730603920-wechatpay.webp",
    // 支付宝二维码
    alipay: "https://pan.811520.xyz/2024-11/1730603921-alipay.webp",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "3LlkSubt2HvotYRj",
  },
};

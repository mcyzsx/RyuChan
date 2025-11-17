import type { FeedGroup } from "../types/feed";

export default [
  {
    name: "网上邻居",
    entries: [
      {
        author: "纸鹿本鹿",
        sitenick: "纸鹿摸鱼处",
        desc: "纸鹿至麓不知路，支炉制露不止漉",
        link: "https://blog.zhilu.site/",
        avatar: "https://www.zhilu.site/api/avatar.png",
        date: "2025-09-03",
        qrcode: "https://cdn.atao.cyou/Web/qrcode_zhilu.png",
        upstream: true,
      },
      {
        author: "Luxynth",
        sitenick: "Luxynth",
        desc: "我心匪石不可转",
        link: "https://www.luxynth.cn",
        avatar: "https://www.luxynth.cn/assets/images/avatar.jpg",
        date: "2025-09-09",
      },
      // …想加继续往下写
    ],
  },
  {
    name: "程序猿",
    entries: [
      // 另一组
    ],
  },
] satisfies FeedGroup[];

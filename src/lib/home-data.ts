/**
 * 首页静态数据
 * 职业时间线和社交链接等不需要多语言的数据
 */

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'All in AI 出海',
    description: '独立开发者，专注 AI 产品和海外市场',
  },
  {
    year: '2023',
    title: '开始 AI 探索',
    description: '从 ChatGPT 到 Agent，系统学习 AI 产品开发',
  },
  {
    year: '2020-2022',
    title: '大厂产品经理',
    description: '负责亿级用户产品，积累产品方法论',
  },
  {
    year: '2018-2020',
    title: '创业公司',
    description: '从 0 到 1 搭建产品，快速迭代验证',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: '小红书',
    url: '#',
    icon: 'xiaohongshu',
  },
  {
    name: '公众号',
    url: '#',
    icon: 'wechat',
  },
  {
    name: '即刻',
    url: '#',
    icon: 'jike',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
  },
];

export const contactInfo = {
  wechatId: 'leon_ai',
  wechatQrCode: '/images/wechat-qr.png', // 需要添加实际图片
  email: 'hello@leon.blog',
};


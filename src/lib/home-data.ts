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
    year: '2025',
    title: 'All in AI',
    description: '独立开发者，企业 AI 转型咨询师，专注 AI 赋能人、组织、业务',
  },
  {
    year: '2023-2024',
    title: '开始 AI 探索',
    description: '从 ChatGPT 到 Agent，系统学习 AI 重塑软件工程体系',
  },
  {
    year: '2020-2022',
    title: '敏捷软件工程培训师 / 企业架构咨询师',
    description: '帮助企业团队提升研发效能，设计技术架构落地方案',
  },
  {
    year: '2020-2021',
    title: '技术平台产品',
    description: '负责技术平台产品规划与落地，打通研发工具链',
  },
  {
    year: '2018-2020',
    title: '全栈开发',
    description: '从前端到后端，从架构到运维，夯实技术底层能力',
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

// 服务流程步骤
export interface ProcessStep {
  step: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export const serviceProcess: ProcessStep[] = [
  {
    step: 1,
    title: '初步沟通',
    titleEn: 'Initial Discussion',
    description: '了解您的需求和目标，评估可行性',
    descriptionEn: 'Understand your needs and goals, assess feasibility',
    icon: '💬',
  },
  {
    step: 2,
    title: '需求确认',
    titleEn: 'Requirement Confirmation',
    description: '明确交付物和时间节点，签订合作协议',
    descriptionEn: 'Define deliverables and timeline, sign agreement',
    icon: '📋',
  },
  {
    step: 3,
    title: '方案交付',
    titleEn: 'Solution Delivery',
    description: '按计划交付成果，持续沟通优化',
    descriptionEn: 'Deliver results as planned, continuous optimization',
    icon: '🚀',
  },
];

// 客户评价
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  // 暂无评价，显示占位状态
];

// 推荐资源
export interface Resource {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  category: 'tool' | 'course' | 'book' | 'community';
  icon: string;
}

export const recommendedResources: Resource[] = [
  {
    name: 'Cursor',
    nameEn: 'Cursor',
    description: 'AI 驱动的代码编辑器，开发效率神器',
    descriptionEn: 'AI-powered code editor for 10x productivity',
    url: 'https://cursor.com',
    category: 'tool',
    icon: '🖥️',
  },
  {
    name: 'Vercel',
    nameEn: 'Vercel',
    description: '前端部署平台，快速上线你的项目',
    descriptionEn: 'Frontend deployment platform, ship fast',
    url: 'https://vercel.com',
    category: 'tool',
    icon: '▲',
  },
  {
    name: 'Supabase',
    nameEn: 'Supabase',
    description: '开源 Firebase 替代，后端即服务',
    descriptionEn: 'Open source Firebase alternative, BaaS',
    url: 'https://supabase.com',
    category: 'tool',
    icon: '⚡',
  },
  {
    name: 'Anthropic Claude',
    nameEn: 'Anthropic Claude',
    description: '最强大的 AI 对话模型之一',
    descriptionEn: 'One of the most capable AI assistants',
    url: 'https://claude.ai',
    category: 'tool',
    icon: '🤖',
  },
  {
    name: 'Stripe Atlas',
    nameEn: 'Stripe Atlas',
    description: '一站式美国公司注册服务',
    descriptionEn: 'Start a US company from anywhere',
    url: 'https://stripe.com/atlas',
    category: 'tool',
    icon: '💳',
  },
  {
    name: '出海笔记',
    nameEn: 'Indie Hackers',
    description: '独立开发者社区，获取灵感和支持',
    descriptionEn: 'Community for indie hackers',
    url: 'https://indiehackers.com',
    category: 'community',
    icon: '👥',
  },
  {
    name: '《精益创业》',
    nameEn: 'The Lean Startup',
    description: 'Eric Ries 的创业方法论经典',
    descriptionEn: "Eric Ries' classic on startup methodology",
    url: 'https://book.douban.com/subject/10945606/',
    category: 'book',
    icon: '📚',
  },
  {
    name: 'CS50',
    nameEn: 'CS50',
    description: '哈佛大学的经典计算机入门课程',
    descriptionEn: "Harvard's intro to computer science",
    url: 'https://cs50.harvard.edu',
    category: 'course',
    icon: '🎓',
  },
];


/**
 * 首页多语言内容
 * 仅首页支持中英文切换，博客内容保持中文
 */

export type Language = 'zh' | 'en';

export interface HomeContent {
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    story: string[];
    hobbies: {
      title: string;
      items: string[];
    };
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
      deliverables: string[];
      duration: string;
      cta: string;
    }[];
  };
  projects: {
    title: string;
    items: {
      title: string;
      description: string;
      result: string;
      period: string;
      tags: string[];
      url?: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    wechatLabel: string;
    wechatPublicLabel: string;
  };
  nav: {
    home: string;
    blog: string;
    tags: string;
    resources: string;
  };
}

export const content: Record<Language, HomeContent> = {
  zh: {
    hero: {
      greeting: '你好，我是',
      name: 'Leon',
      tagline: '资深全栈工程师 · AI 原生实践者 · 技术与知识平权倡导者',
      description:
        '用 AI 把技术与知识带给更多人，帮助个人与组织在新一轮重塑中获得机会。',
      cta: '了解愿景',
    },
    about: {
      title: '关于我',
      story: [
        '资深全栈工程师，具备 toC 培训与 toB 数字化转型咨询经验，长期以技术解决真实问题。',
        'AI 时代以来，我用各类技术栈开发企业与个人软件，搭建 AI 驱动的个人博客，帮助企业改善经营，并完成企业应用的架构、设计与研发。',
        '我的愿景是推动技术平权与知识平权，通过服务沉淀与开源社区连接更多人，支持泛知识与能力教育（情感、历史、政治、家庭、学业、职场等），并帮助企业经营、组织运作、产品/方案研发、文化创作、农业等场景适应 AI 原生世界。',
      ],
      hobbies: {
        title: '生活中的我',
        items: ['阅读', '写作', '运动', '思考'],
      },
    },
    services: {
      title: '专业服务',
      items: [
        {
          title: 'AI 原生转型咨询',
          description:
            '面向企业与组织，梳理业务与流程的 AI 机会点，设计落地路径与试点方案，推动从数据到工具链的协同升级。',
          deliverables: ['AI 机会与痛点诊断', '落地路线图与试点方案', '组织与能力建设建议'],
          duration: '2-4 周',
          cta: '预约交流',
        },
        {
          title: 'AI 技术培训与成长',
          description:
            '面向技术人、管理者与创业者的实战训练营，聚焦用 AI 提升研发与业务效率。',
          deliverables: ['能力评估与学习路径', '实战案例与作业点评', '工具链与方法论模板'],
          duration: '1-3 周',
          cta: '加入训练',
        },
        {
          title: '产品/方案研发与技术合伙',
          description:
            '从 0 到 1 完成产品/方案的架构设计与研发，强调可持续迭代与商业价值落地。',
          deliverables: ['架构与技术方案', 'MVP 研发与验收', '迭代与商业化建议'],
          duration: '4-8 周',
          cta: '共创产品',
        },
      ],
    },
    projects: {
      title: '项目经历',
      items: [
        {
          title: '资产管理软件（Rust）',
          description:
            '基于行业最佳实践构建以风险暴露为主轴的资产分类体系，叠加 Scope/工具类型/策略分层等正交维度，并实现字典化版本管理与强约束录入；支持资产记录、盘点、配置偏离监控与再平衡建议。',
          result: '形成可治理的资产体检流程，输出配置建议并识别资产优劣性',
          period: '2025-2026',
          tags: ['Rust', '资产管理', '分类体系'],
          url: 'https://github.com/lrliang/asset-light',
        },
        {
          title: 'AI 驱动个人博客',
          description: '搭建 AI 赋能的内容生产与知识管理体系。',
          result: '写作与发布效率提升',
          period: '2024',
          tags: ['AI', '内容', '知识管理'],
          url: '#',
        },
        {
          title: '企业经营与应用架构',
          description: '用 AI 协助企业改善经营，并完成企业应用的架构、设计与研发。',
          result: '推动决策与交付效率提升',
          period: '2023-至今',
          tags: ['咨询', '架构', 'AI'],
          url: 'https://github.com',
        },
      ],
    },
    contact: {
      title: '联系我',
      description: '欢迎合作与共建',
      wechatLabel: '微信',
      wechatPublicLabel: '公众号',
    },
    nav: {
      home: '首页',
      blog: '博客',
      tags: '标签',
      resources: '推荐',
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Leon',
      tagline: 'Senior Full-Stack Engineer · AI-Native Builder · Tech & Knowledge Equity Advocate',
      description:
        'Using AI to bring technology and knowledge to more people, helping individuals and organizations find opportunity in a reshaped world.',
      cta: 'My Mission',
    },
    about: {
      title: 'About Me',
      story: [
        'Senior full-stack engineer with extensive toC training and toB digital transformation consulting experience, focused on solving real problems with technology.',
        'In the AI era, built an asset management system in Rust, an AI-powered personal blog, helped improve business operations, and led enterprise app architecture, design, and delivery.',
        'My mission is to advance tech and knowledge equity through services and open communities, supporting broad knowledge and capability education (emotional, historical, political, family, academic, and workplace topics), and helping business operations, organizational effectiveness, product/solution R&D, cultural creation, agriculture, and more adapt to an AI-native world.',
      ],
      hobbies: {
        title: 'Life Outside Work',
        items: ['Reading', 'Writing', 'Exercise', 'Thinking'],
      },
    },
    services: {
      title: 'Services',
      items: [
        {
          title: 'AI-Native Transformation Consulting',
          description:
            'For enterprises and organizations, identify AI opportunities, design adoption paths and pilots, and upgrade collaboration from data to toolchains.',
          deliverables: ['Opportunity & Pain-Point Assessment', 'Roadmap & Pilot Plan', 'Org & Capability Building'],
          duration: '2-4 weeks',
          cta: 'Book a Call',
        },
        {
          title: 'AI Skills Training & Growth',
          description:
            'Hands-on programs for engineers, managers, and founders to improve R&D and business efficiency with AI.',
          deliverables: ['Skill Assessment & Learning Path', 'Case Practice & Feedback', 'Toolchain & Method Templates'],
          duration: '1-3 weeks',
          cta: 'Join the Program',
        },
        {
          title: 'Product/Solution Delivery & Tech Partnership',
          description:
            'From 0 to 1 product/solution architecture and delivery, focused on sustainable iteration and business value.',
          deliverables: ['Architecture & Tech Solution', 'MVP Delivery & Validation', 'Iteration & Commercialization Advice'],
          duration: '4-8 weeks',
          cta: 'Co-build',
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'Asset Management System (Rust)',
          description:
            'Built a best-practice, risk-exposure-led asset taxonomy with orthogonal dimensions (scope, vehicle type, strategy layer), dictionary versioning, and constrained inputs; enabled personal asset recording, inventory, allocation drift checks, and rebalancing guidance.',
          result: 'Delivered portfolio health checks with allocation advice and asset quality insights',
          period: '2025-2026',
          tags: ['Rust', 'Asset Management', 'Taxonomy'],
          url: 'https://github.com/lrliang/asset-light',
        },
        {
          title: 'AI-Powered Personal Blog',
          description: 'Designed an AI-assisted content production and knowledge management workflow.',
          result: 'Faster writing and publishing',
          period: '2024',
          tags: ['AI', 'Content', 'Knowledge'],
          url: '#',
        },
        {
          title: 'Business Improvement & Enterprise Architecture',
          description: 'Applied AI to improve business operations and delivered enterprise app architecture, design, and development.',
          result: 'Better decision-making and delivery efficiency',
          period: '2023-Present',
          tags: ['Consulting', 'Architecture', 'AI'],
          url: 'https://github.com',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Open to collaboration and co-building',
      wechatLabel: 'WeChat',
      wechatPublicLabel: 'Official Account',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      tags: 'Tags',
      resources: 'Resources',
    },
  },
};


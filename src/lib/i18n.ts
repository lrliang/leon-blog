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
    wechat: string;
  };
  nav: {
    home: string;
    blog: string;
    tags: string;
  };
}

export const content: Record<Language, HomeContent> = {
  zh: {
    hero: {
      greeting: '你好，我是',
      name: 'Leon',
      tagline: 'All in AI 出海',
      description:
        '从产品经理转全栈，边做边学，努力成为超级个体。分享 AI 时代的思考与实践，道-法-术-器，从理念到落地。',
      cta: '了解更多',
    },
    about: {
      title: '关于我',
      story: [
        '曾在大厂做产品经理，负责过亿级用户的产品。',
        '2023年开始 All in AI，从 Prompt 到 Agent，从想法到产品。',
        '现在专注于 AI + 出海，用技术解决真实问题，用内容连接同路人。',
      ],
      hobbies: {
        title: '生活中的我',
        items: ['阅读', '跑步', '咖啡', '写作'],
      },
    },
    services: {
      title: '专业服务',
      items: [
        {
          title: 'AI 产品咨询',
          description:
            '帮助团队理解 AI 能力边界，设计可落地的 AI 产品方案。从需求分析到 MVP 规划，避免常见的 AI 产品陷阱。',
          deliverables: ['需求分析报告', 'AI 能力评估', 'MVP 方案设计'],
          duration: '1-2 周',
          cta: '预约咨询',
        },
        {
          title: '出海产品策略',
          description:
            '基于海外市场调研，帮助产品找到 PMF。从市场选择到定位策略，从定价到增长路径。',
          deliverables: ['市场调研报告', '竞品分析', 'GTM 策略'],
          duration: '2-4 周',
          cta: '了解详情',
        },
        {
          title: '技术咨询',
          description:
            '全栈技术选型咨询，帮助非技术团队做出正确的技术决策。从架构设计到技术团队组建。',
          deliverables: ['技术方案', '架构设计', '团队建议'],
          duration: '1 周',
          cta: '开始咨询',
        },
      ],
    },
    projects: {
      title: '项目经历',
      items: [
        {
          title: 'AI 写作助手',
          description: '基于 GPT 的智能写作工具，帮助内容创作者提升效率',
          result: '用户增长 10x',
          period: '2024',
          tags: ['AI', 'SaaS', '出海'],
          url: '#',
        },
        {
          title: '跨境电商数据平台',
          description: '为跨境卖家提供市场分析和选品建议',
          result: 'MRR $5k+',
          period: '2023-2024',
          tags: ['数据', 'B2B', '电商'],
          url: '#',
        },
        {
          title: '开源工具集',
          description: '面向开发者的 AI 开发工具链',
          result: 'GitHub 1k+ stars',
          period: '2023',
          tags: ['开源', '开发者工具'],
          url: 'https://github.com',
        },
      ],
    },
    contact: {
      title: '联系我',
      description: '欢迎通过以下方式与我交流',
      wechat: '微信：leon_ai',
    },
    nav: {
      home: '首页',
      blog: '博客',
      tags: '标签',
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Leon',
      tagline: 'All in AI & Global',
      description:
        'From PM to Full-stack, learning by doing. Becoming a super individual in the AI era. Sharing thoughts and practices from concept to implementation.',
      cta: 'Learn More',
    },
    about: {
      title: 'About Me',
      story: [
        'Former PM at tech giants, managed products with 100M+ users.',
        'Started All in AI in 2023, from prompts to agents, from ideas to products.',
        'Now focusing on AI + Global markets, solving real problems with tech.',
      ],
      hobbies: {
        title: 'Life Outside Work',
        items: ['Reading', 'Running', 'Coffee', 'Writing'],
      },
    },
    services: {
      title: 'Services',
      items: [
        {
          title: 'AI Product Consulting',
          description:
            'Help teams understand AI capabilities and design implementable AI product solutions. From requirement analysis to MVP planning.',
          deliverables: ['Requirement Analysis', 'AI Assessment', 'MVP Design'],
          duration: '1-2 weeks',
          cta: 'Book Now',
        },
        {
          title: 'Global Market Strategy',
          description:
            'Help products find PMF in overseas markets. From market selection to positioning, from pricing to growth paths.',
          deliverables: ['Market Research', 'Competitor Analysis', 'GTM Strategy'],
          duration: '2-4 weeks',
          cta: 'Learn More',
        },
        {
          title: 'Tech Consulting',
          description:
            'Full-stack tech selection for non-tech teams. From architecture design to team building.',
          deliverables: ['Tech Plan', 'Architecture', 'Team Advice'],
          duration: '1 week',
          cta: 'Get Started',
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'AI Writing Assistant',
          description: 'GPT-powered writing tool for content creators',
          result: '10x user growth',
          period: '2024',
          tags: ['AI', 'SaaS', 'Global'],
          url: '#',
        },
        {
          title: 'Cross-border E-commerce Platform',
          description: 'Market analysis and product selection for sellers',
          result: 'MRR $5k+',
          period: '2023-2024',
          tags: ['Data', 'B2B', 'E-commerce'],
          url: '#',
        },
        {
          title: 'Open Source Tools',
          description: 'AI development toolchain for developers',
          result: 'GitHub 1k+ stars',
          period: '2023',
          tags: ['Open Source', 'DevTools'],
          url: 'https://github.com',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Feel free to reach out',
      wechat: 'WeChat: leon_ai',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      tags: 'Tags',
    },
  },
};


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
    resources: string;
  };
}

export const content: Record<Language, HomeContent> = {
  zh: {
    hero: {
      greeting: '你好，我是',
      name: 'Leon',
      tagline: '全栈工程师 → AI4SE 专家 → 技术商人',
      description:
        '用技术解决商业问题，为个人和组织直接创造价值。深耕 AI 驱动的软件工程，让每一行代码都能转化为商业成果。',
      cta: '了解更多',
    },
    about: {
      title: '关于我',
      story: [
        '全栈工程师出身，从前端到后端，从架构到产品，从运维到管理，技术是我的底层能力。',
        '现在专注 AI4SE 领域——用 AI 重塑软件工程的每个环节，10 倍提升研发效能。',
        '正在成为技术商人：不只是写代码，更是用技术帮助他人解决商业问题，创造和捕获真正的价值。',
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
          title: 'AI4SE 落地咨询',
          description:
            '帮助研发团队引入 AI 工具链，从 Copilot 到 Agent，实现编码、测试、部署的效率飞跃。不是概念演示，是可落地的效能提升。',
          deliverables: ['团队效能评估', 'AI 工具链选型', '落地实施方案'],
          duration: '1-2 周',
          cta: '预约咨询',
        },
        {
          title: '技术商业化方案',
          description:
            '帮助技术人把能力转化为收入。从技术选型到产品定位，从 MVP 到商业模式，全程陪跑。',
          deliverables: ['商业可行性分析', 'MVP 设计', '变现路径规划'],
          duration: '2-4 周',
          cta: '了解详情',
        },
        {
          title: '全栈技术架构',
          description:
            '为初创团队和中小企业提供技术架构设计。选对技术栈，少走三年弯路。',
          deliverables: ['技术架构设计', '技术栈选型', '实施路线图'],
          duration: '1 周',
          cta: '开始咨询',
        },
      ],
    },
    projects: {
      title: '项目经历',
      items: [
        {
          title: 'AI 研发效能平台',
          description: '为企业研发团队打造的 AI4SE 工具链，覆盖代码生成、Review、测试',
          result: '研发效率提升 3x',
          period: '2024',
          tags: ['AI4SE', 'DevOps', '效能'],
          url: '#',
        },
        {
          title: '技术咨询服务',
          description: '为 10+ 客户提供技术架构和 AI 落地咨询',
          result: '累计创造 $100k+ 价值',
          period: '2023-2024',
          tags: ['咨询', 'B2B', '技术商业化'],
          url: '#',
        },
        {
          title: '开源 AI 工具集',
          description: '面向开发者的 AI 辅助开发工具链',
          result: 'GitHub 1k+ stars',
          period: '2023',
          tags: ['开源', '开发者工具', 'AI'],
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
      resources: '推荐',
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Leon',
      tagline: 'Full-Stack Engineer → AI4SE Expert → Tech Entrepreneur',
      description:
        'Solving business problems with technology, creating real value for individuals and organizations. Specializing in AI-driven software engineering, turning every line of code into business outcomes.',
      cta: 'Learn More',
    },
    about: {
      title: 'About Me',
      story: [
        'Full-stack engineer by trade—frontend, backend, architecture, and DevOps. Technology is my foundation.',
        'Now focused on AI4SE—reshaping every phase of software engineering with AI, achieving 10x development efficiency.',
        'Becoming a tech entrepreneur: not just writing code, but helping others solve business problems and capture real value through technology.',
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
          title: 'AI4SE Implementation',
          description:
            'Help dev teams adopt AI toolchains—from Copilot to Agents—achieving efficiency breakthroughs in coding, testing, and deployment. Not demos, but real productivity gains.',
          deliverables: ['Team Assessment', 'AI Toolchain Selection', 'Implementation Plan'],
          duration: '1-2 weeks',
          cta: 'Book Now',
        },
        {
          title: 'Tech Commercialization',
          description:
            'Help technical founders monetize their skills. From tech selection to product positioning, from MVP to business model, full-cycle support.',
          deliverables: ['Feasibility Analysis', 'MVP Design', 'Monetization Strategy'],
          duration: '2-4 weeks',
          cta: 'Learn More',
        },
        {
          title: 'Full-Stack Architecture',
          description:
            'Technical architecture design for startups and SMBs. Choose the right stack, save years of detours.',
          deliverables: ['Architecture Design', 'Tech Stack Selection', 'Implementation Roadmap'],
          duration: '1 week',
          cta: 'Get Started',
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'AI Dev Productivity Platform',
          description: 'Enterprise AI4SE toolchain covering code generation, review, and testing',
          result: '3x dev efficiency',
          period: '2024',
          tags: ['AI4SE', 'DevOps', 'Productivity'],
          url: '#',
        },
        {
          title: 'Tech Consulting Services',
          description: 'Provided architecture and AI implementation consulting for 10+ clients',
          result: '$100k+ value created',
          period: '2023-2024',
          tags: ['Consulting', 'B2B', 'Tech Commercialization'],
          url: '#',
        },
        {
          title: 'Open Source AI Tools',
          description: 'AI-assisted development toolchain for developers',
          result: 'GitHub 1k+ stars',
          period: '2023',
          tags: ['Open Source', 'DevTools', 'AI'],
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
      resources: 'Resources',
    },
  },
};


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
    ctaMore: string;
    ctaLess: string;
    viewProject: string;
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
    openMenu: string;
    menu: string;
  };
  subscribe: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    rss: string;
    errorRetry: string;
  };
}

export const content: Record<Language, HomeContent> = {
  zh: {
    hero: {
      greeting: '你好，我是',
      name: 'Leon',
      tagline: '资深全栈工程师 · AI 原生实践者 · AI解决方案架构师',
      description:
        '为企业与个人设计 AI 驱动的解决方案，帮助应对技术变革、提升效率与竞争力。',
      cta: '了解愿景',
    },
    about: {
      title: '关于我',
      story: [
        '资深全栈工程师，具备 toC 培训与 toB 数字化转型咨询经验，长期以技术解决真实问题。',
        'AI 时代以来，我用各类技术栈开发企业与个人软件，搭建 AI 驱动的个人博客，帮助企业改善经营，并完成企业应用的架构、设计与研发。',
        '我的愿景是成为连接 AI 技术与业务场景的桥梁，通过服务沉淀与开源社区支持更多人，帮助企业经营、组织运作、产品研发、文化创作等场景成功落地 AI 解决方案。',
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
      ctaMore: '查看更多项目',
      ctaLess: '收起项目',
      viewProject: '查看项目',
      items: [
        {
          title: '资产管理软件（Rust）',
          description:
            '构建风险暴露导向的资产分类体系，支持资产盘点、配置偏离监控与再平衡建议。',
          result: '形成可治理的资产体检流程，输出配置建议',
          period: '2025-2026',
          tags: ['Rust', '资产管理', '开源'],
          url: 'https://github.com/lrliang/asset-light',
        },
        {
          title: '自动化效率分析平台',
          description:
            '搭建自动化效率通知系统，定时采集分析多项目数据，配套数据看板与分层服务架构。',
          result: '减少人工统计成本，保障效率指标持续达标',
          period: '2024-2025',
          tags: ['Node.js', 'PostgreSQL', '数据分析'],
          url: '#',
        },
        {
          title: 'AI 代码审查助手',
          description:
            '基于 GitLab 构建 AI 代码审查工具，自动分析变更、识别代码问题与潜在风险，支持可配置规则。',
          result: '审查时间降低 80%，代码质量提升 35%',
          period: '2024-2025',
          tags: ['AI', 'GitLab', 'Code Review'],
          url: '#',
        },
        {
          title: '核心模块架构重构',
          description:
            '将遗留模块重构为分层架构，引入场景化语义与生命周期管理。',
          result: '问题定位提速，新人上手时间缩短 80%',
          period: '2024-2025',
          tags: ['架构', 'Java', '重构'],
          url: '#',
        },
        {
          title: 'RAG 智能问答系统',
          description:
            '基于历史工单与知识库构建 RAG 智能问答，支持相似案例检索与对话式交互。',
          result: '故障排查效率显著提升，知识复用体系化',
          period: '2024-2025',
          tags: ['RAG', 'LLM', '智能问答'],
          url: '#',
        },
        {
          title: '系统效率自动诊断',
          description:
            '构建日志结构化工具与 AI 诊断报告，自动生成指标、可视化与优化建议。',
          result: '日志分析效率提升约 5 倍',
          period: '2024-2025',
          tags: ['数据分析', 'AI', '效率诊断'],
          url: '#',
        },
        {
          title: 'AI 测试用例生成',
          description:
            '输入场景描述自动生成 Gherkin/Cucumber 用例，维护标准化 Step 库并接入 CI/CD。',
          result: '用例编写效率大幅提升，覆盖率达 95%',
          period: '2024-2025',
          tags: ['测试自动化', 'Cucumber', 'AI'],
          url: '#',
        },
        {
          title: '团队经费管理平台',
          description:
            '重塑经费管理流程，支持预算导入、费用记录、报销闭环与可视化查询。',
          result: '自动化程度提升 90%，报销效率提升 70%',
          period: '2024-2025',
          tags: ['B端产品', '数字化转型', '自动化'],
          url: '#',
        },
        {
          title: 'AI4SE 全流程实践',
          description:
            '以 AI 驱动需求、架构、代码、测试、部署全流程，小团队快速交付核心功能。',
          result: '开发周期大幅缩短，成本显著降低',
          period: '2024-2025',
          tags: ['AI4SE', '全流程', '效率提升'],
          url: '#',
        },
        {
          title: 'AI 驱动个人博客',
          description: '搭建 AI 赋能的内容生产与知识管理体系。',
          result: '写作效率提升，形成可治理的内容生产流程',
          period: '2024-至今',
          tags: ['AI', '内容', '知识管理'],
          url: '#',
        },
        {
          title: '企业 AI 转型咨询',
          description: '协助企业用 AI 改善经营，完成应用架构设计与研发落地。',
          result: '推动决策与交付效率提升',
          period: '2023-至今',
          tags: ['咨询', '架构', 'AI'],
          url: '#',
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
      openMenu: '打开菜单',
      menu: '导航菜单',
    },
    subscribe: {
      title: '订阅更新',
      description: '获取最新文章和 AI 实践资讯',
      placeholder: '输入邮箱订阅更新',
      button: '订阅',
      rss: 'RSS 订阅',
      errorRetry: '订阅失败，请稍后重试',
    },
  },
  en: {
    hero: {
      greeting: "Hi, I'm",
      name: 'Leon',
      tagline: 'Senior Full-Stack Engineer · AI-Native Builder · AI Solutions Architect',
      description:
        'Designing AI-driven solutions for enterprises and individuals to navigate change, boost efficiency, and stay competitive.',
      cta: 'My Mission',
    },
    about: {
      title: 'About Me',
      story: [
        'Senior full-stack engineer with extensive toC training and toB digital transformation consulting experience, focused on solving real problems with technology.',
        'In the AI era, built an asset management system in Rust, an AI-powered personal blog, helped improve business operations, and led enterprise app architecture, design, and delivery.',
        'My mission is to bridge AI technology and real-world scenarios through services and open communities, helping business operations, organizational effectiveness, product R&D, cultural creation, and more successfully adopt AI solutions.',
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
      ctaMore: 'Show more projects',
      ctaLess: 'Show fewer projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'Asset Management System (Rust)',
          description:
            'Built a risk-exposure-led asset taxonomy with inventory tracking, allocation drift monitoring, and rebalancing guidance.',
          result: 'Delivered portfolio health checks with allocation advice',
          period: '2025-2026',
          tags: ['Rust', 'Asset Management', 'Open Source'],
          url: 'https://github.com/lrliang/asset-light',
        },
        {
          title: 'Automated Efficiency Analytics Platform',
          description:
            'Built automated efficiency notification system with scheduled data collection, multi-project analytics, and layered service architecture.',
          result: 'Reduced manual reporting effort, kept efficiency KPIs on track',
          period: '2024-2025',
          tags: ['Node.js', 'PostgreSQL', 'Analytics'],
          url: '#',
        },
        {
          title: 'AI Code Review Assistant',
          description:
            'Built an AI-powered code review tool on GitLab that analyzes diffs, flags code smells and risks, with configurable rules.',
          result: 'Review time reduced by 80%, code quality improved by 35%',
          period: '2024-2025',
          tags: ['AI', 'GitLab', 'Code Review'],
          url: '#',
        },
        {
          title: 'Core Module Architecture Refactor',
          description:
            'Refactored legacy module into layered architecture with scenario-driven semantics and lifecycle management.',
          result: 'Faster issue diagnosis, onboarding time reduced by 80%',
          period: '2024-2025',
          tags: ['Architecture', 'Java', 'Refactoring'],
          url: '#',
        },
        {
          title: 'RAG-Based QA System',
          description:
            'Built a RAG-powered QA system on historical tickets and knowledge base with similar-case retrieval and chat interface.',
          result: 'Faster troubleshooting with systematized knowledge reuse',
          period: '2024-2025',
          tags: ['RAG', 'LLM', 'QA System'],
          url: '#',
        },
        {
          title: 'Efficiency Auto-Diagnostics',
          description:
            'Built log structuring tools and AI diagnostic reports for auto-generating metrics, visualizations, and optimization suggestions.',
          result: 'Log analysis efficiency improved ~5x',
          period: '2024-2025',
          tags: ['Analytics', 'AI', 'Efficiency'],
          url: '#',
        },
        {
          title: 'AI Test Case Generation',
          description:
            'Auto-generated Gherkin/Cucumber test cases from scenario descriptions, maintained a standardized Step library, integrated into CI/CD.',
          result: 'Test authoring efficiency improved significantly, coverage reached 95%',
          period: '2024-2025',
          tags: ['Test Automation', 'Cucumber', 'AI'],
          url: '#',
        },
        {
          title: 'Team Expense Management Platform',
          description:
            'Rebuilt expense management workflow with budget import, expense tracking, reimbursement loop, and visual analytics.',
          result: '90% automation, 70% faster reimbursements',
          period: '2024-2025',
          tags: ['B2B', 'Digital Transformation', 'Automation'],
          url: '#',
        },
        {
          title: 'AI4SE Full-Flow Practice',
          description:
            'Applied AI to requirements, architecture, coding, testing, and deployment for rapid small-team delivery.',
          result: 'Development cycle significantly shortened, costs greatly reduced',
          period: '2024-2025',
          tags: ['AI4SE', 'Full-Flow', 'Productivity'],
          url: '#',
        },
        {
          title: 'AI-Powered Personal Blog',
          description: 'Designed an AI-assisted content production and knowledge management workflow.',
          result: 'Improved writing efficiency with governance-ready content process',
          period: '2024-Present',
          tags: ['AI', 'Content', 'Knowledge'],
          url: '#',
        },
        {
          title: 'Enterprise AI Transformation Consulting',
          description: 'Helped enterprises improve operations with AI and delivered application architecture design and development.',
          result: 'Better decision-making and delivery efficiency',
          period: '2023-Present',
          tags: ['Consulting', 'Architecture', 'AI'],
          url: '#',
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
      openMenu: 'Open menu',
      menu: 'Navigation menu',
    },
    subscribe: {
      title: 'Subscribe',
      description: 'Get the latest articles and AI insights',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      rss: 'RSS Feed',
      errorRetry: 'Subscription failed, please try again',
    },
  },
};


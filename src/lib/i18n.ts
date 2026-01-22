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
      ctaMore: '查看更多项目',
      ctaLess: '收起项目',
      viewProject: '查看项目',
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
          title: '算法自动化效率测试',
          description:
            '面向算法团队单分支开发，搭建自动化效率通知系统：定时拉取效率平台数据并分析，覆盖多项目数据采集与统计，自动识别项目并通过飞书推送；配套 PostgreSQL + Metabase 数据看板与分层服务架构。',
          result: '减少人工统计与回归成本，保障算法效率指标持续达标',
          period: '2024-2025',
          tags: ['Node.js', 'PostgreSQL', '数据分析', '飞书'],
          url: 'https://git.hairoutech.com/haialgo/auto-efficiency-notifier',
        },
        {
          title: 'AI 驱动团队代码 Review',
          description:
            '基于 GitLab + 飞书构建 AI 代码审查助手，自动分析 MR 变更、识别代码坏味道与潜在风险，支持可配置规则与策略，实现标准化审查流程。',
          result: '审查时间由 60 分钟降至 12 分钟，质量评分提升 35%，通知响应缩短至 2 分钟内',
          period: '2024-2025',
          tags: ['AI', 'GitLab', 'Code Review', '自动化'],
          url: 'https://git.hairoutech.com/haialgo/ai-mr-revirewer',
        },
        {
          title: '算法模块架构重构',
          description:
            '面向遗留核心算法模块，重构为入口层/核心服务层/模型层/工具层四层架构，引入场景化语义与生命周期管理，业务与日志解耦。',
          result: '问题定位提速、回归成本下降，新人上手从 2 周缩短至 3 天',
          period: '2024-2025',
          tags: ['架构重构', '算法', 'Java'],
          url: '#',
        },
        {
          title: 'Napoleon-EagleEye 故障问答系统（RAG）',
          description:
            '基于历史工单与知识库构建 RAG 智能问答，支持相似工单检索、定时同步、对话式交互与反馈闭环。',
          result: '故障排查效率提升，知识沉淀与复用体系化',
          period: '2024-2025',
          tags: ['RAG', 'LLM', '故障诊断'],
          url: '#',
        },
        {
          title: '系统效率自动诊断（EAI）',
          description:
            '构建 L0 日志结构化生成器 + EAI 网页分析工具 + AI 诊断报告，自动生成指标、可视化与优化建议。',
          result: '日志分析从 2-3 天降至 0.5 天，整体效率提升约 5 倍',
          period: '2024-2025',
          tags: ['数据分析', 'AI', '效率诊断'],
          url: '#',
        },
        {
          title: 'AI 测试用例生成 Agent',
          description:
            '输入场景描述自动分解并生成 Gherkin/Cucumber 用例，维护标准化 Step 库并接入 CI/CD。',
          result: '用例编写降至 0.5 天，覆盖率提升至 95%',
          period: '2024-2025',
          tags: ['测试自动化', 'Cucumber', 'AI'],
          url: '#',
        },
        {
          title: '经费管理平台',
          description:
            '重塑团建经费管理流程，预算导入与自动分摊、费用记录、报销闭环、可视化查询，替代 Excel 手工维护。',
          result: '自动化程度提升 90%，报销效率提升 70%，数据实时可见',
          period: '2024-2025',
          tags: ['B端产品', '数字化转型', '预算管理', '自动化'],
          url: '#',
        },
        {
          title: 'AI4SE 全流程实践',
          description:
            '以 AI 驱动需求、架构、代码、测试、部署全流程，2 人业余 4 周交付核心功能。',
          result: '开发周期从 38 周降至 4 周，成本接近 0',
          period: '2024-2025',
          tags: ['AI4SE', '全流程', '效率提升'],
          url: '#',
        },
        {
          title: 'AI 驱动个人博客',
          description: '搭建 AI 赋能的内容生产与知识管理体系。',
          result: '写作质量与发布效率提升，形成可治理的 AI 内容生产流程',
          period: '2024-2025',
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
      openMenu: '打开菜单',
      menu: '导航菜单',
    },
    subscribe: {
      title: '订阅更新',
      description: '获取最新文章和 AI 出海资讯',
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
      ctaMore: 'Show more projects',
      ctaLess: 'Show fewer projects',
      viewProject: 'View Project',
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
          title: 'Algorithm Automation Efficiency Testing',
          description:
            'Built an automated efficiency notification system for single-branch algorithm development: scheduled pipelines collect platform data, analyze multi-project metrics, and route results to Feishu; backed by PostgreSQL + Metabase dashboards and a layered service architecture.',
          result: 'Reduced manual reporting and regression effort while keeping efficiency KPIs compliant',
          period: '2024-2025',
          tags: ['Node.js', 'PostgreSQL', 'Analytics', 'Feishu'],
          url: 'https://git.hairoutech.com/haialgo/auto-efficiency-notifier',
        },
        {
          title: 'AI-Driven Team Code Review',
          description:
            'Integrated GitLab and Feishu to deliver an AI code review assistant that analyzes MR diffs, flags code smells and risks, and supports configurable review rules for consistent quality.',
          result: 'Review time cut from 60 minutes to 12, quality score +35%, notifications within 2 minutes',
          period: '2024-2025',
          tags: ['AI', 'GitLab', 'Code Review', 'Automation'],
          url: 'https://git.hairoutech.com/haialgo/ai-mr-revirewer',
        },
        {
          title: 'Algorithm Module Architecture Refactor',
          description:
            'Refactored a legacy core algorithm module into entry/core service/model/tool layers, introduced scenario-driven semantics and lifecycle management, and decoupled business logic from logging.',
          result: 'Faster issue diagnosis, lower regression cost, and onboarding cut from 2 weeks to 3 days',
          period: '2024-2025',
          tags: ['Architecture', 'Algorithms', 'Java'],
          url: '#',
        },
        {
          title: 'Napoleon-EagleEye Fault QA System (RAG)',
          description:
            'Built a RAG-based fault QA system on historical tickets and knowledge base with similar-case retrieval, scheduled sync, chat UI, and feedback loop.',
          result: 'Faster troubleshooting with systematized knowledge reuse',
          period: '2024-2025',
          tags: ['RAG', 'LLM', 'Diagnostics'],
          url: '#',
        },
        {
          title: 'Efficiency Auto-Inspector (EAI)',
          description:
            'Delivered L0 log structuring, an EAI web analyzer, and AI diagnostic reports to auto-generate metrics, visualizations, and optimization suggestions.',
          result: 'Log analysis cut from 2–3 days to 0.5 day, ~5× efficiency gain',
          period: '2024-2025',
          tags: ['Analytics', 'AI', 'Efficiency'],
          url: '#',
        },
        {
          title: 'AI Test Case Generation Agent',
          description:
            'Auto-generated Gherkin/Cucumber test cases from scenario descriptions, maintained a standardized Step library, and integrated into CI/CD.',
          result: 'Test authoring down to 0.5 day and coverage up to 95%',
          period: '2024-2025',
          tags: ['Test Automation', 'Cucumber', 'AI'],
          url: '#',
        },
        {
          title: 'Expense Management Platform',
          description:
            'Rebuilt the team expense workflow with budget import and auto allocation, expense tracking, reimbursement loop, and visual analytics, replacing Excel-heavy manual ops.',
          result: '90% automation and 70% faster reimbursements with real-time visibility',
          period: '2024-2025',
          tags: ['B2B', 'Digital Transformation', 'Budgeting', 'Automation'],
          url: '#',
        },
        {
          title: 'AI4SE Full-Flow Practice',
          description:
            'Applied AI to requirements, architecture, coding, testing, and deployment; two-person, part-time delivery in 4 weeks.',
          result: 'Cycle reduced from 38 weeks to 4 with near-zero cost',
          period: '2024-2025',
          tags: ['AI4SE', 'Full-Flow', 'Productivity'],
          url: '#',
        },
        {
          title: 'AI-Powered Personal Blog',
          description: 'Designed an AI-assisted content production and knowledge management workflow.',
          result: 'Improved writing quality and publishing efficiency, established a governance-ready AI content production process',
          period: '2024-Present',
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


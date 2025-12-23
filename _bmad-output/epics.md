---
stepsCompleted: [1, 2, 3, 4]
status: complete
completedAt: '2025-12-23'
totalEpics: 7
totalStories: 37
inputDocuments:
  - "_bmad-output/prd.md"
  - "_bmad-output/architecture.md"
  - "_bmad-output/ux-design-specification.md"
---

# leon-blog - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for leon-blog, decomposing the requirements from the PRD, UX Design, and Architecture documents into implementable stories.

## Requirements Inventory

### Functional Requirements

**1. 首页与个人品牌 (10条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR1 | 访客可以在首页看到网站主人的核心价值主张和一句话定位 | Must |
| FR2 | 访客可以切换首页内容的语言（中文/英文） | Should |
| FR3 | 访客可以查看网站主人的详细个人背景和职业经历 | Must |
| FR4 | 访客可以查看网站主人的生活爱好和个人特质 | Should |
| FR5 | 访客可以查看网站主人提供的专业服务列表 | Must |
| FR6 | 访客可以查看每项服务的详细介绍和价值说明 | Must |
| FR7 | 访客可以查看网站主人的项目经历和成果 | Must |
| FR8 | 访客可以看到项目的量化成果数据 | Must |
| FR60 | 访客可以看到咨询服务的具体交付物和时间周期 | Should |
| FR61 | 访客可以看到服务定价范围或计价方式说明 | Could |

**2. 博客内容系统 (18条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR9 | 访客可以浏览博客文章列表 | Must |
| FR10 | 访客可以查看每篇文章的标题、摘要、发布日期 | Must |
| FR11 | 访客可以查看每篇文章的预估阅读时间 | Should |
| FR12 | 访客可以按分类筛选文章 | Should |
| FR13 | 访客可以按标签筛选文章 | Should |
| FR14 | 访客可以阅读文章完整内容 | Must |
| FR15 | 访客可以在文章中查看格式化的代码块 | Must |
| FR16 | 访客可以复制代码块内容到剪贴板 | Must |
| FR17 | 访客可以看到代码块的语法高亮 | Must |
| FR18 | 访客可以搜索博客内容 | Should |
| FR19 | 访客可以通过RSS订阅博客更新 | Should |
| FR44 | 访客可以在长文章中导航到指定章节（TOC） | Could |
| FR45 | 访客可以查看同一系列的相关文章列表 | Could |
| FR46 | 访客可以查看每篇文章的TL;DR摘要（3句话要点） | Must |
| FR57 | 访客可以在首页或博客页看到编辑精选的推荐文章 | Should |
| FR58 | 访客可以看到最受欢迎/最新的文章列表 | Should |
| FR59 | 访客可以在文章底部看到作者简介和相关文章推荐 | Should |
| FR62 | 代码块在各设备上可完整查看 | Must |
| FR68 | 访客可以在阅读时看到当前阅读进度 | Could |

**3. 联系与转化 (10条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR20 | 访客可以看到微信联系方式 | Must |
| FR21 | 访客可以扫描微信二维码添加联系 | Must |
| FR22 | 访客可以通过表单提交咨询请求 | Should |
| FR23 | 系统可以记录咨询请求的来源渠道 | Should |
| FR24 | 访客可以订阅邮件更新 | Should |
| FR25 | 系统可以收集订阅者的邮箱地址 | Should |
| FR50 | 访客可以通过电话联系网站主人 | Should |
| FR64 | 订阅者可以收到内容更新通知 | Could |
| FR65 | 访客可以查看历史Newsletter存档 | Could |
| FR69 | 首次访客可以快速了解网站的核心价值和内容结构 | Should |

**4. 教程与内容分享 (4条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR26 | 访客可以查看教程分类入口 | Should |
| FR27 | 访客可以查看推荐的外部链接和资源 | Could |
| FR28 | 访客可以查看网站主人的社交媒体链接 | Must |
| FR29 | 访客可以分享文章到社交媒体 | Could |

**5. 用户体验与偏好 (6条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR30 | 访客可以切换网站的明/暗主题（无闪烁过渡） | Must |
| FR31 | 系统可以保持访客的主题偏好 | Must |
| FR32 | 访客可以在任何设备上正常浏览网站 | Must |
| FR33 | 访客可以使用键盘导航网站 | Should |
| FR66 | 访客可以使用键盘快捷键快速导航（如 / 搜索） | Could |
| FR67 | 网站可以符合WCAG 2.1 AA级无障碍标准 | Should |

**6. 内容发现与SEO (6条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR34 | 搜索引擎可以索引网站所有公开页面 | Must |
| FR35 | 每个页面可以有独立的元数据描述 | Must |
| FR36 | 每篇文章可以有结构化数据标记 | Should |
| FR37 | 网站可以自动生成站点地图 | Must |
| FR38 | 每个页面可以有适合社交分享的预览图（OG Image） | Should |
| FR63 | 图片可以渐进加载并显示占位符 | Should |

**7. 内容管理（运营侧）(5条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR39 | 网站主人可以通过MDX文件发布新文章 | Must |
| FR40 | 网站主人可以为文章设置分类和标签 | Must |
| FR41 | 网站主人可以设置文章的发布日期 | Must |
| FR42 | 网站主人可以在文章中嵌入自定义组件（Callout、代码对比、视频、链接卡片） | Should |
| FR43 | 网站主人可以预览文章效果后再发布 | Should |

**8. 信任建立 (3条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR47 | 访客可以查看完整的案例研究（问题→方案→结果） | Should |
| FR48 | 访客可以查看咨询服务的具体流程和预期交付 | Should |
| FR49 | 访客可以查看过往客户的评价或推荐（无内容时显示征集状态） | Could |

**9. 系统反馈与状态 (4条)**

| ID | 功能需求 | 优先级 |
|----|---------|--------|
| FR53 | 系统可以在操作进行时显示加载状态 | Should |
| FR54 | 系统可以在操作失败时显示错误提示和恢复建议 | Should |
| FR55 | 系统可以在搜索无结果时显示友好提示和建议 | Should |
| FR56 | 系统可以显示自定义404页面引导用户返回 | Must |

---

### Non-Functional Requirements

**Performance（性能）**

| ID | 需求 | 指标 |
|----|------|------|
| NFR1 | 页面首次加载时间 | < 2秒（LCP） |
| NFR2 | 首次输入延迟 | < 100ms（FID） |
| NFR3 | 累积布局偏移 | < 0.1（CLS） |
| NFR4 | 移动端性能 | 与桌面端标准一致 |
| NFR5 | Lighthouse Performance评分 | ≥ 90分 |
| NFR6 | 代码高亮渲染 | 不阻塞页面首屏渲染 |

**Security（安全）**

| ID | 需求 | 说明 |
|----|------|------|
| NFR7 | HTTPS强制 | 所有页面强制HTTPS访问 |
| NFR8 | 表单数据传输 | 所有表单提交通过HTTPS加密 |
| NFR9 | 邮件订阅数据 | 存储于Resend，遵循其安全标准 |
| NFR10 | 内容安全策略 | 配置CSP防止XSS攻击 |
| NFR11 | 无敏感数据存储 | 不存储用户密码、支付信息 |

**Accessibility（可访问性）**

| ID | 需求 | 说明 |
|----|------|------|
| NFR12 | WCAG标准 | 符合WCAG 2.1 AA级标准 |
| NFR13 | 颜色对比度 | 文本对比度 ≥ 4.5:1，大文本 ≥ 3:1 |
| NFR14 | 键盘可访问 | 所有交互元素可通过键盘操作 |
| NFR15 | 屏幕阅读器 | 语义化HTML + 必要的ARIA标签 |
| NFR16 | 焦点可见 | 键盘焦点状态清晰可见 |

**Integration（集成）**

| ID | 需求 | 说明 |
|----|------|------|
| NFR17 | Vercel部署 | 支持GitHub → Vercel自动部署流程 |
| NFR18 | Resend邮件 | 集成Resend API进行邮件订阅通知 |
| NFR19 | Pagefind搜索 | 构建时生成搜索索引，无运行时依赖 |
| NFR20 | Analytics | 支持Vercel Analytics或Google Analytics集成 |

**Reliability（可靠性）**

| ID | 需求 | 说明 |
|----|------|------|
| NFR21 | 静态托管 | 纯SSG架构，无服务端依赖 |
| NFR22 | CDN分发 | 通过Vercel Edge Network全球分发 |
| NFR23 | 优雅降级 | JavaScript禁用时核心内容仍可访问 |

**Maintainability（可维护性）**

| ID | 需求 | 说明 |
|----|------|------|
| NFR24 | TypeScript | 使用TypeScript strict模式 |
| NFR25 | 代码规范 | ESLint + Prettier统一代码风格 |
| NFR26 | 组件化 | 使用可复用的React组件架构 |
| NFR27 | 内容与代码分离 | MDX内容与UI代码分离管理 |

---

### Additional Requirements

**From Architecture Document:**

- **Starter Template**: 使用 `create-next-app@latest` + `shadcn-ui@latest init` + `velite` 初始化项目
- **Content Abstraction Layer**: 实现 `src/lib/content.ts` 抽象层，隔离Velite实现细节
- **Project Structure**: 按照Architecture定义的目录结构组织代码
- **Component Naming**: PascalCase组件文件名，kebab-case工具函数文件名
- **Import Patterns**: 使用 `@/` 路径别名
- **Testing Strategy**: Vitest + 内容层测试 + Velite strict模式构建验证
- **Error Handling**: MDX渲染ErrorBoundary
- **Git Workflow**: main + 功能分支，commitlint + Conventional Commits

**From UX Design Document:**

- **Design System**: Tailwind CSS + shadcn/ui
- **Visual Style**: 流动叙事 + 密度平衡设计风格
- **Color System**: 暗色为主，亮色支持
- **Typography**: Inter + Noto Sans SC + JetBrains Mono
- **Responsive Breakpoints**: sm(640px) → md(768px) → lg(1024px) → xl(1280px)
- **Animation**: Framer Motion，入场动画为主
- **Loading States**: 顶部进度条，按钮内置Spinner
- **Accessibility**: 所有交互元素keyboard accessible + 焦点样式

---

### FR Coverage Map

| FR | Epic | 简述 |
|----|------|------|
| FR1 | Epic 2 | 首页价值主张 |
| FR2 | Epic 2 | 首页中英文切换 |
| FR3 | Epic 2 | 个人背景展示 |
| FR4 | Epic 2 | 生活爱好展示 |
| FR5 | Epic 2 | 专业服务列表 |
| FR6 | Epic 2 | 服务详细说明 |
| FR7 | Epic 2 | 项目经历展示 |
| FR8 | Epic 2 | 项目量化成果 |
| FR9 | Epic 3 | 博客文章列表 |
| FR10 | Epic 3 | 文章基本信息 |
| FR11 | Epic 3 | 阅读时间估算 |
| FR12 | Epic 3 | 分类筛选 |
| FR13 | Epic 3 | 标签筛选 |
| FR14 | Epic 3 | 文章详情页 |
| FR15 | Epic 3 | 代码块格式化 |
| FR16 | Epic 3 | 代码复制按钮 |
| FR17 | Epic 3 | 代码语法高亮 |
| FR18 | Epic 4 | 博客搜索 |
| FR19 | Epic 5 | RSS订阅 |
| FR20 | Epic 2 | 微信联系方式 |
| FR21 | Epic 2 | 微信二维码 |
| FR22 | Epic 5 | 咨询表单 |
| FR23 | Epic 5 | 来源追踪 |
| FR24 | Epic 5 | 邮件订阅 |
| FR25 | Epic 5 | 订阅者收集 |
| FR26 | Epic 6 | 教程入口 |
| FR27 | Epic 6 | 推荐资源 |
| FR28 | Epic 2 | 社交媒体链接 |
| FR29 | Epic 5 | 社交分享 |
| FR30 | Epic 1 | 主题切换 |
| FR31 | Epic 1 | 主题偏好保存 |
| FR32 | Epic 1 | 响应式设计 |
| FR33 | Epic 7 | 键盘导航 |
| FR34 | Epic 1 | 搜索引擎索引 |
| FR35 | Epic 1 | 页面元数据 |
| FR36 | Epic 4 | 结构化数据 |
| FR37 | Epic 1 | 站点地图 |
| FR38 | Epic 5 | OG图片 |
| FR39 | Epic 3 | MDX发布 |
| FR40 | Epic 3 | 分类标签设置 |
| FR41 | Epic 3 | 发布日期 |
| FR42 | Epic 3 | 自定义组件 |
| FR43 | Epic 3 | 文章预览 |
| FR44 | Epic 3 | TOC导航 |
| FR45 | Epic 6 | 相关文章 |
| FR46 | Epic 3 | TL;DR摘要 |
| FR47 | Epic 6 | 案例研究 |
| FR48 | Epic 6 | 服务流程 |
| FR49 | Epic 6 | 客户评价 |
| FR50 | Epic 2 | 电话联系 |
| FR53 | Epic 7 | 加载状态 |
| FR54 | Epic 7 | 错误提示 |
| FR55 | Epic 4 | 搜索无结果提示 |
| FR56 | Epic 1 | 404页面 |
| FR57 | Epic 3 | 推荐文章 |
| FR58 | Epic 3 | 最新/热门文章 |
| FR59 | Epic 3 | 作者简介+推荐 |
| FR60 | Epic 2 | 服务交付物 |
| FR61 | Epic 2 | 服务定价 |
| FR62 | Epic 3 | 代码块响应式 |
| FR63 | Epic 7 | 图片渐进加载 |
| FR64 | Epic 5 | 更新通知 |
| FR65 | Epic 5 | Newsletter存档 |
| FR66 | Epic 4 | 键盘快捷键 |
| FR67 | Epic 7 | WCAG合规 |
| FR68 | Epic 3 | 阅读进度 |
| FR69 | Epic 2 | 快速了解 |

---

## Epic List

### Epic 1: Project Foundation & Infrastructure
**用户成果**：开发者可以开始开发，所有基础设施就位

项目初始化、基础布局、主题切换、响应式框架、基础SEO配置。这是所有后续Epic的技术基础。

**FRs covered**: FR30, FR31, FR32, FR34, FR35, FR37, FR56

**NFRs addressed**: NFR17, NFR21, NFR22, NFR24, NFR25, NFR26, NFR27

**Stories**: 7

---

## Epic 1: Project Foundation & Infrastructure

项目初始化、基础布局、主题切换、响应式框架、基础SEO配置。

### Story 1.1: Next.js Project Initialization

As a **开发者**,
I want **创建配置完整的Next.js项目**,
So that **我有基础开发环境可以开始编码**.

**Acceptance Criteria:**

**Given** 一个空的项目目录
**When** 执行 `npx create-next-app@latest` 命令
**Then** Next.js 14+ App Router项目创建成功
**And** TypeScript strict模式启用
**And** Tailwind CSS配置完成
**And** 项目使用 `src/` 目录结构
**And** `@/` 路径别名配置正确

**When** 执行 `npx shadcn@latest init`
**Then** shadcn/ui初始化成功
**And** `components.json` 配置文件生成
**And** `cn()` 工具函数可用于 `@/lib/utils`

---

### Story 1.2: Velite Content Layer Setup

As a **开发者**,
I want **配置Velite处理MDX内容**,
So that **我可以使用类型安全的方式管理博客内容**.

**Acceptance Criteria:**

**Given** Next.js项目已初始化（Story 1.1完成）
**When** 安装并配置Velite
**Then** `velite.config.ts` 配置文件创建
**And** MDX内容schema定义完成（title, date, description, tags必填）
**And** `content/blog/` 目录创建用于存放MDX文件
**And** 构建时生成 `.velite/` 输出目录

**When** 创建 `src/lib/content.ts` 内容抽象层
**Then** `getPost(slug)` 函数可用
**And** `getAllPosts()` 函数可用
**And** `getPostsByTag(tag)` 函数可用
**And** `getAllTags()` 函数可用
**And** 接口类型定义符合Architecture文档

---

### Story 1.3: Development Tooling Setup

As a **开发者**,
I want **配置代码质量和测试工具**,
So that **团队代码风格一致且可测试**.

**Acceptance Criteria:**

**Given** Next.js项目已初始化
**When** 配置开发工具
**Then** ESLint使用 `next/core-web-vitals` 规则集
**And** Prettier配置完成，含tailwindcss插件
**And** Vitest安装并配置
**And** `@testing-library/react` 安装
**And** `tests/setup.ts` 测试配置文件创建
**And** `npm run test` 命令可用

---

### Story 1.4: Base Layout Components

As a **访客**,
I want **看到一致的页面布局结构**,
So that **我可以轻松导航网站**.

**Acceptance Criteria:**

**Given** 访客访问任意页面
**When** 页面加载完成
**Then** 顶部Header显示：Logo + 导航链接 + 主题切换按钮
**And** 底部Footer显示：版权信息 + 社交媒体链接
**And** 使用shadcn/ui Sheet组件实现移动端侧滑导航

**Given** 访客使用不同设备
**When** 浏览器宽度 < 768px（md断点）
**Then** 显示汉堡菜单图标，隐藏桌面导航
**When** 浏览器宽度 >= 768px
**Then** 显示完整桌面导航，隐藏汉堡菜单

---

### Story 1.5: Theme Toggle

As a **访客**,
I want **切换网站的明/暗主题**,
So that **我可以在舒适的环境下阅读**.

**Acceptance Criteria:**

**Given** 访客首次访问网站
**When** 页面加载
**Then** 自动检测系统主题偏好并应用
**And** 无任何闪烁（FR30）

**Given** 访客在任意页面
**When** 点击主题切换按钮
**Then** 网站主题立即切换（暗→亮 或 亮→暗）
**And** 切换过程平滑，无闪烁
**And** 主题偏好保存到localStorage（FR31）

**Given** 访客再次访问网站
**When** 页面加载
**Then** 自动应用上次保存的主题偏好

---

### Story 1.6: SEO Foundation

As a **网站主人**,
I want **网站被搜索引擎正确索引**,
So that **潜在访客可以通过搜索找到我**.

**Acceptance Criteria:**

**Given** 网站构建完成
**When** 访问 `/sitemap.xml`
**Then** 返回200状态码
**And** XML包含所有公开页面URL（FR37）

**Given** 网站构建完成
**When** 访问 `/robots.txt`
**Then** 返回200状态码
**And** 允许搜索引擎爬取公开页面

**Given** 任意页面
**When** 查看HTML head标签
**Then** 包含独立的 `<title>` 标签（FR35）
**And** 包含独立的 `<meta name="description">` 标签
**And** 符合Next.js Metadata API规范

---

### Story 1.7: 404 Page

As a **访客**,
I want **在访问不存在页面时看到友好提示**,
So that **我知道如何返回正确页面**.

**Acceptance Criteria:**

**Given** 访客访问不存在的URL（如 `/non-existent-page`）
**When** 页面加载
**Then** 显示自定义404页面（FR56）
**And** 页面包含"返回首页"链接
**And** 页面风格与网站整体设计一致
**And** 返回HTTP 404状态码

---

### Epic 2: Homepage & Personal Brand
**用户成果**：访客可以了解网站主人、查看服务和项目经历

Hero区域、个人介绍、专业服务、项目经历、中英文切换、联系方式。首页是建立第一印象和信任的关键入口。

**FRs covered**: FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR20, FR21, FR28, FR50, FR60, FR61, FR69

**Stories**: 7

---

## Epic 2: Homepage & Personal Brand

首页是建立第一印象和信任的关键入口。

### Story 2.1: Homepage Data Structure

As a **开发者**,
I want **建立首页内容的数据结构**,
So that **首页组件可以从统一数据源获取内容**.

**Acceptance Criteria:**

**Given** 首页需要展示多种内容
**When** 创建数据结构
**Then** `src/lib/home-data.ts` 包含首页静态数据
**And** `src/lib/i18n.ts` 包含中英文内容版本
**And** 数据结构包含：hero、about、services、projects、contact等模块
**And** 所有文本内容支持中英文切换
**And** 项目数据包含外链URL字段

---

### Story 2.2: Hero Section

As a **访客**,
I want **在首页看到网站主人的核心价值主张**,
So that **我能快速判断这个网站是否与我相关**.

**Acceptance Criteria:**

**Given** 访客访问首页
**When** 页面加载完成
**Then** Hero区域显示一句话定位（FR1）
**And** 显示个人照片/头像
**And** 显示"了解更多"CTA按钮
**And** 布局在移动端和桌面端都美观
**And** 入场动画使用Framer Motion staggered reveal
**And** 内容按逻辑顺序排列，建立清晰的视觉层次（FR69）

---

### Story 2.3: About Me Section

As a **访客**,
I want **查看网站主人的个人背景和职业经历**,
So that **我能了解他的专业背景和可信度**.

**Acceptance Criteria:**

**Given** 访客在首页
**When** 滚动到"关于我"区域
**Then** 显示详细的个人故事（FR3）
**And** 使用自定义Timeline组件展示职业轨迹
**And** 显示生活爱好和个人特质（FR4）
**And** 无边框分隔，使用留白和typography层次
**And** 入场动画在视口进入时触发

---

### Story 2.4: Professional Services

As a **访客**,
I want **查看网站主人提供的专业服务**,
So that **我能判断他是否能帮助解决我的问题**.

**Acceptance Criteria:**

**Given** 访客在首页
**When** 滚动到"专业服务"区域
**Then** 显示服务列表（FR5）
**And** 每个服务显示标题、描述、价值说明（FR6）
**And** 显示服务的交付物和时间周期（FR60）
**And** 可选显示定价范围（FR61）
**And** 服务卡片包含"咨询详情"CTA按钮
**And** CTA按钮使用data属性标记，便于后续追踪

---

### Story 2.5: Project Portfolio

As a **访客**,
I want **查看网站主人的项目经历和成果**,
So that **我能验证他的实际能力**.

**Acceptance Criteria:**

**Given** 访客在首页
**When** 滚动到"项目经历"区域
**Then** 显示项目列表（FR7）
**And** 每个项目显示量化成果数据（如"10x增长"）（FR8）
**And** 显示项目时间范围
**And** 显示使用的技术/技能标签
**And** 项目卡片包含"查看项目"链接，跳转到外部URL或博客文章
**And** 外部链接在新标签页打开，显示↗图标

---

### Story 2.6: Contact Information

As a **访客**,
I want **看到联系方式**,
So that **我能与网站主人建立联系**.

**Acceptance Criteria:**

**Given** 访客在首页
**When** 滚动到联系区域或Footer
**Then** 显示微信联系方式文本（FR20）
**And** 显示微信二维码（FR21）
**And** 桌面端二维码尺寸 ≥ 150px，便于手机扫描
**And** 移动端二维码可长按保存
**And** 显示社交媒体链接（小红书、公众号、即刻等）（FR28）
**And** 可选显示电话联系方式（FR50）

---

### Story 2.7: Homepage Language Toggle

As a **访客**,
I want **切换首页内容的语言**,
So that **我能用最舒适的语言了解网站主人**.

**Acceptance Criteria:**

**Given** 访客在首页
**When** 点击语言切换按钮（Header右上角）
**Then** 首页内容切换为中文或英文（FR2）
**And** 使用React Context管理语言状态
**And** 语言偏好保存到localStorage
**And** 切换动画平滑
**And** 仅首页受影响，博客内容保持中文

**Given** 访客再次访问首页
**When** 页面加载
**Then** 自动应用上次选择的语言

---

### Epic 3: Blog Content System
**用户成果**：访客可以浏览、阅读、发现博客内容

博客列表、文章详情、代码高亮、阅读时间、TL;DR摘要、标签筛选、TOC导航、阅读进度。博客是核心内容载体和SEO入口。

**FRs covered**: FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16, FR17, FR39, FR40, FR41, FR42, FR43, FR44, FR46, FR57, FR58, FR59, FR62, FR68

**Stories**: 10

---

## Epic 3: Blog Content System

博客是核心内容载体和SEO入口。

### Story 3.1: Blog List Page

As a **访客**,
I want **浏览博客文章列表**,
So that **我能发现感兴趣的内容**.

**Acceptance Criteria:**

**Given** 访客访问 `/blog`
**When** 页面加载完成
**Then** 调用 `getAllPosts()` 获取文章列表（FR9）
**And** 每篇文章显示标题、摘要、发布日期（FR10）
**And** 显示预估阅读时间（FR11）
**And** 文章按发布日期倒序排列
**And** 显示最新/热门文章标记（FR58）
**And** 列表使用卡片式布局

**Given** 博客无文章
**When** 页面加载
**Then** 显示友好的空状态提示

---

### Story 3.2: Article Detail Page

As a **访客**,
I want **阅读文章完整内容**,
So that **我能获取有价值的信息**.

**Acceptance Criteria:**

**Given** 访客点击文章卡片
**When** 跳转到 `/blog/[slug]`
**Then** 调用 `getPost(slug)` 获取文章内容（FR14）
**And** 显示文章标题、发布日期、阅读时间
**And** 显示TL;DR摘要，使用Callout样式突出显示（FR46）
**And** MDX内容正确渲染（标题h1-h3、列表ul/ol、链接a标签）
**And** 使用ErrorBoundary包裹，渲染失败时显示友好提示

---

### Story 3.3: Code Syntax Highlighting

As a **访客**,
I want **看到语法高亮的代码块**,
So that **我能轻松阅读代码**.

**Acceptance Criteria:**

**Given** 文章包含代码块
**When** 页面渲染
**Then** 代码块显示语法高亮（FR17）
**And** 语法高亮在构建时由Velite/Shiki处理
**And** 高亮主题联动暗色模式
**And** 代码块顶部显示语言标签
**And** 代码块在移动端可水平滚动（FR62）

---

### Story 3.4: Code Block Interactions

As a **访客**,
I want **复制代码块内容**,
So that **我能快速使用代码**.

**Acceptance Criteria:**

**Given** 文章包含代码块
**When** 鼠标悬停或触摸代码块
**Then** 显示复制按钮（FR16）

**Given** 访客点击复制按钮
**When** 复制操作执行
**Then** 代码内容复制到剪贴板
**And** 按钮显示"已复制"反馈，3秒后恢复

---

### Story 3.5: Tag System

As a **访客**,
I want **按标签筛选文章**,
So that **我能找到特定主题的内容**.

**Acceptance Criteria:**

**Given** 访客在博客列表或文章详情页
**When** 点击标签
**Then** 跳转到 `/tags/[tag]` 页面
**And** 调用 `getPostsByTag(tag)` 获取文章（FR12, FR13）

**Given** 访客访问 `/tags`
**When** 页面加载
**Then** 调用 `getAllTags()` 获取标签列表
**And** 每个标签显示文章数量

---

### Story 3.6: Table of Contents (TOC)

As a **访客**,
I want **在长文章中导航到指定章节**,
So that **我能快速跳转到感兴趣的部分**.

**Acceptance Criteria:**

**Given** 访客阅读长文章
**When** 页面加载
**Then** 侧边栏显示目录导航（FR44）
**And** TOC组件首屏加载（非动态导入）
**And** TOC从文章h2/h3标题自动生成
**And** 当章节进入视口顶部20%时，对应TOC项高亮
**And** 点击TOC项平滑滚动到对应章节

---

### Story 3.7: Reading Progress Indicator

As a **访客**,
I want **看到当前阅读进度**,
So that **我知道还有多少内容**.

**Acceptance Criteria:**

**Given** 访客阅读文章
**When** 滚动页面
**Then** 顶部显示阅读进度条，固定在Header下方（FR68）
**And** 进度条宽度反映滚动百分比
**And** 进度条颜色与主色调一致

---

### Story 3.8: MDX Custom Components

As a **网站主人**,
I want **在文章中嵌入自定义组件**,
So that **我能创建更丰富的内容体验**.

**Acceptance Criteria:**

**Given** 网站主人编写MDX文章
**When** 使用自定义组件
**Then** Callout组件可用：`<Callout type="info|warning|tip">`（FR42）
**And** 链接卡片组件可用：`<LinkCard url="..." />`
**And** 视频嵌入组件可用：`<Video src="..." />`
**And** 组件在Velite配置中注册，MDX中可直接使用

---

### Story 3.9: Content Management Workflow

As a **网站主人**,
I want **通过MDX文件发布新文章**,
So that **我能高效管理博客内容**.

**Acceptance Criteria:**

**Given** 网站主人创建新MDX文件
**When** 文件保存到 `content/blog/`
**Then** 文件名作为slug（FR39）
**And** frontmatter必须包含title, date, description, tags（FR40, FR41）
**And** 缺少必填字段时Velite构建失败并报告位置

**Given** 开发模式运行中
**When** MDX文件修改并保存
**Then** 页面自动刷新显示更新（FR43）

---

### Story 3.10: Featured & Related Articles

As a **访客**,
I want **看到推荐和相关文章**,
So that **我能发现更多感兴趣的内容**.

**Acceptance Criteria:**

**Given** 访客在首页或博客列表
**When** 页面加载
**Then** 显示编辑精选的推荐文章（FR57）

**Given** 访客阅读完一篇文章
**When** 滚动到文章底部
**Then** 显示作者简介卡片（FR59）
**And** 显示相关文章推荐（至少1个共同标签）
**And** 最多显示3篇相关文章

---

### Epic 4: Search & Discovery
**用户成果**：访客可以快速找到需要的内容

Pagefind搜索集成、搜索Modal、无结果提示、结构化数据、键盘快捷键。提升内容发现效率。

**FRs covered**: FR18, FR36, FR55, FR66

**Stories**: 2

---

## Epic 4: Search & Discovery

提升内容发现效率。

### Story 4.1: Search Feature

As a **访客**,
I want **搜索博客内容**,
So that **我能快速找到需要的文章**.

**Acceptance Criteria:**

**Given** 网站构建完成
**When** 构建流程执行
**Then** Pagefind索引自动生成
**And** `package.json` 包含 `postbuild` 脚本运行pagefind
**And** `public/pagefind/pagefind.js` 文件存在

**Given** 访客点击搜索图标或按 `Cmd/Ctrl+K`
**When** 搜索Modal打开
**Then** Modal居中显示，带遮罩，宽度 ≤ 600px
**And** 焦点自动聚焦到输入框
**And** 显示热门标签作为搜索建议（FR18）

**Given** 访客输入搜索关键词
**When** 输入完成（debounce 300ms）
**Then** 显示加载指示器
**And** 返回匹配的文章列表（最多7条）
**And** 关键词在结果中高亮显示

**Given** 搜索无匹配结果
**When** 结果返回
**Then** 显示"未找到相关内容"提示（FR55）

**Given** 搜索结果显示
**When** 使用上/下箭头键
**Then** 可以选择不同结果
**When** 按下 `Enter` 或点击结果
**Then** 跳转到对应文章（FR66）

---

### Story 4.2: Structured Data (JSON-LD)

As a **网站主人**,
I want **页面有结构化数据标记**,
So that **搜索引擎能更好理解内容**.

**Acceptance Criteria:**

**Given** 任意文章页面
**When** 查看页面源码
**Then** 包含Article类型JSON-LD（FR36）
**And** 包含：headline, author, datePublished, description

**Given** 首页
**When** 查看页面源码
**Then** 包含Person类型的JSON-LD

---

### Epic 5: Subscription & Engagement
**用户成果**：访客可以订阅更新、建立长期联系

RSS订阅、邮件订阅、咨询表单、来源追踪、OG图片、社交分享。建立用户长期连接和转化漏斗。

**FRs covered**: FR19, FR22, FR23, FR24, FR25, FR29, FR38, FR64, FR65

**Stories**: 5

**架构说明**：邮件订阅和咨询表单使用Next.js API Routes（SSG + API Routes混合模式）

---

## Epic 5: Subscription & Engagement

建立用户长期连接和转化漏斗。

### Story 5.1: RSS Feed Generation

As a **访客**,
I want **通过RSS订阅博客更新**,
So that **我能在阅读器中获取新文章**.

**Acceptance Criteria:**

**Given** 网站构建完成
**When** 访问 `/rss.xml`
**Then** 返回有效的RSS 2.0 XML文件（FR19）
**And** 使用 `feed` npm包在构建时生成
**And** 包含最新20篇文章

**Given** 博客页面
**When** 查看页面head
**Then** 包含RSS autodiscovery link标签

---

### Story 5.2: Email Subscription

As a **访客**,
I want **订阅邮件更新**,
So that **我能收到新内容通知**.

**Acceptance Criteria:**

**Given** 访客在博客页面Footer
**When** 看到订阅区域
**Then** 显示邮箱输入框和订阅按钮（FR24）

**Given** 访客输入邮箱并点击订阅
**When** 邮箱格式有效
**Then** 表单提交到 `/api/subscribe`
**And** 返回200时显示"订阅成功"提示（FR25）
**And** 返回错误时显示"订阅失败，请稍后重试"

**技术说明**：`app/api/subscribe/route.ts` 调用Resend API

---

### Story 5.3: Consultation Form

As a **访客**,
I want **提交咨询请求**,
So that **我能与网站主人建立业务联系**.

**Acceptance Criteria:**

**Given** 访客在服务区域
**When** 点击"咨询"按钮
**Then** 显示咨询表单Modal（FR22）

**Given** 访客填写并提交表单
**When** 表单验证通过
**Then** 表单提交到 `/api/contact`
**And** 返回200时显示"提交成功"
**And** 请求包含来源渠道utm参数（FR23）

**技术说明**：`app/api/contact/route.ts` 调用Resend发邮件

---

### Story 5.4: OG Image Generation

As a **网站主人**,
I want **每篇文章有独特的社交分享图片**,
So that **分享时更有吸引力**.

**Acceptance Criteria:**

**Given** 任意文章页面
**When** 查看meta标签
**Then** og:image指向 `/api/og?title=...`（FR38）

**Given** 访问 `/api/og?title=文章标题`
**When** 请求处理
**Then** 返回1200x630px PNG图片
**And** 图片包含文章标题（居中显示）
**And** 图片包含网站Logo或作者名

**技术说明**：`app/api/og/route.ts` 使用@vercel/og Edge Runtime

---

### Story 5.5: Social Share Buttons

As a **访客**,
I want **分享文章到社交媒体**,
So that **我能推荐好内容给朋友**.

**Acceptance Criteria:**

**Given** 访客阅读文章
**When** 滚动到文章底部
**Then** 显示分享按钮组（FR29）
**And** 包含：复制链接、微博、Twitter/X

**Given** 访客点击"复制链接"
**When** 点击执行
**Then** 文章URL复制到剪贴板
**And** 显示"链接已复制"提示

---

### Epic 6: Trust & Credibility
**用户成果**：访客可以建立对网站主人的信任，推动转化

案例研究、服务流程、教程入口、推荐资源、相关文章、客户评价。增强转化说服力。

**FRs covered**: FR26, FR27, FR47, FR48, FR49

**Stories**: 2

**Note**: FR45（系列文章）移至Post-MVP

---

## Epic 6: Trust & Credibility

增强转化说服力。

### Story 6.1: Trust Building Content

As a **访客**,
I want **了解网站主人的成功案例和服务流程**,
So that **我能判断他是否值得信任**.

**Acceptance Criteria:**

**Given** 访客在首页服务区域
**When** 查看服务详情
**Then** 显示服务流程步骤（FR48）
**And** 包含：初步沟通 → 需求确认 → 方案交付

**Given** 访客想了解案例
**When** 浏览博客
**Then** 可以找到带"案例"标签的文章（FR47）

**Given** 访客查看评价区域
**When** 暂无客户评价
**Then** 显示"评价征集中"占位状态（FR49）

---

### Story 6.2: Recommended Resources

As a **访客**,
I want **查看推荐的工具和资源**,
So that **我能获取更多学习材料**.

**Acceptance Criteria:**

**Given** 访客在首页或导航
**When** 点击"推荐"入口
**Then** 显示推荐资源列表（FR26, FR27）
**And** 每个资源包含：名称、描述、链接
**And** 外部链接在新标签页打开

---

### Epic 7: Polish & Accessibility
**用户成果**：所有用户（包括残障用户）都能流畅使用网站

WCAG 2.1 AA合规、键盘导航、加载状态、错误处理、图片渐进加载。最终质量保障和无障碍优化。

**FRs covered**: FR33, FR53, FR54, FR63, FR67

**NFRs addressed**: NFR1-6, NFR12-16, NFR23

**Stories**: 4

---

## Epic 7: Polish & Accessibility

最终质量保障和无障碍优化。

### Story 7.1: Keyboard Navigation

As a **使用键盘的访客**,
I want **完全使用键盘导航网站**,
So that **我不依赖鼠标也能使用所有功能**.

**Acceptance Criteria:**

**Given** 访客使用Tab键导航
**When** 按下Tab键
**Then** 焦点按逻辑顺序移动（FR33）
**And** 所有交互元素可获得焦点
**And** 焦点样式清晰可见

**Given** 页面加载完成
**When** 访客首次Tab进入页面
**Then** 显示"跳到主要内容"Skip Link
**And** Skip Link默认隐藏，仅在获得焦点时显示

---

### Story 7.2: Loading States

As a **访客**,
I want **在操作进行时看到加载状态**,
So that **我知道系统正在响应**.

**Acceptance Criteria:**

**Given** 页面正在加载
**When** 导航到新页面
**Then** 顶部显示加载进度条（FR53）
**And** 使用nprogress实现

**Given** 按钮触发异步操作
**When** 操作进行中
**Then** 按钮显示内置Spinner

**Given** 图片正在加载
**When** 图片区域显示
**Then** 显示Skeleton占位符（FR63）

---

### Story 7.3: Error Handling & Feedback

As a **访客**,
I want **在操作失败时看到清晰的错误提示**,
So that **我知道发生了什么以及如何恢复**.

**Acceptance Criteria:**

**Given** 表单提交失败
**When** 服务器返回错误
**Then** 显示错误Toast（FR54）
**And** Toast显示在右下角，5秒后消失

**Given** 页面组件渲染失败
**When** ErrorBoundary捕获错误
**Then** 显示友好的错误提示

---

### Story 7.4: Quality & Accessibility Verification

As a **网站主人**,
I want **网站符合质量和无障碍标准**,
So that **所有用户都能获得良好体验**.

**Acceptance Criteria:**

**Accessibility (FR67):**
**Given** 任意页面
**When** 使用axe DevTools测试
**Then** 无critical或serious级别问题
**And** 使用语义化HTML

**Performance (NFR1-5):**
**Given** 任意页面
**When** 使用Lighthouse Mobile模式测试
**Then** Performance评分 ≥ 90
**And** LCP < 2.5s, CLS < 0.1

**Graceful Degradation (NFR23):**
**Given** JavaScript禁用
**When** 访问网站
**Then** 文章内容可阅读，导航可点击


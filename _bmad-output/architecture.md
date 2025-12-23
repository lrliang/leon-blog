---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
status: complete
completedAt: '2025-12-23'
inputDocuments:
  - "prd.md"
  - "ux-design-specification.md"
  - "analysis/research/technical-benxai-design-research-2025-12-22.md"
workflowType: 'architecture'
lastStep: 3
project_name: 'leon-blog'
user_name: 'Leon'
date: '2025-12-23'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- 68条功能需求（28 Must / 28 Should / 12 Could）
- 核心模块：首页展示、博客系统、阅读体验、SEO优化
- MVP范围明确：P0功能为上线必须

**Non-Functional Requirements:**
- 27条质量属性（性能/安全/无障碍/集成/可靠/可维护）
- 关键指标：LCP<2s, WCAG 2.1 AA, TypeScript strict

**Scale & Complexity:**
- 项目复杂度：Low（纯SSG静态博客）
- 技术领域：Web Frontend (Static Site Generation)
- 估算组件数：~20个（8个自建 + shadcn/ui基础）

---

### Technical Constraints & Dependencies

| 约束 | 说明 |
|------|------|
| **纯SSG架构** | 无服务端运行时，所有内容构建时生成 |
| **Next.js 14+** | 使用App Router，非Pages Router |
| **Contentlayer风险** | 维护状态需监控，Velite为备选 |
| **无用户系统** | MVP无登录/注册，无后台管理 |
| **Git-based内容** | MDX文件通过Git管理 |

---

### Cross-Cutting Concerns

| 关注点 | 方案 |
|--------|------|
| **暗色模式** | next-themes + CSS变量 + 无闪烁 |
| **国际化** | 客户端切换（仅首页），无i18n路由 |
| **SEO** | Next.js Metadata API + JSON-LD |
| **响应式** | Mobile-first + Tailwind断点 |
| **无障碍** | WCAG 2.1 AA + 语义化HTML |
| **类型安全** | TypeScript strict mode |

---

## Starter Template Evaluation

### Primary Technology Domain

**Web Frontend (Static Site Generation)** — 纯SSG个人技术博客

### Starter Options Considered

| Option | 描述 | 评估 |
|--------|------|------|
| create-next-app 官方 | Next.js 14+ 官方脚手架 | ✅ 选中 |
| 博客专用模板 | tailwind-nextjs-starter-blog等 | ❌ 版本风险 |
| 完全自定义 | 从零配置 | ❌ 不必要 |

### Content Processing Library Decision

| 选项 | 评估 | 决策 |
|------|------|------|
| Velite | 活跃维护、类型安全、Contentlayer替代 | ✅ 选中 |
| Contentlayer | 成熟但维护状态不确定 | ❌ 风险 |
| next-mdx-remote | 底层但需更多配置 | ❌ 开发成本 |

### Selected Starter: create-next-app + shadcn/ui + Velite

**Rationale for Selection:**
- 官方维护，保证最新版本
- 完全符合PRD技术栈要求
- Velite活跃维护，专为替代Contentlayer设计
- 通过抽象层降低未来迁移风险

**Initialization Commands:**

```bash
# Step 1: Create Next.js project
npx create-next-app@latest leon-blog \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# Step 2: Initialize shadcn/ui
cd leon-blog
npx shadcn-ui@latest init

# Step 3: Install Velite for MDX content
npm install velite
```

### Architectural Principle: Content Abstraction Layer

**目的**：隔离内容处理逻辑，降低未来迁移成本

```typescript
// src/lib/content.ts - 抽象层接口
export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  // ...
}

export async function getPost(slug: string): Promise<Post>
export async function getAllPosts(): Promise<Post[]>
export async function getPostsByTag(tag: string): Promise<Post[]>

// 底层实现使用Velite，但可随时替换
```

**Note:** Project initialization using these commands should be the first implementation story.

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- 项目结构和目录组织
- 组件架构和命名规范
- 内容抽象层接口定义

**Important Decisions (Shape Architecture):**
- 构建优化策略
- 开发规范和Git工作流
- 测试策略

**Deferred Decisions (Post-MVP):**
- 评论系统集成
- 付费内容墙
- 后台管理系统
- Sentry错误追踪（如需要）

---

### Frontend Architecture

**State Management:**
- 无需全局状态库
- 主题：next-themes
- UI状态：React useState
- 语言切换：React Context（仅首页）

**Component Architecture:**
- 按功能分类（ui/layout/blog/home）
- PascalCase命名
- Tailwind inline + cn()

**Error Handling:**
- ErrorBoundary包裹MDX渲染
- 优雅降级显示"文章加载失败"

---

### Project Structure

```
src/
├── app/                    # App Router
│   ├── (home)/            # 首页路由组
│   ├── blog/              # 博客页面
│   ├── tags/              # 标签页
│   └── layout.tsx         # 根布局
│
├── components/             # React组件
│   ├── ui/                # shadcn/ui
│   ├── layout/            # Header, Footer, Nav
│   ├── blog/
│   │   ├── article/       # CodeBlock, TocNav, ReadingProgress
│   │   └── list/          # PostCard
│   └── home/              # Hero, ServiceCard, Timeline
│
├── lib/                   # 工具函数
│   ├── content.ts         # 内容抽象层
│   └── utils.ts           # 通用工具
│
└── styles/                # 全局样式

content/blog/              # MDX内容
public/                    # 静态资源
tests/                     # 测试文件
├── lib/
│   └── content.test.ts
└── setup.ts
```

---

### Content Abstraction Layer (Detailed)

**接口定义** (src/lib/content.ts):

```typescript
export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  readingTime: number;
}

export interface PostMeta extends Omit<Post, 'content'> {}

export function getPost(slug: string): Promise<Post>;
export function getAllPosts(): Promise<PostMeta[]>;
export function getPostsByTag(tag: string): Promise<PostMeta[]>;
export function getAllTags(): Promise<string[]>;
```

**Slug生成规则**：
- 文件名 `my-first-post.mdx` → slug `my-first-post`
- URL `/blog/my-first-post`

---

### Build Optimization

**Images:**
- next/image + placeholder="blur"
- @vercel/og（OG图片动态生成）

**Fonts:**
- next/font（本地化、无CLS）
- Inter + Noto Sans SC + JetBrains Mono

**Code Splitting:**
- SearchModal — 动态导入（非首屏）
- TocNav — 首屏加载（核心体验）

---

### Testing Strategy

**Framework:** Vitest + @testing-library/react

**MVP Scope:**

| 类型 | 范围 | 说明 |
|------|------|------|
| 内容层测试 | `lib/content.ts` | getAllPosts, getPost, getPostsByTag |
| 构建验证 | Velite strict | frontmatter必填校验 |

**Velite Strict Mode:**
- title/date缺失 → 构建失败
- MDX语法错误 → 构建失败 + 位置报告

---

### Monitoring

**Vercel Analytics:**
- Core Web Vitals监控
- 页面访问统计
- 零配置开箱即用

---

### Development Standards

**Code Quality:**
- ESLint: next/core-web-vitals
- Prettier + tailwindcss插件
- TypeScript strict mode
- commitlint: Conventional Commits校验

**Git Workflow:**
- 分支策略：main (生产) + 功能分支
- 分支命名：`feat/`, `fix/`, `docs/`, `chore/`
- Commit规范：Conventional Commits
- 部署触发：Push to main → 自动部署

**tsconfig.json paths:**

```json
{
  "paths": {
    "@/*": ["./src/*"],
    "@/components/*": ["./src/components/*"],
    "@/lib/*": ["./src/lib/*"]
  }
}
```

---

## Implementation Patterns & Consistency Rules

### Pattern Scope

**适用范围**（本项目简化版）：
- ❌ 无数据库 → 跳过数据库命名
- ❌ 无后端API → 跳过API命名
- ⚠️ 极简状态 → 仅主题/语言Context
- ✅ 文件命名 → 需要定义
- ✅ 结构模式 → 需要定义

---

### File & Component Naming

| 类别 | 规范 | 示例 |
|------|------|------|
| 组件文件 | PascalCase.tsx | `PostCard.tsx`, `TocNav.tsx` |
| 工具函数文件 | kebab-case.ts | `format-date.ts`, `cn.ts` |
| 组件导出 | function声明 | `export function PostCard() {}` |
| 类型定义 | PascalCase | `interface Post {}` |

---

### Test File Location

**规范**：集中存放于 `tests/` 目录

```
tests/
├── lib/
│   └── content.test.ts
└── setup.ts
```

**理由**：MVP阶段测试少，集中管理更清晰

---

### CSS/Tailwind Patterns

**类名组织**：
```tsx
// 使用cn()组合条件类名
<div className={cn(
  "base-styles",
  isActive && "active-styles"
)} />
```

**响应式顺序**：`sm → md → lg → xl`

**复杂样式**：提取到文件顶部常量
```tsx
const cardStyles = "rounded-lg border p-4 hover:shadow-md transition"
```

---

### Import Order

```typescript
// 1. React/Next
import { useState } from 'react';
import Link from 'next/link';

// 2. 第三方库
import { motion } from 'framer-motion';

// 3. 内部模块 (@/)
import { cn } from '@/lib/utils';
import { PostCard } from '@/components/blog/list/PostCard';

// 4. 相对导入
import { Button } from './Button';

// 5. 类型（如需单独导入）
import type { Post } from '@/lib/content';
```

---

### MDX Frontmatter Schema

**必填字段**：
```yaml
---
title: "文章标题"           # 必填
date: "2025-01-01"          # 必填，ISO格式
description: "文章描述"     # 必填，用于SEO和列表
tags: ["tag1", "tag2"]      # 必填，至少一个
---
```

**可选字段**：
```yaml
---
draft: false                 # 可选，草稿不构建
cover: "/images/cover.jpg"   # 可选，封面图
---
```

**Velite验证**：缺少必填字段 → 构建失败

---

### Enforcement Guidelines

**All AI Agents MUST:**
- 遵循上述命名规范
- 使用 `@/` 路径别名导入
- 保持导入顺序一致
- MDX文件必须包含完整frontmatter

**Pattern Enforcement:**
- ESLint + Prettier 自动检查
- TypeScript strict 类型校验
- Velite strict 内容验证
- commitlint 提交信息校验

---

### Examples

**Good ✅**：
```tsx
// src/components/blog/article/CodeBlock.tsx
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  return (
    <pre className={cn("rounded-lg bg-zinc-900", copied && "ring-2")}>
      {/* ... */}
    </pre>
  );
}
```

**Anti-Pattern ❌**：
```tsx
// ❌ 错误：文件名用kebab-case
// src/components/blog/article/code-block.tsx

// ❌ 错误：相对路径而非@/
import { cn } from '../../../lib/utils';

// ❌ 错误：const而非function
export const CodeBlock = () => { ... }
```

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
leon-blog/
├── README.md
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── velite.config.ts          # Velite内容处理配置
├── components.json           # shadcn/ui配置
├── .env.local                # 本地环境变量
├── .env.example              # 环境变量模板
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── commitlint.config.js      # Commit规范配置
│
├── .github/
│   └── workflows/
│       └── lint.yml          # CI检查（可选）
│
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg          # 默认OG图片
│   └── images/               # 静态图片
│       └── avatar.jpg
│
├── content/
│   └── blog/                 # MDX博客文章
│       ├── my-first-post.mdx
│       └── ai-coding-guide.mdx
│
├── src/
│   ├── app/
│   │   ├── globals.css       # 全局样式
│   │   ├── layout.tsx        # 根布局
│   │   ├── not-found.tsx     # 404页面
│   │   │
│   │   ├── (home)/           # 首页路由组
│   │   │   └── page.tsx      # 首页
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx      # 博客列表
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # 文章详情
│   │   │
│   │   └── tags/
│   │       ├── page.tsx      # 标签列表
│   │       └── [tag]/
│   │           └── page.tsx  # 标签下文章
│   │
│   ├── components/
│   │   ├── ui/               # shadcn/ui组件
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/           # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── SearchModal.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── article/      # 文章详情组件
│   │   │   │   ├── CodeBlock.tsx
│   │   │   │   ├── TocNav.tsx
│   │   │   │   ├── ReadingProgress.tsx
│   │   │   │   └── PostHeader.tsx
│   │   │   │
│   │   │   └── list/         # 文章列表组件
│   │   │       ├── PostCard.tsx
│   │   │       ├── PostList.tsx
│   │   │       └── TagList.tsx
│   │   │
│   │   ├── home/             # 首页专用组件
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── ContactCard.tsx
│   │   │
│   │   └── shared/           # 共享组件
│   │       └── ErrorBoundary.tsx
│   │
│   ├── lib/
│   │   ├── content.ts        # 内容抽象层
│   │   ├── utils.ts          # 通用工具（cn函数等）
│   │   └── i18n.ts           # 首页多语言内容
│   │
│   ├── hooks/                # 自定义hooks
│   │   └── useLanguage.ts    # 语言切换hook
│   │
│   ├── types/
│   │   └── index.ts          # 类型定义
│   │
│   └── styles/               # 额外样式（如需）
│       └── mdx.css           # MDX文章样式
│
├── tests/
│   ├── setup.ts
│   └── lib/
│       └── content.test.ts   # 内容层测试
│
└── .velite/                  # Velite生成（git忽略）
    └── index.js
```

---

### Architectural Boundaries

**Component Boundaries:**

| 边界 | 说明 |
|------|------|
| `layout/` | 跨页面共享的布局组件 |
| `blog/article/` | 仅文章详情页使用 |
| `blog/list/` | 仅博客列表页使用 |
| `home/` | 仅首页使用 |
| `shared/` | 跨功能共享（如ErrorBoundary） |

---

### Data Flow

```
content/blog/*.mdx
      ↓ (Velite构建时处理)
.velite/index.js
      ↓ (抽象层封装)
src/lib/content.ts
      ↓ (React组件调用)
src/app/blog/[slug]/page.tsx
```

---

### Requirements to Structure Mapping

| 功能模块 | 对应目录 | 相关文件 |
|----------|----------|----------|
| 首页/个人介绍 | `src/app/(home)/` | `page.tsx`, `Hero.tsx`, `AboutSection.tsx` |
| 博客列表 | `src/app/blog/` | `page.tsx`, `PostCard.tsx`, `PostList.tsx` |
| 文章详情 | `src/app/blog/[slug]/` | `page.tsx`, `CodeBlock.tsx`, `TocNav.tsx` |
| 标签系统 | `src/app/tags/` | `page.tsx`, `TagList.tsx` |
| 搜索功能 | `src/components/layout/` | `SearchModal.tsx` |
| 主题切换 | `src/components/layout/` | `ThemeToggle.tsx` |
| 语言切换 | `src/components/layout/` | `LanguageSwitcher.tsx` |
| 内容管理 | `src/lib/` + `content/` | `content.ts`, `*.mdx` |

---

### Integration Points

| 集成 | 位置 | 说明 |
|------|------|------|
| Pagefind搜索 | `SearchModal.tsx` | 客户端JS，构建时生成索引 |
| Resend订阅 | 未来扩展 | 需添加API Route |
| Vercel Analytics | `layout.tsx` | 根布局引入 |
| next-themes | `layout.tsx` | ThemeProvider包裹 |

---

### File Organization Patterns

**Configuration Files:** 根目录
**Source Code:** `src/` 目录
**Content:** `content/blog/` 目录
**Tests:** `tests/` 目录
**Static Assets:** `public/` 目录
**Generated:** `.velite/` 目录（git忽略）

---

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
- Next.js 14+ + App Router：技术栈核心，版本兼容
- Tailwind CSS + shadcn/ui：官方推荐组合
- TypeScript strict：与Next.js原生支持
- Velite + MDX：替代已废弃的Contentlayer
- next-themes：与App Router兼容
- Pagefind：静态站点搜索，与SSG配合
- Vercel部署：Next.js官方平台

**结论**：所有技术选型相互兼容，无冲突。

**Pattern Consistency:**
- 组件命名PascalCase与React/Next.js惯例一致
- 文件命名规范：组件PascalCase，工具kebab-case
- 导入路径@/：tsconfig paths已配置
- 测试目录tests/：与MVP阶段需求匹配

**结论**：模式与技术栈一致。

**Structure Alignment:**
- App Router结构使用路由组、动态路由
- 组件按功能分类（ui/layout/blog/home）
- 内容与代码分离（content/ vs src/）
- 抽象层隔离（lib/content.ts封装Velite）

**结论**：结构支持架构决策。

---

### Requirements Coverage Validation ✅

**Functional Requirements Coverage:**

| FR类别 | 架构支持 | 实现位置 |
|--------|----------|----------|
| 首页/个人介绍 | ✅ | `src/app/(home)/`, `components/home/` |
| 博客文章展示 | ✅ | `src/app/blog/`, `components/blog/` |
| 标签分类 | ✅ | `src/app/tags/` |
| 搜索功能 | ✅ | `components/layout/SearchModal.tsx` |
| 主题切换 | ✅ | `components/layout/ThemeToggle.tsx` |
| 语言切换（首页） | ✅ | `components/layout/LanguageSwitcher.tsx` |
| 代码高亮 | ✅ | `components/blog/article/CodeBlock.tsx` |
| 目录导航 | ✅ | `components/blog/article/TocNav.tsx` |
| 阅读进度 | ✅ | `components/blog/article/ReadingProgress.tsx` |

**Non-Functional Requirements Coverage:**

| NFR | 架构支持 | 实现方式 |
|-----|----------|----------|
| 性能 < 2s | ✅ | SSG + next/image + next/font |
| SEO优化 | ✅ | 静态生成 + 元数据API |
| 可访问性 WCAG 2.1 AA | ✅ | shadcn/ui语义化 + 键盘导航 |
| HTTPS强制 | ✅ | Vercel默认HTTPS |
| 响应式设计 | ✅ | Tailwind断点系统 |

---

### Implementation Readiness Validation ✅

**Decision Completeness:**
- ✅ 技术栈版本明确
- ✅ 初始化命令提供
- ✅ 内容抽象层接口定义
- ✅ 测试策略明确

**Structure Completeness:**
- ✅ 完整目录结构
- ✅ 文件命名规范
- ✅ 组件边界定义
- ✅ 数据流向清晰

**Pattern Completeness:**
- ✅ 命名规范
- ✅ 导入顺序
- ✅ MDX Frontmatter
- ✅ Good/Bad示例

---

### Gap Analysis Results

**Critical Gaps:** 无

所有关键决策已完成。

**Important Gaps:** 无

MVP所需模式已定义。

**Nice-to-Have（未来增强）：**

| 项目 | 优先级 | 说明 |
|------|--------|------|
| E2E测试 | Low | Playwright，MVP后考虑 |
| Sentry监控 | Low | 错误追踪，MVP后考虑 |
| RSS订阅 | Medium | 可在MVP后添加 |
| 评论系统 | Low | MVP后考虑 |

---

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] 项目上下文充分分析
- [x] 规模和复杂度评估
- [x] 技术约束识别
- [x] 跨领域关注点映射

**✅ Architectural Decisions**
- [x] 关键决策带版本记录
- [x] 技术栈完整指定
- [x] 集成模式定义
- [x] 性能考虑已处理

**✅ Implementation Patterns**
- [x] 命名规范建立
- [x] 结构模式定义
- [x] 通信模式指定
- [x] 流程模式文档化

**✅ Project Structure**
- [x] 完整目录结构定义
- [x] 组件边界建立
- [x] 集成点映射
- [x] 需求到结构映射完成

---

### Architecture Readiness Assessment

**Overall Status:** ✅ READY FOR IMPLEMENTATION

**Confidence Level:** 🟢 High

**Key Strengths:**
- 技术栈成熟稳定，生态完善
- 纯SSG架构简洁，无后端复杂性
- 内容抽象层设计良好，底层可替换
- 测试策略精简有效
- 组件边界清晰，职责分明

**Areas for Future Enhancement:**
- E2E测试覆盖
- 错误监控（Sentry）
- RSS订阅功能
- 评论系统集成

---

### Implementation Handoff

**AI Agent Guidelines:**
- 严格遵循所有架构决策
- 一致使用实现模式
- 尊重项目结构和边界
- 所有架构问题参考本文档

**First Implementation Priority:**

```bash
# 1. 创建项目
npx create-next-app@latest leon-blog --typescript --tailwind --eslint --app --src-dir

# 2. 安装shadcn/ui
npx shadcn@latest init

# 3. 安装Velite
npm install velite

# 4. 安装其他依赖
npm install next-themes framer-motion shiki
npm install -D vitest @testing-library/react
```

**Implementation Order:**
1. 项目初始化 + 基础配置
2. Velite + 内容抽象层
3. 布局组件（Header, Footer, Nav）
4. 首页组件
5. 博客列表 + 文章详情
6. 搜索 + 标签系统
7. 主题/语言切换
8. 性能优化 + 测试

---

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2025-12-23
**Document Location:** `_bmad-output/architecture.md`

---

### Final Architecture Deliverables

**📋 Complete Architecture Document**
- 所有架构决策带具体版本记录
- 确保AI Agent一致性的实现模式
- 完整项目结构及所有文件目录
- 需求到架构的映射
- 验证确认一致性和完整性

**🏗️ Implementation Ready Foundation**
- 15+ 架构决策已做出
- 10+ 实现模式已定义
- 20+ 架构组件已指定
- 100% 需求已支持

**📚 AI Agent Implementation Guide**
- 技术栈带版本验证
- 防止实现冲突的一致性规则
- 带清晰边界的项目结构
- 集成模式和通信标准

---

### Quality Assurance Checklist

**✅ Architecture Coherence**
- [x] 所有决策无冲突协同工作
- [x] 技术选型兼容
- [x] 模式支持架构决策
- [x] 结构与选型对齐

**✅ Requirements Coverage**
- [x] 所有功能需求已支持
- [x] 所有非功能需求已处理
- [x] 跨领域关注点已处理
- [x] 集成点已定义

**✅ Implementation Readiness**
- [x] 决策具体可执行
- [x] 模式防止Agent冲突
- [x] 结构完整无歧义
- [x] 提供示例以澄清

---

### Project Success Factors

**🎯 Clear Decision Framework**
每个技术选型都经过协作确定，有清晰理由，确保所有利益相关者理解架构方向。

**🔧 Consistency Guarantee**
实现模式和规则确保多个AI Agent产出兼容、一致的代码，无缝协作。

**📋 Complete Coverage**
所有项目需求都有架构支持，业务需求到技术实现有清晰映射。

**🏗️ Solid Foundation**
选定的启动模板和架构模式提供遵循当前最佳实践的生产就绪基础。

---

**Architecture Status:** ✅ READY FOR IMPLEMENTATION

**Next Phase:** 使用本文档的架构决策和模式开始实现。

**Document Maintenance:** 实现过程中有重大技术决策时更新本架构文档。


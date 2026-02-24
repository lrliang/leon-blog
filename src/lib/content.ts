/**
 * Content Abstraction Layer
 *
 * 抽象层接口，隔离Velite实现细节，降低未来迁移成本。
 * 所有组件通过此模块获取内容，不直接依赖Velite。
 */

import { posts } from '#velite';

// ============================================
// Type Definitions
// ============================================

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tldr: string[];
  tags: string[];
  featured: boolean;
  published: boolean;
  body: string;
}

export interface PostMeta extends Omit<Post, 'body'> {}

// ============================================
// Helper Functions
// ============================================

/**
 * 计算阅读时间（分钟）
 * 假设中文阅读速度 400字/分钟，英文 200词/分钟
 */
function calculateReadingTime(content: string): number {
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = content
    .replace(/[\u4e00-\u9fa5]/g, '')
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = chineseChars / 400 + englishWords / 200;
  return Math.max(1, Math.ceil(minutes));
}

/**
 * 转换Velite Post到应用Post类型
 */
function transformPost(post: (typeof posts)[number]): Post {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    tldr: post.tldr,
    tags: post.tags,
    featured: post.featured,
    published: post.published,
    body: post.body,
  };
}

/**
 * 转换为PostMeta（不含body）
 */
function transformPostMeta(post: (typeof posts)[number]): PostMeta {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    description: post.description,
    tldr: post.tldr,
    tags: post.tags,
    featured: post.featured,
    published: post.published,
  };
}

// ============================================
// Public API
// ============================================

/**
 * 获取单篇文章
 */
export function getPost(slug: string): Post | undefined {
  const post = posts.find((p) => p.slug === slug && p.published);
  return post ? transformPost(post) : undefined;
}

/**
 * 获取所有已发布文章（按日期倒序）
 */
export function getAllPosts(): PostMeta[] {
  return posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(transformPostMeta);
}

/**
 * 获取精选文章
 */
export function getFeaturedPosts(): PostMeta[] {
  return posts
    .filter((p) => p.published && p.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(transformPostMeta);
}

/**
 * 按标签获取文章
 */
export function getPostsByTag(tag: string): PostMeta[] {
  return posts
    .filter((p) => p.published && p.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(transformPostMeta);
}

/**
 * 获取所有标签及其文章数量
 */
export function getAllTags(): { tag: string; count: number }[] {
  const tagCount = new Map<string, number>();

  posts
    .filter((p) => p.published)
    .forEach((post) => {
      post.tags.forEach((tag) => {
        tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
      });
    });

  return Array.from(tagCount.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 获取相关文章（至少有1个共同标签）
 */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const currentPost = posts.find((p) => p.slug === slug);
  if (!currentPost) return [];

  const currentTags = new Set(currentPost.tags);

  return posts
    .filter(
      (p) =>
        p.published && p.slug !== slug && p.tags.some((t) => currentTags.has(t))
    )
    .sort((a, b) => {
      // 按共同标签数量排序
      const aCommon = a.tags.filter((t) => currentTags.has(t)).length;
      const bCommon = b.tags.filter((t) => currentTags.has(t)).length;
      return bCommon - aCommon;
    })
    .slice(0, limit)
    .map(transformPostMeta);
}

/**
 * 获取文章阅读时间
 */
export function getReadingTime(slug: string): number {
  const post = posts.find((p) => p.slug === slug);
  return post ? calculateReadingTime(post.body) : 0;
}


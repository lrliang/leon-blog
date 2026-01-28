import { Feed } from 'feed';
import { getAllPosts } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://leon.blog';

export async function GET() {
  const posts = getAllPosts().slice(0, 20);

  const feed = new Feed({
    title: 'Leon Blog',
    description: '资深全栈工程师 · AI 原生实践者 · 用 AI 推动技术与知识平权',
    id: BASE_URL,
    link: BASE_URL,
    language: 'zh-CN',
    favicon: `${BASE_URL}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Leon. All rights reserved.`,
    author: {
      name: 'Leon',
      link: BASE_URL,
    },
    feedLinks: {
      rss2: `${BASE_URL}/rss.xml`,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${BASE_URL}/blog/${post.slug}`,
      link: `${BASE_URL}/blog/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [{ name: 'Leon', link: BASE_URL }],
      category: post.tags.map((tag) => ({ name: tag })),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}


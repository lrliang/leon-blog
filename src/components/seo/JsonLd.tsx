import type { Post } from '@/lib/content';

interface ArticleJsonLdProps {
  post: Post;
  url: string;
}

export function ArticleJsonLd({ post, url }: ArticleJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Leon',
      url: 'https://leon.blog',
    },
    publisher: {
      '@type': 'Person',
      name: 'Leon',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Leon',
    url: 'https://leon.blog',
    jobTitle: '资深全栈工程师',
    description:
      '资深全栈工程师，AI 原生实践者，致力于用 AI 推动技术与知识平权',
    sameAs: [
      'https://github.com/leon',
      'https://twitter.com/leon',
    ],
    knowsAbout: ['AI', '全栈开发', '企业架构', '数字化转型'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Leon Blog',
    url: 'https://leon.blog',
    description:
      '资深全栈工程师 · AI 原生实践者 · 用 AI 推动技术与知识平权',
    author: {
      '@type': 'Person',
      name: 'Leon',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://leon.blog/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}


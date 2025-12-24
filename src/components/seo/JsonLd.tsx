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
    jobTitle: '独立开发者',
    description:
      'All in AI 出海 - 从产品经理转全栈，边做边学，努力成为超级个体',
    sameAs: [
      'https://github.com/leon',
      'https://twitter.com/leon',
    ],
    knowsAbout: ['AI', '产品管理', '全栈开发', '出海'],
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
      'All in AI 出海 - 从产品经理转全栈，边做边学，努力成为超级个体',
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


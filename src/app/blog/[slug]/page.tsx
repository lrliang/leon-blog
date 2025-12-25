import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, getAllPosts, getRelatedPosts, getReadingTime } from '@/lib/content';
import { PostHeader } from '@/components/blog/article/PostHeader';
import { TocNav } from '@/components/blog/article/TocNav';
import { ReadingProgress } from '@/components/blog/article/ReadingProgress';
import { AuthorCard } from '@/components/blog/article/AuthorCard';
import { RelatedPosts } from '@/components/blog/article/RelatedPosts';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { Callout } from '@/components/blog/article/Callout';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { ShareButtons } from '@/components/blog/article/ShareButtons';

type Props = {
  params: Promise<{ slug: string }>;
};

// 生成静态页面路径
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://leon.blog';

// 生成页面元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: '文章未找到' };
  }

  const ogImageUrl = `${BASE_URL}/api/og?title=${encodeURIComponent(post.title)}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  };
}

// 从 body 提取标题用于 TOC
function extractHeadings(content: string) {
  const headingRegex = /<h([23])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[23]>/g;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3],
    });
  }

  return headings;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(slug);
  const relatedPosts = getRelatedPosts(slug, 3);
  const headings = extractHeadings(post.body);

  return (
    <>
      <ArticleJsonLd post={post} url={`${BASE_URL}/blog/${slug}`} />
      <ReadingProgress />

      <article className="container mx-auto px-4 py-12 md:px-8">
        <div className="mx-auto max-w-4xl lg:grid lg:max-w-6xl lg:grid-cols-[1fr_200px] lg:gap-12">
          {/* Main Content */}
          <div className="min-w-0">
            <PostHeader post={post} readingTime={readingTime} />

            {/* TL;DR */}
            <Callout type="info" title="TL;DR">
              {post.description}
            </Callout>

            {/* Article Body */}
            <ErrorBoundary>
              <div
                className="prose prose-neutral dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </ErrorBoundary>

            {/* Share Buttons */}
            <ShareButtons
              title={post.title}
              url={`${BASE_URL}/blog/${slug}`}
            />

            {/* Author Card */}
            <AuthorCard />

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />
          </div>

          {/* Sidebar - TOC */}
          <aside className="hidden lg:block">
            <TocNav headings={headings} />
          </aside>
        </div>
      </article>
    </>
  );
}

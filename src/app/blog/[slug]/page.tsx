import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, getAllPosts, getRelatedPosts, getReadingTime } from '@/lib/content';
import { PostHeader } from '@/components/blog/article/PostHeader';
import { TocNav } from '@/components/blog/article/TocNav';
import { ReadingProgress } from '@/components/blog/article/ReadingProgress';
import { AuthorCard } from '@/components/blog/article/AuthorCard';
import { RelatedPosts } from '@/components/blog/article/RelatedPosts';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { ShareButtons } from '@/components/blog/article/ShareButtons';
import { MDXContent } from '@/components/blog/article/MDXContent';

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

// 从编译后的 MDX 代码提取标题用于 TOC
// Velite 编译后的 MDX 格式类似: e(i.h2,{children:"标题内容"})
function extractHeadings(code: string) {
  const headings: { id: string; text: string; level: number }[] = [];

  // 匹配 h2 和 h3 标题: e(i.h2,{children:"..."}) 或 l(e.h2,{children:"..."})
  const headingRegex = /\.h([23]),\{children:"([^"]+)"\}/g;
  let match;

  while ((match = headingRegex.exec(code)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2];
    const id = text.toLowerCase().replace(/\s+/g, '-');
    headings.push({ level, text, id });
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

            {/* Article Body */}
            <ErrorBoundary>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXContent code={post.body} />
              </div>
            </ErrorBoundary>

            {/* Share Buttons */}
            <ShareButtons
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
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

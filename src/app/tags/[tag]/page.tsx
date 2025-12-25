import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostsByTag, getAllTags } from '@/lib/content';
import { PostList } from '@/components/blog/list/PostList';
import { Button } from '@/components/ui/button';

type Props = {
  params: Promise<{ tag: string }>;
};

// 生成静态页面路径
export function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(({ tag }) => ({
    tag: tag,
  }));
}

// 生成页面元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  return {
    title: `${decodedTag} - 标签`,
    description: `标签 "${decodedTag}" 下的所有文章`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  return (
    <div className="container mx-auto px-4 py-12 md:px-8">
      {/* Back Link */}
      <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
        <Link href="/tags">
          <ArrowLeft className="mr-1 h-4 w-4" />
          所有标签
        </Link>
      </Button>

      <h1 className="mb-8 text-3xl font-bold tracking-tight">
        标签: {decodedTag}
      </h1>

      <PostList
        posts={posts}
        emptyMessage={`标签 "${decodedTag}" 下暂无文章`}
      />
    </div>
  );
}

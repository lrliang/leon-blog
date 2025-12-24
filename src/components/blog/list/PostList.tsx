import { PostCard } from '@/components/blog/list/PostCard';
import type { PostMeta } from '@/lib/content';
import { getReadingTime } from '@/lib/content';

interface PostListProps {
  posts: PostMeta[];
  emptyMessage?: string;
}

export function PostList({
  posts,
  emptyMessage = '暂无文章，敬请期待',
}: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          readingTime={getReadingTime(post.slug)}
        />
      ))}
    </div>
  );
}


import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PostMeta } from '@/lib/content';

interface RelatedPostsProps {
  posts: PostMeta[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border pt-8">
      <h2 className="mb-6 text-xl font-semibold">相关文章</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
          >
            <h3 className="mb-2 font-medium group-hover:text-primary">
              {post.title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {post.description}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm text-primary">
              阅读更多
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}


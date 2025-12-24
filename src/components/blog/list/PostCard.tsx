import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import type { PostMeta } from '@/lib/content';

interface PostCardProps {
  post: PostMeta;
  readingTime?: number;
}

export function PostCard({ post, readingTime }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
      {/* Featured Badge */}
      {post.featured && (
        <span className="absolute -top-2 right-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          精选
        </span>
      )}

      {/* Title */}
      <h2 className="mb-2 text-xl font-semibold">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 hover:text-primary"
        >
          {post.title}
        </Link>
      </h2>

      {/* Description */}
      <p className="mb-4 line-clamp-2 text-muted-foreground">
        {post.description}
      </p>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formattedDate}
        </span>
        {readingTime && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readingTime} 分钟阅读
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="relative z-10 rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
}


import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Post } from '@/lib/content';

interface PostHeaderProps {
  post: Post;
  readingTime: number;
}

export function PostHeader({ post, readingTime }: PostHeaderProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="mb-8">
      {/* Back Link */}
      <div data-capture-exclude="">
        <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
          <Link href="/blog">
            <ArrowLeft className="mr-1 h-4 w-4" />
            返回博客
          </Link>
        </Button>
      </div>

      {/* Title */}
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {readingTime} 分钟阅读
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            {tag}
          </Link>
        ))}
      </div>
    </header>
  );
}


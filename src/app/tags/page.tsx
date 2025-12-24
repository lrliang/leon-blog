import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTags } from '@/lib/content';

export const metadata: Metadata = {
  title: '标签',
  description: '按标签浏览文章',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="container px-4 py-12 md:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">标签</h1>

      {tags.length === 0 ? (
        <p className="text-muted-foreground">暂无标签</p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:bg-card/80"
            >
              <span>{tag}</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {count}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


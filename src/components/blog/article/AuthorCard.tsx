import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AuthorCard() {
  return (
    <div className="mt-12 rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        {/* Avatar Placeholder */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
          L
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-semibold">Leon</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            资深全栈工程师 · AI 原生实践者 · 技术与知识平权倡导者
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">了解更多</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">联系我</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


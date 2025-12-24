'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * 页面错误处理
 * 处理子路由的错误
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-10 w-10 text-destructive" />
      </div>

      <h1 className="mb-2 text-2xl font-bold">页面出现错误</h1>

      <p className="mb-8 max-w-md text-muted-foreground">
        抱歉，页面加载时出现了问题。请尝试刷新页面或返回首页。
      </p>

      <div className="flex gap-4">
        <Button onClick={reset} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          重试
        </Button>

        <Button asChild>
          <a href="/" className="gap-2">
            <Home className="h-4 w-4" />
            返回首页
          </a>
        </Button>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <details className="mx-auto mt-8 max-w-2xl text-left">
          <summary className="cursor-pointer text-sm text-muted-foreground">
            查看错误详情
          </summary>
          <pre className="mt-2 overflow-auto rounded-lg bg-muted p-4 text-xs">
            {error.message}
            {'\n\n'}
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  );
}


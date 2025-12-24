'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

/**
 * 全局错误页面
 * 处理 root layout 的错误
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 可以在这里记录错误到日志服务
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>

          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
            网站出现错误
          </h1>

          <p className="mb-8 max-w-md text-gray-600 dark:text-gray-400">
            抱歉，网站加载时出现了问题。请尝试刷新页面或返回首页。
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <RefreshCw className="h-4 w-4" />
              重试
            </button>

            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <Home className="h-4 w-4" />
              返回首页
            </a>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mx-auto mt-8 max-w-2xl text-left">
              <summary className="cursor-pointer text-sm text-gray-500">
                查看错误详情
              </summary>
              <pre className="mt-2 overflow-auto rounded-lg bg-gray-100 p-4 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {error.message}
                {'\n\n'}
                {error.stack}
              </pre>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}


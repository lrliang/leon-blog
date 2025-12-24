'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * 页面导航加载进度条
 * 使用纯 CSS 实现，无需 nprogress 依赖
 */
export function LoadingBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 路由变化时重置
    setIsLoading(false);
    setProgress(0);
  }, [pathname, searchParams]);

  // 监听链接点击开始加载
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && !link.href.startsWith('#')) {
        const url = new URL(link.href);
        // 只处理同域名的链接
        if (url.origin === window.location.origin) {
          // 不处理当前页面的链接
          if (
            url.pathname !== window.location.pathname ||
            url.search !== window.location.search
          ) {
            setIsLoading(true);
            setProgress(10);

            // 模拟进度
            const interval = setInterval(() => {
              setProgress((prev) => {
                if (prev >= 90) {
                  clearInterval(interval);
                  return 90;
                }
                return prev + Math.random() * 15;
              });
            }, 100);

            // 清理
            return () => clearInterval(interval);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px]">
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 h-full w-24 bg-gradient-to-r from-transparent to-primary opacity-50 blur-sm" />
      </div>
    </div>
  );
}


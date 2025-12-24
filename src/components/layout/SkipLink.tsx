'use client';

/**
 * Skip to main content link
 * 默认隐藏，仅在获得焦点时显示
 * 帮助键盘用户快速跳过导航进入主要内容
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      跳到主要内容
    </a>
  );
}


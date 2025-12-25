import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center md:px-8">
      <h1 className="mb-4 text-9xl font-bold tracking-tight text-muted-foreground/20">
        404
      </h1>
      <h2 className="mb-4 text-2xl font-semibold">页面未找到</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        抱歉，您访问的页面不存在或已被移动。请检查网址是否正确，或返回首页继续浏览。
      </p>
      <Button asChild>
        <Link href="/">返回首页</Link>
      </Button>
    </div>
  );
}


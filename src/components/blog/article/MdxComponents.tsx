import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Callout } from '@/components/blog/article/Callout';

// MDX 自定义组件映射
export const mdxComponents: MDXComponents = {
  // 自定义组件
  Callout,

  // 自定义链接处理
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || '#'}
        className="text-primary underline underline-offset-4 hover:text-primary/80"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // 标题添加 id 用于 TOC
  h2: ({ children, ...props }) => {
    const id =
      typeof children === 'string'
        ? children.toLowerCase().replace(/\s+/g, '-')
        : '';
    return (
      <h2
        id={id}
        className="mb-4 mt-10 scroll-mt-20 text-2xl font-bold tracking-tight"
        {...props}
      >
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }) => {
    const id =
      typeof children === 'string'
        ? children.toLowerCase().replace(/\s+/g, '-')
        : '';
    return (
      <h3
        id={id}
        className="mb-3 mt-8 scroll-mt-20 text-xl font-semibold"
        {...props}
      >
        {children}
      </h3>
    );
  },

  // 段落样式
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-7 text-foreground/90" {...props}>
      {children}
    </p>
  ),

  // 列表样式
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  // 代码块（已由 Shiki 处理，这里添加额外样式）
  pre: ({ children, ...props }) => (
    <pre
      className="mb-6 overflow-x-auto rounded-lg border border-border p-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // 行内代码
  code: ({ children, ...props }) => {
    // 如果是代码块内的 code，不添加额外样式
    if (props.className?.includes('language-')) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },

  // 引用块
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // 分割线
  hr: (props) => <hr className="my-8 border-border" {...props} />,

  // 图片
  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ''}
      className="my-6 rounded-lg"
      loading="lazy"
      {...props}
    />
  ),
};


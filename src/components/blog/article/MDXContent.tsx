'use client';

import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { mdxComponents } from './MdxComponents';

interface MDXContentProps {
  code: string;
}

/**
 * MDX 内容渲染组件
 *
 * Velite 的 s.mdx() 输出的是编译后的 JavaScript 代码，
 * 需要在运行时使用 Function 构造器执行并渲染为 React 组件。
 */
export function MDXContent({ code }: MDXContentProps) {
  const Component = React.useMemo(() => {
    // 使用 Function 构造器执行编译后的 MDX 代码
    // 传入 jsx runtime 作为参数
    const fn = new Function(code);
    const module = fn(jsxRuntime);
    return module.default;
  }, [code]);

  return <Component components={mdxComponents} />;
}


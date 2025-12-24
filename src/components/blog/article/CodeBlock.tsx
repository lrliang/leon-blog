'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  'data-language'?: string;
}

export function CodeBlock({
  children,
  className,
  'data-language': language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeElement = document.querySelector(`[data-code-id="${language}"]`);
    const text = codeElement?.textContent || '';

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="group relative my-6">
      {/* Language Label */}
      {language && (
        <div className="absolute right-12 top-0 rounded-b-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
          {language}
        </div>
      )}

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-md bg-muted p-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label={copied ? '已复制' : '复制代码'}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      {/* Code Content */}
      <pre
        className={cn(
          'overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-sm',
          className
        )}
        data-code-id={language}
      >
        {children}
      </pre>
    </div>
  );
}


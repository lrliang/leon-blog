'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getAllTags } from '@/lib/content';

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
}

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 热门标签
  const popularTags = getAllTags().slice(0, 5);

  // 打开/关闭 Modal
  const openModal = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setResults([]);
    setSelectedIndex(0);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  // 键盘快捷键 Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          closeModal();
        } else {
          openModal();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openModal, closeModal]);

  // 聚焦输入框
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // 搜索逻辑 (debounced)
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true);
      try {
        // 动态加载 Pagefind
        // @ts-ignore
        const pagefind = await import('/pagefind/pagefind.js');
        await pagefind.init();
        const search = await pagefind.search(query);
        const resultsData = await Promise.all(
          search.results.slice(0, 7).map((r: any) => r.data())
        );
        setResults(
          resultsData.map((r: any) => ({
            url: r.url,
            title: r.meta?.title || 'Untitled',
            excerpt: r.excerpt || '',
          }))
        );
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      navigateToResult(results[selectedIndex].url);
    }
  };

  const navigateToResult = (url: string) => {
    closeModal();
    router.push(url);
  };

  if (!isOpen) {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={openModal}
        className="hidden sm:flex"
        title="搜索 (⌘K)"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">搜索</span>
      </Button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/4 z-50 w-full max-w-[600px] -translate-x-1/2 px-4">
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="搜索文章..."
              className="flex-1 bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground"
            />
            {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
            <button
              onClick={closeModal}
              className="rounded p-1 hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[400px] overflow-y-auto p-2">
            {query.trim() === '' ? (
              // 热门标签建议
              <div className="p-4">
                <p className="mb-3 text-sm text-muted-foreground">热门标签</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(({ tag }) => (
                    <button
                      key={tag}
                      onClick={() => {
                        closeModal();
                        router.push(`/tags/${tag}`);
                      }}
                      className="rounded-full bg-secondary px-3 py-1 text-sm transition-colors hover:bg-secondary/80"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 && !isLoading ? (
              // 无结果
              <div className="p-8 text-center text-muted-foreground">
                <p className="mb-2">未找到相关内容</p>
                <p className="text-sm">试试其他关键词，或浏览热门标签</p>
              </div>
            ) : (
              // 搜索结果
              <ul>
                {results.map((result, index) => (
                  <li key={result.url}>
                    <button
                      onClick={() => navigateToResult(result.url)}
                      className={cn(
                        'w-full rounded-lg p-3 text-left transition-colors',
                        index === selectedIndex
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      )}
                    >
                      <p className="font-medium">{result.title}</p>
                      <p
                        className={cn(
                          'mt-1 line-clamp-2 text-sm',
                          index === selectedIndex
                            ? 'text-primary-foreground/80'
                            : 'text-muted-foreground'
                        )}
                        dangerouslySetInnerHTML={{ __html: result.excerpt }}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
            <span className="mr-4">
              <kbd className="rounded bg-muted px-1.5 py-0.5">↑↓</kbd> 导航
            </span>
            <span className="mr-4">
              <kbd className="rounded bg-muted px-1.5 py-0.5">Enter</kbd> 选择
            </span>
            <span>
              <kbd className="rounded bg-muted px-1.5 py-0.5">Esc</kbd> 关闭
            </span>
          </div>
        </div>
      </div>
    </>
  );
}


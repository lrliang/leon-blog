'use client';

import { useState, useCallback } from 'react';
import { Link2, Check, Twitter, ImageDown, Download, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toPng } from 'html-to-image';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareToWeibo = () => {
    const weiboUrl = `https://service.weibo.com/share/share.php?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(weiboUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGenerate = useCallback(async () => {
    const el = document.getElementById('article-capture');
    if (!el) return;

    setGenerating(true);
    setShowModal(true);
    setImageUrl(null);

    const bg = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
    const resolvedBg = bg || (document.documentElement.classList.contains('dark') ? '#0a0a0a' : '#ffffff');

    const footer = document.createElement('div');
    footer.setAttribute('data-capture-footer', '');
    Object.assign(footer.style, {
      paddingTop: '24px',
      marginTop: '32px',
      borderTop: '1px solid rgba(128,128,128,0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      color: '#999',
    });
    footer.innerHTML = `<span>Leon's Blog</span><span>${url.replace(/^https?:\/\//, '')}</span>`;
    el.appendChild(footer);

    const originalPadding = el.style.padding;
    const originalBgColor = el.style.backgroundColor;
    el.style.padding = '40px';
    el.style.backgroundColor = resolvedBg;

    try {
      const dataUrl = await toPng(el, {
        pixelRatio: 2,
        filter: (node) => {
          if (node instanceof HTMLElement && node.hasAttribute('data-capture-exclude')) {
            return false;
          }
          return true;
        },
      });
      setImageUrl(dataUrl);
    } catch (err) {
      console.error('Failed to generate image:', err);
    } finally {
      el.removeChild(footer);
      el.style.padding = originalPadding;
      el.style.backgroundColor = originalBgColor;
      setGenerating(false);
    }
  }, [url]);

  const handleDownload = useCallback(() => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.download = `${title}.png`;
    link.href = imageUrl;
    link.click();
  }, [imageUrl, title]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setImageUrl(null);
  }, []);

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-8">
        <span className="text-sm text-muted-foreground">分享文章:</span>

        <Button variant="outline" size="sm" onClick={handleCopyLink} className="gap-2">
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              链接已复制
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              复制链接
            </>
          )}
        </Button>

        <Button variant="outline" size="sm" onClick={shareToTwitter} className="gap-2">
          <Twitter className="h-4 w-4" />
          Twitter
        </Button>

        <Button variant="outline" size="sm" onClick={shareToWeibo} className="gap-2">
          <span className="text-sm">微博</span>
        </Button>

        <Button variant="outline" size="sm" onClick={handleGenerate} disabled={generating} className="gap-2">
          {generating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              生成中...
            </>
          ) : (
            <>
              <ImageDown className="h-4 w-4" />
              生成图片
            </>
          )}
        </Button>
      </div>

      {/* Full article image modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col items-center gap-4 overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl">
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-3 right-3 z-10"
              onClick={handleCloseModal}
            >
              <X className="h-4 w-4" />
            </Button>

            <h3 className="text-lg font-semibold">文章长图</h3>

            {generating && (
              <div className="flex items-center gap-2 py-12 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                正在生成长图...
              </div>
            )}

            {imageUrl && (
              <>
                <img
                  src={imageUrl}
                  alt="文章长图"
                  className="w-full rounded-lg border border-border"
                />
                <div className="flex gap-3">
                  <Button onClick={handleDownload} className="gap-2">
                    <Download className="h-4 w-4" />
                    保存图片
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  也可以长按或右键图片直接保存
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

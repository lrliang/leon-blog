'use client';

import { useState, useRef, useCallback } from 'react';
import { Link2, Check, Twitter, ImageDown, Download, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareCard } from './ShareCard';
import { toPng } from 'html-to-image';

interface ShareButtonsProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
}

export function ShareButtons({ title, description, date, tags, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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

  const handleOpenCard = useCallback(() => {
    setImageUrl(null);
    setShowCard(true);
  }, []);

  const handleCloseCard = useCallback(() => {
    setShowCard(false);
    setImageUrl(null);
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!cardRef.current) return;
    setGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2 });
      setImageUrl(dataUrl);
    } catch (err) {
      console.error('Failed to generate image:', err);
    } finally {
      setGenerating(false);
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.download = `${title}.png`;
    link.href = imageUrl;
    link.click();
  }, [imageUrl, title]);

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

        <Button variant="outline" size="sm" onClick={handleOpenCard} className="gap-2">
          <ImageDown className="h-4 w-4" />
          生成图片
        </Button>
      </div>

      {/* Share Card Modal */}
      {showCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col items-center gap-4 overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl">
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-3 right-3"
              onClick={handleCloseCard}
            >
              <X className="h-4 w-4" />
            </Button>

            <h3 className="text-lg font-semibold">生成分享图片</h3>

            {/* Card preview or generated image */}
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="分享卡片"
                className="w-full rounded-xl"
              />
            ) : (
              <div className="w-full overflow-hidden rounded-xl">
                <ShareCard
                  ref={cardRef}
                  title={title}
                  description={description}
                  date={date}
                  tags={tags}
                  url={url}
                />
              </div>
            )}

            <div className="flex gap-3">
              {imageUrl ? (
                <Button onClick={handleDownload} className="gap-2">
                  <Download className="h-4 w-4" />
                  保存图片
                </Button>
              ) : (
                <Button onClick={handleGenerate} disabled={generating} className="gap-2">
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
              )}
            </div>

            {imageUrl && (
              <p className="text-xs text-muted-foreground">
                也可以长按或右键图片直接保存
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

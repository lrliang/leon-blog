'use client';

import { useState } from 'react';
import { Link2, Check, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-8">
      <span className="text-sm text-muted-foreground">分享文章:</span>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="gap-2"
      >
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

      {/* Twitter/X */}
      <Button
        variant="outline"
        size="sm"
        onClick={shareToTwitter}
        className="gap-2"
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </Button>

      {/* Weibo */}
      <Button
        variant="outline"
        size="sm"
        onClick={shareToWeibo}
        className="gap-2"
      >
        <span className="text-sm">微博</span>
      </Button>
    </div>
  );
}


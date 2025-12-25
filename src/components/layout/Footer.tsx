import Link from 'next/link';
import { Rss } from 'lucide-react';
import { SubscribeForm } from '@/components/shared/SubscribeForm';

const socialLinks = [
  { href: '#', label: '小红书' },
  { href: '#', label: '公众号' },
  { href: '#', label: '即刻' },
  { href: 'https://github.com', label: 'GitHub' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-8">
        {/* Subscribe Section */}
        <div className="mb-10 flex flex-col items-center text-center">
          <h3 className="mb-2 text-lg font-semibold">订阅更新</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            获取最新文章和 AI 出海资讯
          </p>
          <SubscribeForm />
          <Link
            href="/rss.xml"
            className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <Rss className="h-4 w-4" />
            RSS 订阅
          </Link>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 border-t border-border/40 pt-6 md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Leon. All rights reserved.
          </p>

          {/* Social Links */}
          <nav className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

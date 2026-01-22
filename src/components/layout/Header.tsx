'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LanguageToggle } from '@/components/layout/LanguageToggle';
import { SearchModal } from '@/components/layout/SearchModal';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { cn } from '@/lib/utils';

export function Header() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/blog', label: t.nav.blog },
    { href: '/tags', label: t.nav.tags },
    { href: '/resources', label: t.nav.resources },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Leon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <SearchModal />
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t.nav.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


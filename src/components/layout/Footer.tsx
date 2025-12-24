import Link from 'next/link';

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
      <div className="container flex flex-col items-center gap-4 px-4 py-10 md:flex-row md:justify-between md:px-8">
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
    </footer>
  );
}


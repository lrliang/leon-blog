import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { ToastProvider } from '@/components/ui/toast';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Leon Blog',
    template: '%s | Leon Blog',
  },
  description:
    '资深全栈工程师 · AI 原生实践者 · 用 AI 推动技术与知识平权',
  keywords: ['AI', '全栈开发', '技术平权', '知识平权', 'AI 原生'],
  authors: [{ name: 'Leon' }],
  creator: 'Leon',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Leon Blog',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@leon',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* Pagefind 搜索脚本 - 仅生产环境 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (async function() {
                try {
                  window.pagefind = await import('/pagefind/pagefind.js');
                  await window.pagefind.init();
                } catch (e) {
                  console.log('Pagefind not available (dev mode)');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ToastProvider>
              <SkipLink />
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main id="main-content" className="flex-1" tabIndex={-1}>
                  {children}
                </main>
                <Footer />
              </div>
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

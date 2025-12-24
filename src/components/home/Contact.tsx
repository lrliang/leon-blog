'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { socialLinks, contactInfo } from '@/lib/home-data';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconMap: Record<string, string> = {
  xiaohongshu: '📕',
  wechat: '💬',
  jike: '⚡',
  github: '🐙',
  twitter: '🐦',
};

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-secondary/30 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            {t.contact.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* WeChat QR Code */}
          <div className="flex flex-col items-center rounded-2xl bg-background p-8">
            <div className="relative mb-4 h-[180px] w-[180px] overflow-hidden rounded-xl bg-muted">
              {/* Placeholder for QR code */}
              <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                <span className="text-4xl">📱</span>
              </div>
              {/* Uncomment when QR code is available */}
              {/* <Image
                src={contactInfo.wechatQrCode}
                alt="微信二维码"
                fill
                className="object-cover"
              /> */}
            </div>
            <p className="font-medium">{t.contact.wechat}</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8">
            <h3 className="mb-6 text-xl font-semibold">社交媒体</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
                >
                  <span>{iconMap[social.icon] || '🔗'}</span>
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


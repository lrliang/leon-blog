'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4 py-20 md:px-8">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={item}
          className="mb-4 text-lg text-muted-foreground"
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          {t.hero.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mb-6 text-2xl font-medium text-primary sm:text-3xl"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={item}>
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="group gap-2 text-base"
          >
            {t.hero.cta}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}


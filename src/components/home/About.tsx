'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Timeline } from '@/components/home/Timeline';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16 space-y-4"
        >
          {t.about.story.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <Timeline />
        </motion.div>

        {/* Hobbies */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h3 className="mb-6 text-xl font-semibold">{t.about.hobbies.title}</h3>
          <div className="flex flex-wrap gap-3">
            {t.about.hobbies.items.map((hobby) => (
              <span
                key={hobby}
                className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
              >
                {hobby}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


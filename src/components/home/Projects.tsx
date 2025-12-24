'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t.projects.title}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              {/* Period Badge */}
              <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {project.period}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

              {/* Description */}
              <p className="mb-4 text-muted-foreground">{project.description}</p>

              {/* Result */}
              <p className="mb-4 text-lg font-semibold text-primary">
                📈 {project.result}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.url && (
                <Link
                  href={project.url}
                  target={project.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    project.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  查看项目
                  <ExternalLink className="h-3 w-3" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


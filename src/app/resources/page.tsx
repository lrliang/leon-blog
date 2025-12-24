'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, BookOpen, Wrench, GraduationCap, Users } from 'lucide-react';
import { recommendedResources } from '@/lib/home-data';
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
      staggerChildren: 0.1,
    },
  },
};

const categoryIcons = {
  tool: Wrench,
  course: GraduationCap,
  book: BookOpen,
  community: Users,
};

const categoryLabels = {
  tool: { zh: '工具', en: 'Tools' },
  course: { zh: '课程', en: 'Courses' },
  book: { zh: '书籍', en: 'Books' },
  community: { zh: '社区', en: 'Communities' },
};

export default function ResourcesPage() {
  const { language } = useLanguage();

  // 按类别分组
  const groupedResources = recommendedResources.reduce(
    (acc, resource) => {
      if (!acc[resource.category]) {
        acc[resource.category] = [];
      }
      acc[resource.category].push(resource);
      return acc;
    },
    {} as Record<string, typeof recommendedResources>
  );

  const categories = ['tool', 'course', 'book', 'community'] as const;

  return (
    <div className="min-h-screen px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {language === 'zh' ? '推荐资源' : 'Recommended Resources'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {language === 'zh'
              ? '我在学习和工作中使用的工具、课程和资源，希望对你有帮助'
              : 'Tools, courses, and resources I use for learning and work. Hope they help!'}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category) => {
            const resources = groupedResources[category];
            if (!resources || resources.length === 0) return null;

            const Icon = categoryIcons[category];
            const label = categoryLabels[category][language];

            return (
              <motion.section
                key={category}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <div className="mb-6 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">{label}</h2>
                </div>

                <motion.div
                  variants={staggerContainer}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {resources.map((resource, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Link
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full items-start gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-2xl">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold group-hover:text-primary">
                              {language === 'zh' ? resource.name : resource.nameEn}
                            </h3>
                            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {language === 'zh'
                              ? resource.description
                              : resource.descriptionEn}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 rounded-xl bg-secondary/30 p-6 text-center"
        >
          <p className="text-muted-foreground">
            {language === 'zh' ? (
              <>
                💡 这些是我个人使用和推荐的资源，部分链接可能包含推荐码。
                <br />
                如果你有好的资源推荐，欢迎{' '}
                <Link href="/#contact" className="text-primary hover:underline">
                  联系我
                </Link>
                ！
              </>
            ) : (
              <>
                💡 These are resources I personally use and recommend. Some links may
                contain referral codes.
                <br />
                If you have great resources to share,{' '}
                <Link href="/#contact" className="text-primary hover:underline">
                  let me know
                </Link>
                !
              </>
            )}
          </p>
        </motion.div>
      </div>
    </div>
  );
}


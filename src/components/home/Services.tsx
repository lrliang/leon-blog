'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, FileCheck, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { serviceProcess, testimonials } from '@/lib/home-data';

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

const processIcons = [MessageSquare, FileCheck, Rocket];

export function Services() {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="bg-secondary/30 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t.services.title}
        </motion.h2>

        {/* 服务卡片 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group rounded-2xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>

              {/* Deliverables */}
              <div className="mb-4">
                <ul className="space-y-1">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration */}
              <p className="mb-6 text-sm text-muted-foreground">
                ⏱️ {service.duration}
              </p>

              {/* CTA */}
              <Button
                variant="outline"
                className="group/btn gap-2"
                data-service={service.title}
              >
                {service.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* 服务流程 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            {language === 'zh' ? '服务流程' : 'How It Works'}
          </h3>
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute top-12 left-1/2 hidden h-0.5 w-2/3 -translate-x-1/2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {serviceProcess.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <motion.div
                    key={step.step}
                    variants={fadeInUp}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-lg ring-4 ring-primary/20">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-1 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                      {step.step}
                    </div>
                    <h4 className="mb-2 text-lg font-semibold">
                      {language === 'zh' ? step.title : step.titleEn}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === 'zh' ? step.description : step.descriptionEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* 客户评价 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            {language === 'zh' ? '客户评价' : 'Testimonials'}
          </h3>

          {testimonials.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-2xl bg-background p-6 shadow-sm"
                >
                  <p className="mb-4 text-muted-foreground italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // 占位状态
            <div className="rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-background/50 px-8 py-12 text-center">
              <div className="mb-4 text-4xl">💬</div>
              <p className="mb-2 text-lg font-medium text-muted-foreground">
                {language === 'zh' ? '评价征集中' : 'Testimonials Coming Soon'}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {language === 'zh'
                  ? '期待与您的合作，成为我的第一位评价者！'
                  : 'Looking forward to working with you and hearing your feedback!'}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}


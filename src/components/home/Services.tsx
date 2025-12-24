'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

export function Services() {
  const { t } = useLanguage();

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

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
      </div>
    </section>
  );
}


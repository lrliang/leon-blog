'use client';

import { timeline } from '@/lib/home-data';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Timeline() {
  const { language } = useLanguage();

  return (
    <div className="relative space-y-8 pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
      {timeline.map((item, index) => (
        <div key={index} className="relative">
          {/* Dot */}
          <div className="absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary">{item.year}</span>
            <h4 className="mt-1 text-lg font-semibold">
              {language === 'en' ? item.titleEn : item.title}
            </h4>
            <p className="mt-1 text-muted-foreground">
              {language === 'en' ? item.descriptionEn : item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}


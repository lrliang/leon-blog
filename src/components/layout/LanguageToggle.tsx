'use client';

import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      title={language === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">
        {language === 'zh' ? 'Switch to English' : '切换到中文'}
      </span>
    </Button>
  );
}


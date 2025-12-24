import { cn } from '@/lib/utils';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';
import type { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip';
  title?: string;
  children: ReactNode;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
};

const styles = {
  info: 'border-blue-500/50 bg-blue-500/10 text-blue-900 dark:text-blue-100',
  warning:
    'border-yellow-500/50 bg-yellow-500/10 text-yellow-900 dark:text-yellow-100',
  tip: 'border-green-500/50 bg-green-500/10 text-green-900 dark:text-green-100',
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        'my-6 flex gap-3 rounded-lg border-l-4 p-4',
        styles[type]
      )}
    >
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
      <div className="flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-sm [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}


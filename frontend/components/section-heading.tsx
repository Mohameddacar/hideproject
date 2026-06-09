import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl space-y-4', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? <Badge className="w-fit text-brand-100">{eyebrow}</Badge> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-slate-300 sm:text-base">{description}</p> : null}
    </div>
  );
}

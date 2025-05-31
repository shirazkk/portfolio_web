
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <h2 
      className={cn(
        "text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center font-headline text-primary",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, className, ...props }: SectionTitleProps) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-muted-foreground mb-10 md:mb-16 text-center max-w-2xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

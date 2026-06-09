import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'accent' | 'success' | 'featured' | 'tag';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--color-stone)]/20 text-[var(--color-warm-gray)]',
  accent: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
  success: 'bg-[var(--color-success)]/10 text-[var(--color-success)]',
  featured: 'bg-[var(--color-accent)] text-white',
  tag: 'bg-[var(--color-cream-dark)] text-[var(--color-espresso)] border border-[var(--color-stone)]/30',
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-2.5 py-1
        text-xs font-medium
        rounded-[var(--radius-full)]
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

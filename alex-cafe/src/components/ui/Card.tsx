import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-[var(--radius-lg)]
        shadow-[var(--shadow-sm)]
        border border-[var(--color-stone)]/20
        ${paddingStyles[padding]}
        ${hover ? 'transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

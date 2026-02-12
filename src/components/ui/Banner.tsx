/**
 * Banner – Design System v0.1 (A-S3).
 * Informacinis/pranešimo blokas su variantais.
 * Naudojimas: remediation, takeaway, praktinis patarimas.
 */
import type { ReactNode } from 'react';

export type BannerVariant = 'info' | 'success' | 'warning';

const variantClasses: Record<BannerVariant, string> = {
  info: 'bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 text-brand-900 dark:text-brand-100',
  success: 'bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 text-emerald-900 dark:text-emerald-100',
  warning: 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 text-amber-900 dark:text-amber-100',
};

interface BannerProps {
  variant?: BannerVariant;
  children: ReactNode;
  className?: string;
}

export default function Banner({ variant = 'info', children, className = '' }: BannerProps) {
  return (
    <div
      className={`rounded-r-xl p-4 ${variantClasses[variant]} ${className}`.trim()}
      role="region"
      aria-label={`${variant} pranešimas`}
    >
      {children}
    </div>
  );
}

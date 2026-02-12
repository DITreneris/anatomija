/**
 * CTAButton – Design System v0.1 (A-S3).
 * CTA mygtukas su variantais pagal DESIGN_GUIDE, index.css btn-*.
 * Naudojimas: skaidrės CTA, navigacija, praktinės užduotys.
 */
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type CTAButtonVariant = 'primary' | 'secondary' | 'accent' | 'hero';

const variantClasses: Record<CTAButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  hero: 'btn-primary btn-hero-cta',
};

interface CTAButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: CTAButtonVariant;
  children: ReactNode;
  className?: string;
}

export default function CTAButton({
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  ...props
}: CTAButtonProps) {
  const baseClass = variantClasses[variant];
  return (
    <button
      type={type}
      className={`${baseClass} inline-flex items-center justify-center gap-2 min-h-[44px] ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

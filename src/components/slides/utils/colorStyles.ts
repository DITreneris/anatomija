/** Shared color style mappings for slide components (Tailwind safelist compatible) */
export const colorStyles: Record<string, { bg: string; bgDark: string; text: string; textDark: string; border: string }> = {
  rose: {
    bg: 'bg-rose-100',
    bgDark: 'dark:bg-rose-900/30',
    text: 'text-rose-700',
    textDark: 'dark:text-rose-300',
    border: 'border-rose-500',
  },
  orange: {
    bg: 'bg-orange-100',
    bgDark: 'dark:bg-orange-900/30',
    text: 'text-orange-700',
    textDark: 'dark:text-orange-300',
    border: 'border-orange-500',
  },
  amber: {
    bg: 'bg-amber-100',
    bgDark: 'dark:bg-amber-900/30',
    text: 'text-amber-700',
    textDark: 'dark:text-amber-300',
    border: 'border-amber-500',
  },
  emerald: {
    bg: 'bg-emerald-100',
    bgDark: 'dark:bg-emerald-900/30',
    text: 'text-emerald-700',
    textDark: 'dark:text-emerald-300',
    border: 'border-emerald-500',
  },
  brand: {
    bg: 'bg-brand-100',
    bgDark: 'dark:bg-brand-900/30',
    text: 'text-brand-700',
    textDark: 'dark:text-brand-300',
    border: 'border-brand-500',
  },
  violet: {
    bg: 'bg-violet-100',
    bgDark: 'dark:bg-violet-900/30',
    text: 'text-violet-700',
    textDark: 'dark:text-violet-300',
    border: 'border-violet-500',
  },
};

export const getColorClasses = (color: string) => colorStyles[color] || colorStyles.brand;

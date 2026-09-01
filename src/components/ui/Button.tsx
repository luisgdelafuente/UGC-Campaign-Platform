import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Same-page anchor link */
  href?: string;
  /** Client-side route (takes precedence over href) */
  to?: string;
}

const base =
'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:translate-y-px';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white shadow-accent hover:bg-[#4a1fe0]',
  secondary:
  'bg-surface text-ink border border-hairline hover:border-ink/25 hover:bg-wash',
  ghost: 'text-body hover:text-ink'
};

const sizes: Record<Size, string> = {
  sm: 'px-[18px] py-2.5 text-[13.5px]',
  md: 'px-6 py-[13px] text-sm'
};

export function Button({
  variant = 'primary',
  size = 'sm',
  className = '',
  children,
  href,
  to
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>);

  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>);

}
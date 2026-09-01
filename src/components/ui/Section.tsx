import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}

export function Section({ id, className = '', children, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={className}>
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12">
        {children}
      </div>
    </section>);

}

interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
      {children}
    </p>);

}
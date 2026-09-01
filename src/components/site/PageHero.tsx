import React from 'react';
import { Eyebrow } from '../ui/Section';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section className="w-full border-b border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-16 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-3 max-w-3xl text-[40px] font-extrabold leading-[1.05] tracking-display text-ink sm:text-[52px]">
              {title}
            </h1>
          </div>
          <div>
            <p className="max-w-xl text-[16.5px] leading-[1.55] text-muted">
              {lede}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>);

}
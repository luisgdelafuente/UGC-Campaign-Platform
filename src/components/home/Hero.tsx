import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProductFrame } from './ProductFrame';

export function Hero() {
  return (
    <section id="top" className="w-full bg-canvas">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-[470px_minmax(0,1fr)] lg:gap-9 lg:px-16 lg:pb-28 lg:pt-20">
        <div className="flex flex-col gap-[18px]">
          <span className="flex w-fit items-center gap-2 rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-[-0.01em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Trusted by 400+ brands and agencies
          </span>

          <h1 className="max-w-[450px] text-[38px] font-extrabold leading-[1.07] tracking-display text-ink sm:text-[45px]">
            Where brands, creators and agencies run{' '}
            <span className="text-accent">UGC</span> together
          </h1>

          <p className="max-w-[420px] text-[16.5px] leading-[1.55] tracking-[-0.01em] text-muted">
            One platform to brief, match, produce and measure user-generated
            content campaigns at scale.
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <Button href="#demo" size="md">
              Book a demo
            </Button>
            <Button href="#platform" variant="secondary" size="md">
              Explore the platform
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-2.5 text-[13px] font-medium text-subtle">
            <span className="flex items-center" aria-hidden="true">
              {['#C4B5FD', '#A78BFA', '#8B5CF6', '#5B2BFF'].map((tone, i) =>
              <span
                key={tone}
                className="h-6 w-6 rounded-full border-2 border-canvas"
                style={{ backgroundColor: tone, marginLeft: i === 0 ? 0 : -6 }} />

              )}
            </span>
            <span>
              <strong className="font-bold text-ink">18,000+</strong> vetted
              creators
            </span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:pr-6">
          <ProductFrame />
        </div>
      </div>
    </section>);

}
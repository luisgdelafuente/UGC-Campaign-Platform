import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { audiences, AudienceKey } from '../../data/site';

export function Audiences() {
  const [active, setActive] = useState<AudienceKey>('brands');
  const audience = audiences.find((a) => a.key === active) ?? audiences[0];

  return (
    <Section id="audiences" labelledBy="audiences-heading" className="py-24 lg:py-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Una red, tres partes</Eyebrow>
          <h2
            id="audiences-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Marcas, agencias y creadores en el mismo sistema
          </h2>
        </div>
        <p className="max-w-md text-[15.5px] leading-relaxed text-muted">
          Cada parte trabaja en su propio espacio, pero el brief, las revisiones
          y los pagos ocurren sobre la misma información.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Choose an audience"
        className="mt-10 inline-flex rounded-xl border border-hairline bg-surface p-1">
        
        {audiences.map((item) =>
        <button
          key={item.key}
          role="tab"
          id={`tab-${item.key}`}
          aria-selected={active === item.key}
          aria-controls={`panel-${item.key}`}
          onClick={() => setActive(item.key)}
          className={`relative rounded-lg px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 ease-out ${
          active === item.key ?
          'text-white' :
          'text-body hover:text-ink'}`
          }>
          
            {active === item.key &&
          <motion.span
            layoutId="audience-pill"
            className="absolute inset-0 rounded-lg bg-ink"
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />

          }
            <span className="relative z-10">{item.tab}</span>
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={audience.key}
          id={`panel-${audience.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${audience.key}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline lg:grid-cols-[minmax(0,1fr)_360px]">
          
          <div className="bg-surface p-8 lg:p-12">
            <h3 className="max-w-lg text-[26px] font-bold leading-tight tracking-[-0.02em] text-ink">
              {audience.headline}
            </h3>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted">
              {audience.description}
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {audience.bullets.map((bullet) =>
              <li key={bullet.title} className="flex flex-col">
                  <CheckIcon
                  className="h-4 w-4 text-accent"
                  aria-hidden="true" />
                
                  <span className="mt-3 text-sm font-semibold text-ink">
                    {bullet.title}
                  </span>
                  <span className="mt-1.5 text-[13.5px] leading-relaxed text-subtle">
                    {bullet.text}
                  </span>
                </li>
              )}
            </ul>
            <a
              href="#demo"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
              
              {audience.cta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col justify-between bg-wash p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-faint">
              Lo que cambia
            </p>
            <div className="mt-10">
              <p className="text-[44px] font-extrabold leading-none tracking-display text-ink">
                {audience.metric.value}
              </p>
              <p className="mt-3 max-w-[220px] text-[13.5px] leading-relaxed text-subtle">
                {audience.metric.label}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>);

}
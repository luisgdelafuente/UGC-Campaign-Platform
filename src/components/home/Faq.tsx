import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { faqs } from '../../data/site';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" labelledBy="faq-heading" className="py-24 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-20">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <h2
            id="faq-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink">
            
            Before you book
          </h2>
          <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-muted">
            Anything else, a strategist will answer live on the demo call.
          </p>
        </div>

        <dl className="border-t border-hairline">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="border-b border-hairline">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left">
                    
                    <span className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
                      {faq.q}
                    </span>
                    <PlusIcon
                      className="h-4 w-4 shrink-0 text-subtle transition-transform duration-200 ease-out"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}
                      aria-hidden="true" />
                    
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.dd
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden">
                    
                      <p className="max-w-2xl pb-6 pr-10 text-[14.5px] leading-relaxed text-muted">
                        {faq.a}
                      </p>
                    </motion.dd>
                  }
                </AnimatePresence>
              </div>);

          })}
        </dl>
      </div>
    </Section>);

}
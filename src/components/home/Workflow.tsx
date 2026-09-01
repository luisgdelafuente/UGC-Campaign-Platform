import React from 'react';
import { Section, Eyebrow } from '../ui/Section';
import { useLanguage } from '../../contexts/LanguageContext';

export function Workflow() {
  const { t } = useLanguage();
  const copy = t.workflow;

  return (
    <Section
      id="how-it-works"
      labelledBy="workflow-heading"
      className="border-y border-hairline bg-surface py-24 lg:py-28">
      
      <div className="max-w-2xl">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2
          id="workflow-heading"
          className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
          
          {copy.heading}
        </h2>
      </div>

      <ol className="mt-14 grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-8">
        {copy.steps.map((step) =>
        <li key={step.step} className="flex flex-col border-t border-hairline pt-6">
            <div className="flex items-baseline gap-3">
              <span className="text-[13px] font-bold tabular-nums text-accent">
                {step.step}
              </span>
              <h3 className="text-lg font-bold tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
              {step.text}
            </p>
            <p className="mt-auto pt-5 text-[12.5px] font-semibold text-faint">
              {step.detail}
            </p>
          </li>
        )}
      </ol>
    </Section>);

}
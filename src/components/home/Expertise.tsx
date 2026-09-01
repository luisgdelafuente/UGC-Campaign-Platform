import React from 'react';
import { Section, Eyebrow } from '../ui/Section';
import { expertiseStats, testimonials } from '../../data/site';

export function Expertise() {
  const lead = testimonials[0];

  return (
    <Section id="expertise" labelledBy="expertise-heading" className="py-24 lg:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <Eyebrow>Know-how</Eyebrow>
          <h2
            id="expertise-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Nine years of running creator campaigns, turned into software
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted">
            We started as an in-house creator team, not a marketplace. Every
            rule in the platform — how briefs are structured, how rights are
            worded, how a creator gets scored — came from campaigns we ran
            ourselves and had to fix. Strategists still sit on every account.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-hairline pt-8">
            {expertiseStats.map((stat) =>
            <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-[30px] font-extrabold tracking-display text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[13px] text-subtle">
                    {stat.label}
                  </span>
                </dd>
              </div>
            )}
          </dl>
        </div>

        <div className="flex flex-col gap-6">
          <img
            src="/42795ad1-1fdc-4881-9b55-499d3f4d4c9a.jpg"
            alt="Campaign strategists working together in the studio"
            className="h-72 w-full rounded-3xl object-cover" />
          
          <figure className="rounded-3xl border border-hairline bg-surface p-8 lg:p-10">
            <blockquote className="text-[19px] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
              “{lead.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-hairline pt-6">
              <img
                src={lead.avatar}
                alt=""
                className="h-10 w-10 rounded-full object-cover" />
              
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-ink">
                  {lead.name}
                </span>
                <span className="text-[13px] text-subtle">{lead.role}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>);

}
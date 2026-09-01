import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { useLanguage } from '../../contexts/LanguageContext';

export function CaseStudies() {
  const { t } = useLanguage();
  const copy = t.casesSection;
  const [featured, ...supporting] = t.caseStudies;

  return (
    <Section
      id="cases"
      labelledBy="cases-heading"
      className="border-y border-hairline bg-surface py-24 lg:py-28">
      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2
            id="cases-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            {copy.heading}
          </h2>
        </div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
          
          {copy.link}
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <article className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-hairline lg:grid-cols-2">
        <img
          src={featured.cover}
          alt={copy.featuredImageAlt}
          className="h-64 w-full object-cover lg:h-full" />
        
        <div className="flex flex-col justify-between bg-canvas p-8 lg:p-12">
          <div>
            <p className="text-[12.5px] font-semibold text-faint">
              {featured.brand} · {featured.sector}
            </p>
            <h3 className="mt-4 max-w-md text-[26px] font-bold leading-tight tracking-[-0.02em] text-ink">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              {featured.summary}
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-hairline pt-7">
            {featured.stats.slice(0, 3).map((stat) =>
            <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-[26px] font-extrabold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[12.5px] leading-snug text-subtle">
                    {stat.label}
                  </span>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </article>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {supporting.map((item) =>
        <Link
          key={item.slug}
          to="/case-studies"
          className="group flex items-end justify-between gap-6 rounded-3xl border border-hairline bg-canvas p-8 transition-colors duration-150 ease-out hover:border-ink/20">
          
            <div>
              <p className="text-[12.5px] font-semibold text-faint">
                {item.brand} · {item.sector}
              </p>
              <h3 className="mt-3 max-w-xs text-lg font-bold leading-snug tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[24px] font-extrabold tracking-[-0.02em] text-accent">
                {item.stats[1].value}
              </p>
              <p className="mt-1 text-[12px] text-subtle">
                {item.stats[1].label}
              </p>
            </div>
          </Link>
        )}
      </div>
    </Section>);

}
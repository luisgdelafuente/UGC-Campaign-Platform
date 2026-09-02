import { useState } from 'react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageHero } from '../components/site/PageHero';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { VideoTile } from '../components/ui/VideoTile';
import { useLanguage } from '../contexts/LanguageContext';

export function CaseStudies() {
  const { t, clipById } = useLanguage();
  const copy = t.casesPage;
  const [activeSlug, setActiveSlug] = useState(t.caseStudies[0].slug);
  const study =
  t.caseStudies.find((item) => item.slug === activeSlug) ?? t.caseStudies[0];

  return (
    <SiteLayout>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
        <div className="mt-7">
          <Button to="/#demo" size="md">
            {copy.cta}
          </Button>
        </div>
      </PageHero>

      <Section className="pb-24 pt-12 lg:pb-28">
        <div
          role="tablist"
          aria-label={copy.tablistLabel}
          className="flex flex-wrap gap-2 border-b border-hairline pb-6">
          
          {t.caseStudies.map((item) =>
          <button
            key={item.slug}
            role="tab"
            id={`case-tab-${item.slug}`}
            aria-selected={item.slug === activeSlug}
            aria-controls={`case-panel-${item.slug}`}
            onClick={() => setActiveSlug(item.slug)}
            className={`rounded-full border px-4 py-2.5 text-left text-[13.5px] font-semibold transition-colors duration-150 ease-out ${
            item.slug === activeSlug ?
            'border-transparent bg-solid text-onSolid' :
            'border-hairline bg-surface text-body hover:border-ink/30 hover:text-ink'}`
            }>
            
              {item.brand}
              <span
              className={`ml-2 font-normal ${
              item.slug === activeSlug ? 'text-onSolid/60' : 'text-faint'}`
              }>
              
                {item.sector}
              </span>
            </button>
          )}
        </div>

        <article
          id={`case-panel-${study.slug}`}
          role="tabpanel"
          aria-labelledby={`case-tab-${study.slug}`}
          className="pt-12">
          
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-[12.5px] font-semibold text-faint">
                {study.brand} · {study.sector}
              </p>
              <h2 className="mt-4 max-w-xl text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[38px]">
                {study.title}
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
                {study.summary}
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-y-7 border-t border-hairline pt-8 sm:grid-cols-4">
                {study.stats.map((stat) =>
                <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block text-[28px] font-extrabold tracking-display text-ink">
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
            <img
              src={study.cover}
              alt={`${study.brand} — ${study.title}`}
              className="h-72 w-full rounded-3xl object-cover lg:h-full" />
            
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-hairline pt-10 md:grid-cols-3">
            {[
            { label: copy.blocks.problem, text: study.challenge },
            { label: copy.blocks.approach, text: study.approach },
            { label: copy.blocks.outcome, text: study.outcome }].
            map((block) =>
            <div key={block.label}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                  {block.label}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                  {block.text}
                </p>
              </div>
            )}
          </div>

          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-[20px] font-bold tracking-[-0.02em] text-ink">
                {copy.clipsTitle}
              </h3>
              <p className="text-[13px] text-subtle">{copy.clipsNote}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:max-w-3xl">
              {study.clipIds.map((id) => {
                const clip = clipById(id);
                if (!clip) return null;
                return <VideoTile key={`${study.slug}-${id}`} clip={clip} />;
              })}
            </div>
          </div>

          <figure className="mt-16 rounded-3xl border border-hairline bg-inverse p-10 lg:p-14">
            <blockquote className="max-w-3xl text-[22px] font-medium leading-[1.45] tracking-[-0.01em] text-onInverse">
              “{study.quote.text}”
            </blockquote>
            <figcaption className="mt-8 text-[13.5px] text-onInverse/60">
              <span className="font-semibold text-onInverse">
                {study.quote.name}
              </span>
              {' — '}
              {study.quote.role}
            </figcaption>
          </figure>
        </article>
      </Section>
    </SiteLayout>);

}
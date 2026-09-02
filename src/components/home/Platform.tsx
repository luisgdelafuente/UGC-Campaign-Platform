import { CpuIcon, ShieldCheckIcon, BarChart3Icon, CheckIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { useLanguage } from '../../contexts/LanguageContext';

const secondaryIcons = [ShieldCheckIcon, BarChart3Icon];

export function Platform() {
  const { t } = useLanguage();
  const copy = t.platform;

  return (
    <Section id="platform" labelledBy="platform-heading" className="py-24 lg:py-28">
      <div className="max-w-2xl">
        <Eyebrow>{copy.eyebrow}</Eyebrow>
        <h2
          id="platform-heading"
          className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
          
          {copy.heading}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <article className="flex flex-col justify-between rounded-3xl border border-hairline bg-inverse p-8 text-onInverse lg:p-12">
          <div>
            <CpuIcon className="h-6 w-6 text-accent-bright" aria-hidden="true" />
            <h3 className="mt-8 max-w-lg text-[28px] font-bold leading-tight tracking-[-0.02em]">
              {copy.primary.title}
            </h3>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-onInverse/70">
              {copy.primary.text}
            </p>
          </div>
          <ul className="mt-10 flex flex-col gap-3 border-t border-onInverse/10 pt-8">
            {copy.primary.points.map((point) =>
            <li
              key={point}
              className="flex items-center gap-3 text-[14.5px] text-onInverse/85">
              
                <CheckIcon
                className="h-4 w-4 shrink-0 text-accent-bright"
                aria-hidden="true" />
              
                {point}
              </li>
            )}
          </ul>
        </article>

        <div className="grid grid-cols-1 gap-6">
          {copy.secondary.map((feature, i) => {
            const Icon = secondaryIcons[i];
            return (
              <article
                key={feature.title}
                className="flex flex-1 flex-col rounded-3xl border border-hairline bg-surface p-8">
                
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-bold tracking-[-0.02em] text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {feature.text}
                </p>
              </article>);

          })}
        </div>
      </div>
    </Section>);

}
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { VideoTile } from '../ui/VideoTile';
import { useLanguage } from '../../contexts/LanguageContext';

export function ContentWall() {
  const { t } = useLanguage();
  const copy = t.contentWall;

  return (
    <Section
      id="content"
      labelledBy="content-heading"
      className="border-y border-hairline bg-surface py-24 lg:py-28">
      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2
            id="content-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            {copy.heading}
          </h2>
        </div>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-muted">
          {copy.lede}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {t.clips.map((clip, i) =>
        <VideoTile
          key={clip.id}
          clip={clip}
          className={i % 2 === 1 ? 'lg:mt-8' : ''} />

        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-hairline pt-8">
        <p className="text-[14.5px] text-muted">
          <strong className="font-bold text-ink">{copy.footNoteStrong}</strong>{' '}
          {copy.footNote}
        </p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
          
          {copy.link}
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>);

}
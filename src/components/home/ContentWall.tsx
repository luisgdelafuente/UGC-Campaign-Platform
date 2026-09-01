import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { VideoTile } from '../ui/VideoTile';
import { ugcClips } from '../../data/content';

export function ContentWall() {
  return (
    <Section
      id="content"
      labelledBy="content-heading"
      className="border-y border-hairline bg-surface py-24 lg:py-28">
      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Live from the network</Eyebrow>
          <h2
            id="content-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            The work itself, and what it returned
          </h2>
        </div>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-muted">
          A sample of assets delivered this month. Every clip carries a tracked
          ID, so the number on it is the number the media team reported.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {ugcClips.map((clip, i) =>
        <VideoTile
          key={clip.id}
          clip={clip}
          className={i % 2 === 1 ? 'lg:mt-8' : ''} />

        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-hairline pt-8">
        <p className="text-[14.5px] text-muted">
          <strong className="font-bold text-ink">2.1M assets</strong> delivered
          across 43 markets since 2017.
        </p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
          
          See the campaigns behind them
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>);

}
import React from 'react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageHero } from '../components/site/PageHero';
import { Section, Eyebrow } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { VideoTile } from '../components/ui/VideoTile';
import { teamMembers, timeline, values, ugcClips } from '../data/content';
import { expertiseStats } from '../data/site';

export function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="We ran the campaigns before we built the software"
        lede="UGCFlow started as an in-house creator team, not a marketplace. Every rule in the platform came from a campaign we ran ourselves and had to fix.">
        
        <div className="mt-7 flex flex-wrap gap-3">
          <Button to="/#demo" size="md">
            Book a demo
          </Button>
          <Button href="#story" variant="secondary" size="md">
            Read our story
          </Button>
        </div>
      </PageHero>

      <Section className="py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ugcClips.map((clip) =>
          <VideoTile key={clip.id} clip={clip} showMetric={false} />
          )}
        </div>
        <p className="mt-6 max-w-2xl text-[14.5px] leading-relaxed text-subtle">
          A day of delivered work from the network. Nine years in, this is still
          the only output that matters to us.
        </p>
      </Section>

      <Section
        id="story"
        labelledBy="story-heading"
        className="border-y border-hairline bg-surface py-24 lg:py-28">
        
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2
              id="story-heading"
              className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink">
              
              Nine years, four turning points
            </h2>
            <img
              src="/de5242f3-4079-47cb-805a-c4a0daf6fe0d.jpg"
              alt="The team reviewing creator videos together"
              className="mt-8 h-56 w-full rounded-3xl object-cover" />
            
          </div>

          <ol className="flex flex-col">
            {timeline.map((item) =>
            <li
              key={item.year}
              className="grid grid-cols-1 gap-2 border-t border-hairline py-7 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-8">
              
                <span className="text-[13px] font-bold tabular-nums text-accent">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            )}
          </ol>
        </div>
      </Section>

      <Section labelledBy="values-heading" className="py-24 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2
            id="values-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Three positions we do not trade away
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
          {values.map((value, i) =>
          <article key={value.title} className="border-t border-hairline pt-6">
              <span className="text-[13px] font-bold tabular-nums text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-[18px] font-bold leading-snug tracking-[-0.02em] text-ink">
                {value.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                {value.text}
              </p>
            </article>
          )}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-hairline pt-10 md:grid-cols-4">
          {expertiseStats.map((stat) =>
          <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[32px] font-extrabold tracking-display text-ink">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[13px] text-subtle">
                  {stat.label}
                </span>
              </dd>
            </div>
          )}
        </dl>
      </Section>

      <Section
        labelledBy="team-heading"
        className="border-t border-hairline bg-surface py-24 lg:py-28">
        
        <div className="max-w-2xl">
          <Eyebrow>Who runs it</Eyebrow>
          <h2
            id="team-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Strategists on every account
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
            Forty-one people across London, Berlin and Lisbon. Everyone on the
            campaign side has run creator programmes in-house or agency-side
            before joining.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {teamMembers.map((member) =>
          <article
            key={member.name}
            className="flex items-start gap-5 rounded-3xl border border-hairline bg-canvas p-7">
            
              <img
              src={member.avatar}
              alt=""
              className="h-16 w-16 shrink-0 rounded-2xl object-cover" />
            
              <div>
                <h3 className="text-[17px] font-bold tracking-[-0.02em] text-ink">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[13px] font-semibold text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            </article>
          )}
        </div>
      </Section>
    </SiteLayout>);

}
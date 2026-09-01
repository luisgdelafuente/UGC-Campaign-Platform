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
        eyebrow="Nosotros"
        title="Ejecutábamos las campañas antes de construir el sistema"
        lede="Locals Club nació gestionando creadores a mano para negocios de barrio, no montando un marketplace. Cada regla del sistema viene de una campaña que tuvimos que resolver nosotros.">
        
        <div className="mt-7 flex flex-wrap gap-3">
          <Button to="/#demo" size="md">
            Cuéntanos tu negocio
          </Button>
          <Button href="#story" variant="secondary" size="md">
            Leer nuestra historia
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
          Un día de trabajo entregado por la red. Después de +200 campañas,
          sigue siendo lo único que nos interesa enseñar.
        </p>
      </Section>

      <Section
        id="story"
        labelledBy="story-heading"
        className="border-y border-hairline bg-surface py-24 lg:py-28">
        
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow>Nuestra historia</Eyebrow>
            <h2
              id="story-heading"
              className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink">
              
              Cuatro momentos que nos trajeron hasta aquí
            </h2>
            <img
              src="/de5242f3-4079-47cb-805a-c4a0daf6fe0d.jpg"
              alt="El equipo revisando vídeos de creadores"
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
          <Eyebrow>Cómo trabajamos</Eyebrow>
          <h2
            id="values-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Tres cosas que no negociamos
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
          <Eyebrow>Quién está detrás</Eyebrow>
          <h2
            id="team-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Un responsable humano en cada campaña
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-muted">
            Equipo entre Madrid, Barcelona y Buenos Aires. Todo el que gestiona
            campañas ha trabajado antes con creadores en marca o en agencia.
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
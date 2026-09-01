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
          <Eyebrow>Contenido de la red</Eyebrow>
          <h2
            id="content-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            El trabajo real, y lo que pasó fuera de la pantalla
          </h2>
        </div>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-muted">
          Una muestra de piezas producidas este mes. El dato de cada clip es el
          que reportó el negocio, no una métrica de vanidad.
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
          <strong className="font-bold text-ink">+200 campañas</strong>{' '}
          producidas en España y LATAM desde 2019.
        </p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
          
          Ver las campañas detrás
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>);

}
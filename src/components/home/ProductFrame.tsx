import React from 'react';
import { matchedCreators } from '../../data/site';

const resultBars = [
{ height: 40, on: false },
{ height: 55, on: false },
{ height: 70, on: true },
{ height: 50, on: false },
{ height: 85, on: true },
{ height: 60, on: false },
{ height: 100, on: true }];


export function ProductFrame() {
  return (
    <div
      className="relative h-[552px] w-full max-w-[470px]"
      aria-label="Ejemplo de plan de campaña con creadores propuestos"
      role="img">
      
      {/* Main app frame */}
      <div
        className="mp-float-up absolute inset-0 overflow-hidden rounded-3xl border border-ink bg-ink shadow-frame"
        style={{ ['--mp-rot' as string]: 'rotate(1.1deg)', transform: 'rotate(1.1deg)' }}>
        
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <span className="text-[12.5px] font-semibold tracking-[-0.01em] text-white">
            ✦ Tu plan de campaña
          </span>
          <span className="rounded-full bg-highlight px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-ink">
            Ejemplo
          </span>
        </div>

        <div className="flex flex-col gap-[18px] px-6 py-[22px]">
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.05em] text-highlight">
              ✦ Caso real · Restaurante Madrid
            </span>
            <p className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.05em] text-accent-bright">
              El brief que nos dieron →
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-white/85">
              «Soy un restaurante en Malasaña y quiero llenar mesas de martes a
              jueves…»
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 px-2.5 py-[5px] text-[11.5px] font-semibold text-white/80">
                Visitas 24K
              </span>
              <span className="rounded-full border border-white/15 px-2.5 py-[5px] text-[11.5px] font-semibold text-white/80">
                Reservas/mes +120
              </span>
              <span className="rounded-full border border-accent-bright/40 bg-accent-bright/10 px-2.5 py-[5px] text-[11.5px] font-semibold text-accent-bright">
                Coste 1.480 €
              </span>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div>
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] font-bold text-white">
                Creadores propuestos
              </span>
              <span className="rounded-full bg-accent-bright/15 px-2 py-0.5 text-[10.5px] font-semibold text-accent-bright">
                IA + equipo
              </span>
            </div>

            <ul className="flex flex-col">
              {matchedCreators.map((creator, i) =>
              <li
                key={creator.name}
                className={`flex items-center gap-3 py-[9px] ${
                i === matchedCreators.length - 1 ?
                '' :
                'border-b border-white/10'}`
                }>
                
                  <span
                  className="h-8 w-8 shrink-0 rounded-full"
                  style={{ backgroundColor: creator.tone }}
                  aria-hidden="true" />
                
                  <span className="flex flex-1 flex-col">
                    <span className="text-[12.5px] font-semibold text-white">
                      {creator.name}
                    </span>
                    <span className="text-[11px] text-white/50">
                      {creator.niche}
                    </span>
                  </span>
                  <span className="flex w-[70px] flex-col items-end gap-1">
                    <span className="h-1 w-[70px] overflow-hidden rounded-sm bg-white/15">
                      <span
                      className="mp-shimmer relative block h-full overflow-hidden rounded-sm bg-accent-bright"
                      style={{ width: `${creator.score}%` }} />
                    
                    </span>
                    <span className="text-[10.5px] font-bold text-accent-bright">
                      {creator.score}% encaje
                    </span>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Activation card */}
      <div
        className="mp-float-down absolute -bottom-6 -left-6 w-[176px] rounded-2xl border border-hairline bg-surface p-4 shadow-card lg:-left-10"
        style={{ ['--mp-rot' as string]: 'rotate(-3deg)', transform: 'rotate(-3deg)' }}>
        
        <p className="text-[23px] font-extrabold tracking-[-0.02em] text-ink">
          48<span className="text-accent">h</span>
        </p>
        <p className="mt-0.5 text-[10.5px] font-medium text-subtle">
          para activar la campaña
        </p>
        <div className="mt-2 flex h-5 items-end gap-[3px]" aria-hidden="true">
          {resultBars.map((bar, i) =>
          <span
            key={i}
            className={`w-[5px] rounded-sm ${
            bar.on ? 'bg-accent-400' : 'bg-hairline'}`
            }
            style={{ height: `${bar.height}%` }} />

          )}
        </div>
      </div>

      {/* Network card */}
      <div
        className="mp-float-up absolute -right-4 -top-4 flex items-center gap-2 rounded-[14px] border border-hairline bg-surface px-3.5 py-2.5 shadow-chip lg:-right-6"
        style={{ ['--mp-rot' as string]: 'rotate(2deg)', transform: 'rotate(2deg)' }}>
        
        <span className="flex items-center" aria-hidden="true">
          {['#7FD6F0', '#4FC3E8', '#26A9D8'].map((tone, i) =>
          <span
            key={tone}
            className="h-5 w-5 rounded-full border-2 border-surface"
            style={{
              backgroundColor: tone,
              marginLeft: i === 0 ? 0 : -6
            }} />

          )}
        </span>
        <span className="flex flex-col">
          <span className="text-[12.5px] font-bold text-ink">+500</span>
          <span className="text-[10px] font-medium text-faint">
            creadores en la red
          </span>
        </span>
      </div>
    </div>);

}
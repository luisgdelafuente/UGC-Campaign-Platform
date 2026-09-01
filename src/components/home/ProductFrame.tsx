import React from 'react';
import { matchedCreators } from '../../data/site';

const roasBars = [
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
      aria-label="Product preview: campaign brief with matched creators"
      role="img">
      
      {/* Main app frame */}
      <div
        className="mp-float-up absolute inset-0 overflow-hidden rounded-3xl border border-hairline bg-surface shadow-frame"
        style={{ ['--mp-rot' as string]: 'rotate(1.1deg)', transform: 'rotate(1.1deg)' }}>
        
        <div className="flex h-11 items-center justify-between border-b border-hairline bg-raised px-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-hairline" />
            <span className="h-2 w-2 rounded-full bg-hairline" />
            <span className="h-2 w-2 rounded-full bg-hairline" />
          </div>
          <span className="hidden text-xs font-semibold tracking-[-0.01em] text-muted sm:block">
            Campaign Brief — Summer Skincare Drop
          </span>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-positive">
            <span className="mp-pulse-dot h-1.5 w-1.5 rounded-full bg-positive" />
            Live
          </span>
        </div>

        <div className="flex flex-col gap-[18px] px-6 py-[22px]">
          <div>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.05em] text-faint">
              Campaign
            </span>
            <p className="mt-1 text-[15.5px] font-bold tracking-[-0.01em] text-ink">
              Summer Skincare Drop — TikTok UGC
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="rounded-full border border-accent-border bg-accent-soft px-2.5 py-[5px] text-[11.5px] font-semibold text-accent">
                TikTok
              </span>
              <span className="rounded-full border border-hairlineSoft bg-wash px-2.5 py-[5px] text-[11.5px] font-semibold text-body">
                $12,000 budget
              </span>
              <span className="rounded-full border border-hairlineSoft bg-wash px-2.5 py-[5px] text-[11.5px] font-semibold text-body">
                11-day turnaround
              </span>
            </div>
          </div>

          <div className="h-px bg-hairlineSoft" />

          <div>
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] font-bold text-ink">
                Matched creators
              </span>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10.5px] font-semibold text-accent">
                AI Matching
              </span>
            </div>

            <ul className="flex flex-col">
              {matchedCreators.map((creator, i) =>
              <li
                key={creator.name}
                className={`flex items-center gap-3 py-[9px] ${
                i === matchedCreators.length - 1 ?
                '' :
                'border-b border-[#F5F4F2]'}`
                }>
                
                  <span
                  className="h-8 w-8 shrink-0 rounded-full"
                  style={{ backgroundColor: creator.tone }}
                  aria-hidden="true" />
                
                  <span className="flex flex-1 flex-col">
                    <span className="text-[12.5px] font-semibold text-ink">
                      {creator.name}
                    </span>
                    <span className="text-[11px] text-faint">
                      {creator.niche}
                    </span>
                  </span>
                  <span className="flex w-[70px] flex-col items-end gap-1">
                    <span className="h-1 w-[70px] overflow-hidden rounded-sm bg-[#F0EFED]">
                      <span
                      className="mp-shimmer relative block h-full overflow-hidden rounded-sm bg-accent"
                      style={{ width: `${creator.score}%` }} />
                    
                    </span>
                    <span className="text-[10.5px] font-bold text-accent">
                      {creator.score}% match
                    </span>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* ROAS card */}
      <div
        className="mp-float-down absolute -bottom-6 -left-6 w-[176px] rounded-2xl border border-hairline bg-surface p-4 shadow-card lg:-left-10"
        style={{ ['--mp-rot' as string]: 'rotate(-3deg)', transform: 'rotate(-3deg)' }}>
        
        <p className="text-[23px] font-extrabold tracking-[-0.02em] text-ink">
          2.4<span className="text-accent">x</span>
        </p>
        <p className="mt-0.5 text-[10.5px] font-medium text-subtle">
          average ROAS
        </p>
        <div className="mt-2 flex h-5 items-end gap-[3px]" aria-hidden="true">
          {roasBars.map((bar, i) =>
          <span
            key={i}
            className={`w-[5px] rounded-sm ${
            bar.on ? 'bg-accent' : 'bg-hairline'}`
            }
            style={{ height: `${bar.height}%` }} />

          )}
        </div>
      </div>

      {/* Creator count card */}
      <div
        className="mp-float-up absolute -right-4 -top-4 flex items-center gap-2 rounded-[14px] border border-hairline bg-surface px-3.5 py-2.5 shadow-chip lg:-right-6"
        style={{ ['--mp-rot' as string]: 'rotate(2deg)', transform: 'rotate(2deg)' }}>
        
        <span className="flex items-center" aria-hidden="true">
          {['#C4B5FD', '#A78BFA', '#8B5CF6'].map((tone, i) =>
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
          <span className="text-[12.5px] font-bold text-ink">18,000+</span>
          <span className="text-[10px] font-medium text-faint">
            vetted creators
          </span>
        </span>
      </div>
    </div>);

}
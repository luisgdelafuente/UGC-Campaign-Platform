import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function LogoStrip() {
  const { t } = useLanguage();

  return (
    <div className="w-full border-y border-hairline bg-surface">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-5 lg:px-12">
        <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.02em] text-faint">
          {t.logoStrip.label}
        </span>
        {t.logoStrip.logos.map((logo) =>
        <span
          key={logo}
          className="text-[14.5px] font-bold tracking-[-0.01em] text-faint">
          
            {logo}
          </span>
        )}
      </div>
    </div>);

}
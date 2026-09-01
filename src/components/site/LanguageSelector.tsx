import React from 'react';
import { GlobeIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../types/content';

const options: {value: Language;short: string;label: string;}[] = [
{ value: 'en', short: 'EN', label: 'English' },
{ value: 'es', short: 'ES', label: 'Español' }];


interface LanguageSelectorProps {
  variant?: 'inline' | 'block';
}

export function LanguageSelector({ variant = 'inline' }: LanguageSelectorProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.header.languageLabel}
      className={`flex h-9 items-center gap-1 rounded-full border border-hairline bg-surface p-0.5 ${
      variant === 'block' ? 'w-fit' : ''}`
      }>
      
      <GlobeIcon className="ml-2 h-3.5 w-3.5 text-faint" aria-hidden="true" />
      {options.map((option) =>
      <button
        key={option.value}
        type="button"
        onClick={() => setLang(option.value)}
        aria-pressed={lang === option.value}
        title={option.label}
        className={`rounded-full px-2.5 py-1 text-[12px] font-bold tracking-[0.02em] transition-colors duration-150 ease-out ${
        lang === option.value ?
        'bg-solid text-onSolid' :
        'text-subtle hover:text-ink'}`
        }>
        
          {option.short}
          <span className="sr-only"> — {option.label}</span>
        </button>
      )}
    </div>);

}
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { en, SiteCopy } from '../data/copy/en';
import { es } from '../data/copy/es';
import { Language, UgcClip } from '../types/content';

const bundles: Record<Language, SiteCopy> = { en, es };

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: SiteCopy;
  clipById: (id?: string) => UgcClip | undefined;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  initialLanguage?: Language;
  children: React.ReactNode;
}

export function LanguageProvider({
  initialLanguage = 'en',
  children
}: LanguageProviderProps) {
  const [lang, setLang] = useState<Language>(initialLanguage);
  const t = bundles[lang];

  const clipById = useCallback(
    (id?: string) => id ? t.clips.find((clip) => clip.id === id) : undefined,
    [t]
  );

  const value = useMemo(
    () => ({ lang, setLang, t, clipById }),
    [lang, t, clipById]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>);

}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return ctx;
}
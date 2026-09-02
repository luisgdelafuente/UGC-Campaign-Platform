import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState } from
'react';
import { en, SiteCopy } from '../data/copy/en';
import { es } from '../data/copy/es';
import { Language, UgcClip } from '../types/content';

const bundles: Record<Language, SiteCopy> = { en, es };

const STORAGE_KEY = 'ugc-lang';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: SiteCopy;
  clipById: (id?: string) => UgcClip | undefined;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Guarded because localStorage throws in private-mode Safari and inside
 *  sandboxed frames; an unreadable store just means "use the default". */
function readStoredLanguage(): Language | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'es' ? stored : null;
  } catch {
    return null;
  }
}

interface LanguageProviderProps {
  initialLanguage?: Language;
  children: ReactNode;
}

export function LanguageProvider({
  initialLanguage = 'en',
  children
}: LanguageProviderProps) {
  const [lang, setLangState] = useState<Language>(
    () => readStoredLanguage() ?? initialLanguage
  );
  const t = bundles[lang];

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* preference just does not survive the refresh */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const clipById = useCallback(
    (id?: string) => id ? t.clips.find((clip) => clip.id === id) : undefined,
    [t]
  );

  const value = useMemo(
    () => ({ lang, setLang, t, clipById }),
    [lang, setLang, t, clipById]
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

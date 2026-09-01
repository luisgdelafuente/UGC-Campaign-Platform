import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

interface ThemeToggleProps {
  variant?: 'inline' | 'block';
}

export function ThemeToggle({ variant = 'inline' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? t.header.themeLight : t.header.themeDark}
      title={isDark ? t.header.themeLight : t.header.themeDark}
      className={`flex h-9 items-center justify-center rounded-full border border-hairline bg-surface text-subtle transition-colors duration-150 ease-out hover:border-ink/30 hover:text-ink ${
      variant === 'block' ? 'gap-2 px-4' : 'w-9'}`
      }>
      
      {isDark ?
      <SunIcon className="h-4 w-4" aria-hidden="true" /> :

      <MoonIcon className="h-4 w-4" aria-hidden="true" />
      }
      {variant === 'block' &&
      <span className="text-[12.5px] font-semibold">
          {isDark ? t.header.themeLight : t.header.themeDark}
        </span>
      }
    </button>);

}
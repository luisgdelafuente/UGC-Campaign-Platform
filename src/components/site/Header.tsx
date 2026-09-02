import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../../contexts/LanguageContext';

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const { t } = useLanguage();

  const isActive = (to: string) =>
  to.startsWith('/#') ? false : pathname.startsWith(to);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-surface supports-[backdrop-filter]:bg-surface/90 supports-[backdrop-filter]:backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-10">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {t.nav.map((link) =>
            <Link
              key={link.label}
              to={link.to}
              aria-current={isActive(link.to) ? 'page' : undefined}
              className={`text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-150 ease-out hover:text-ink ${
              isActive(link.to) ? 'text-ink' : 'text-body'}`
              }>
              
                {link.label}
              </Link>
            )}
          </nav>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />
          <ThemeToggle />
          <Link
            to="/#pricing"
            className="ml-1 text-[13.5px] font-medium text-body transition-colors duration-150 ease-out hover:text-ink">
            
            {t.header.pricing}
          </Link>
          <Button to="/#demo">{t.header.cta}</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline text-ink transition-colors duration-150 ease-out hover:border-ink/30">
            
            {open ?
            <XIcon className="h-5 w-5" aria-hidden="true" /> :

            <MenuIcon className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            onClick={() => setOpen(false)}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-[#0B0B0B]/50 lg:hidden"
            aria-hidden="true" />
          
            <motion.div
            key="panel"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-hairline bg-surface px-6 pb-8 pt-4 shadow-card lg:hidden">
            
              <nav aria-label="Mobile" className="flex flex-col">
                {t.nav.map((link) =>
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`border-b border-hairline py-4 text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-150 ease-out ${
                isActive(link.to) ? 'text-accent' : 'text-ink'}`
                }>
                
                    {link.label}
                  </Link>
              )}
              </nav>

              <div className="mt-7 flex flex-col gap-3">
                <Button to="/#demo" size="md" className="w-full">
                  {t.header.cta}
                </Button>
                <Button
                to="/#pricing"
                variant="secondary"
                size="md"
                className="w-full">
                
                  {t.header.pricing}
                </Button>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <span className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-faint">
                  {t.header.languageLabel}
                </span>
                <LanguageSelector variant="block" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-faint">
                  {t.header.themeLabel}
                </span>
                <ThemeToggle variant="block" />
              </div>

              <p className="mt-6 text-[13px] leading-relaxed text-subtle">
                {t.header.mobileNote}
              </p>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}
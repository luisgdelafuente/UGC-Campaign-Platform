import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { navLinks } from '../../data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const isActive = (to: string) =>
  to.startsWith('/#') ? false : pathname.startsWith(to);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Close on Escape, lock body scroll while open
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
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-10">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) =>
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

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/#pricing"
            className="text-[13.5px] font-medium text-body transition-colors duration-150 ease-out hover:text-ink">
            
            Precios
          </Link>
          <Button to="/#demo">Contactar</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline text-ink transition-colors duration-150 ease-out hover:border-ink/25 lg:hidden">
          
          {open ?
          <XIcon className="h-5 w-5" aria-hidden="true" /> :

          <MenuIcon className="h-5 w-5" aria-hidden="true" />
          }
        </button>
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
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-ink/40 lg:hidden"
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
                {navLinks.map((link) =>
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
                  Contactar
                </Button>
                <Button
                to="/#pricing"
                variant="secondary"
                size="md"
                className="w-full">
                
                  Precios
                </Button>
              </div>

              <p className="mt-6 text-[13px] leading-relaxed text-subtle">
                +500 creadores en la red · España y LATAM · activación en 48h.
              </p>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}
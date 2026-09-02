import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/** Keeps scroll position sane across client-side navigation:
 *  - `/#section` links scroll smoothly to the anchor;
 *  - a new page starts at the top, jumping rather than smooth-scrolling the
 *    whole document (html has `scroll-behavior: smooth`, which would
 *    otherwise animate through every section on a route change);
 *  - back/forward is left to the browser's own scroll restoration. */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      // getElementById rather than querySelector: a hash such as "#1" is a
      // valid fragment but an invalid CSS selector, and querySelector would
      // throw and take the page down with it.
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        // Wait a frame so the freshly mounted route is laid out before we
        // measure the anchor's position.
        const raf = window.requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => window.cancelAnimationFrame(raf);
      }
    }

    if (navigationType === 'POP') return;

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash, navigationType]);

  return null;
}

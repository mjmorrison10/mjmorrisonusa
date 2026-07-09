import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll on navigation, so every route change used
// to inherit the previous page's scroll position. On each navigation: if the
// location has a #hash naming a real element, scroll to it after paint
// (scrollIntoView respects the target's scroll-mt-* offset for the fixed nav);
// otherwise start the new page at the top.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const align = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
        else window.scrollTo(0, 0);
      };
      // Two frames: let the new route render before measuring the target —
      // then re-align once more after fonts/images settle the layout.
      requestAnimationFrame(() => requestAnimationFrame(align));
      const t = setTimeout(align, 300);
      return () => clearTimeout(t);
    } else {
      window.scrollTo(0, 0);
      // Re-assert after paint: the page-transition/layout settle can nudge
      // scroll by a few dozen px right after navigation.
      requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, 0)));
      const t = setTimeout(() => window.scrollTo(0, 0), 300);
      return () => clearTimeout(t);
    }
  }, [pathname, hash]);

  return null;
}

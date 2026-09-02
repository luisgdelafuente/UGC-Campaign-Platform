import { SiteLayout } from '../components/site/SiteLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../contexts/LanguageContext';

/** Catch-all for URLs that no route matches. Netlify rewrites every unknown
 *  path to index.html so the router — not the CDN — has to answer for them;
 *  without this route those URLs render a blank page. */
export function NotFound() {
  const { t } = useLanguage();
  const copy = t.notFoundPage;

  return (
    <SiteLayout>
      <Section className="py-32 text-center">
        <p className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-faint">
          {copy.eyebrow}
        </p>
        <h1 className="mt-3 text-[32px] font-extrabold tracking-display text-ink sm:text-[40px]">
          {copy.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          {copy.text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="md">
            {copy.homeCta}
          </Button>
          <Button to="/blog" variant="secondary" size="md">
            {copy.blogCta}
          </Button>
        </div>
      </Section>
    </SiteLayout>);

}

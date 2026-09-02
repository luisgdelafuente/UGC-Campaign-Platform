import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { PageHero } from '../components/site/PageHero';
import { Section } from '../components/ui/Section';
import { VideoTile } from '../components/ui/VideoTile';
import { useLanguage } from '../contexts/LanguageContext';

export function Blog() {
  const { t, clipById } = useLanguage();
  const copy = t.blogPage;
  const [featured, ...rest] = t.posts;
  const featuredClip = clipById(featured.clipId);

  return (
    <SiteLayout>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />

      <Section className="py-16 lg:py-20">
        <article className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="text-[12.5px] font-semibold text-accent">
              {featured.category}
            </p>
            <h2 className="mt-4 max-w-xl text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[38px]">
              <Link
                to={`/blog/${featured.slug}`}
                className="transition-colors duration-150 ease-out hover:text-accent">
                
                {featured.title}
              </Link>
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-muted">
              {featured.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <img
                src={featured.author.avatar}
                alt=""
                className="h-9 w-9 rounded-full object-cover" />
              
              <span className="text-[13px] text-subtle">
                <span className="font-semibold text-ink">
                  {featured.author.name}
                </span>{' '}
                · {featured.date} · {featured.readTime}
              </span>
            </div>
            <Link
              to={`/blog/${featured.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
              
              {copy.readLink}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={featured.cover}
              alt=""
              className="hidden h-72 flex-1 rounded-3xl object-cover sm:block" />
            
            {featuredClip &&
            <VideoTile
              clip={featuredClip}
              className="w-40 shrink-0 sm:w-44"
              showMetric={false} />

            }
          </div>
        </article>
      </Section>

      <Section className="border-t border-hairline bg-surface py-20">
        <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-faint">
          {copy.moreTitle}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {rest.map((post) =>
          <article key={post.slug} className="flex flex-col">
              <Link to={`/blog/${post.slug}`} className="group block">
                <img
                src={post.cover}
                alt=""
                className="h-52 w-full rounded-2xl object-cover" />
              
                <p className="mt-5 text-[12.5px] font-semibold text-accent">
                  {post.category}
                </p>
                <h3 className="mt-2 text-[21px] font-bold leading-snug tracking-[-0.02em] text-ink transition-colors duration-150 ease-out group-hover:text-accent">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <img
                src={post.author.avatar}
                alt=""
                className="h-8 w-8 rounded-full object-cover" />
              
                <span className="text-[12.5px] text-subtle">
                  {post.author.name} · {post.date} · {post.readTime}
                </span>
              </div>
            </article>
          )}
        </div>
      </Section>
    </SiteLayout>);

}
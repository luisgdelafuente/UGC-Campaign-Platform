import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { SiteLayout } from '../components/site/SiteLayout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { VideoTile } from '../components/ui/VideoTile';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogPost() {
  const { slug } = useParams<{slug: string;}>();
  const { t, clipById } = useLanguage();
  const copy = t.postPage;
  const post = t.posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <SiteLayout>
        <Section className="py-32 text-center">
          <h1 className="text-[28px] font-extrabold tracking-display text-ink">
            {copy.notFoundTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-muted">
            {copy.notFoundText}
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/blog" size="md">
              {copy.notFoundCta}
            </Button>
          </div>
        </Section>
      </SiteLayout>);

  }

  const clip = clipById(post.clipId);
  const others = t.posts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <SiteLayout>
      <article>
        <Section className="border-b border-hairline pb-14 pt-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-subtle transition-colors duration-150 ease-out hover:text-ink">
            
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            {copy.back}
          </Link>
          <p className="mt-8 text-[12.5px] font-semibold text-accent">
            {post.category}
          </p>
          <h1 className="mt-3 max-w-3xl text-[36px] font-extrabold leading-[1.08] tracking-display text-ink sm:text-[46px]">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <img
              src={post.author.avatar}
              alt=""
              className="h-10 w-10 rounded-full object-cover" />
            
            <span className="text-[13.5px] text-subtle">
              <span className="font-semibold text-ink">{post.author.name}</span>
              {', '}
              {post.author.role} · {post.date} · {post.readTime}
            </span>
          </div>
        </Section>

        <Section className="py-14">
          <img
            src={post.cover}
            alt=""
            className="h-72 w-full rounded-3xl object-cover lg:h-[420px]" />
          

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-[19px] font-medium leading-[1.6] text-ink">
                {post.excerpt}
              </p>
              {post.body.map((block, i) =>
              <div key={i} className="mt-9">
                  {block.heading &&
                <h2 className="mb-3 text-[21px] font-bold tracking-[-0.02em] text-ink">
                      {block.heading}
                    </h2>
                }
                  <p className="text-[16px] leading-[1.7] text-muted">
                    {block.text}
                  </p>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              {clip &&
              <>
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.08em] text-faint">
                    {copy.exampleAsset}
                  </h2>
                  <VideoTile clip={clip} className="mt-4" />
                </>
              }
              <div className="mt-8 rounded-2xl border border-hairline bg-surface p-6">
                <p className="text-[14.5px] leading-relaxed text-muted">
                  {copy.ctaText}
                </p>
                <Button to="/#demo" size="md" className="mt-5 w-full">
                  {copy.ctaButton}
                </Button>
              </div>
            </aside>
          </div>
        </Section>
      </article>

      <Section className="border-t border-hairline bg-surface py-16">
        <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-faint">
          {copy.keepReading}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {others.map((item) =>
          <Link
            key={item.slug}
            to={`/blog/${item.slug}`}
            className="group flex items-center justify-between gap-6 rounded-2xl border border-hairline bg-canvas p-6 transition-colors duration-150 ease-out hover:border-ink/20">
            
              <span>
                <span className="block text-[12.5px] font-semibold text-accent">
                  {item.category}
                </span>
                <span className="mt-2 block text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
                  {item.title}
                </span>
              </span>
              <ArrowRightIcon
              className="h-5 w-5 shrink-0 text-subtle transition-transform duration-150 ease-out group-hover:translate-x-1"
              aria-hidden="true" />
            
            </Link>
          )}
        </div>
      </Section>
    </SiteLayout>);

}
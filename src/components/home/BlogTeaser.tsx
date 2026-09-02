import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { useLanguage } from '../../contexts/LanguageContext';

export function BlogTeaser() {
  const { t } = useLanguage();
  const copy = t.blogTeaser;

  return (
    <Section
      id="blog"
      labelledBy="blog-heading"
      className="border-t border-hairline bg-canvas py-24 lg:py-28">
      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2
            id="blog-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            {copy.heading}
          </h2>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-150 ease-out hover:text-ink">
          
          {copy.link}
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {t.posts.map((post) =>
        <article key={post.slug} className="flex flex-col">
            <Link to={`/blog/${post.slug}`} className="group block">
              <img
              src={post.cover}
              alt=""
              className="h-44 w-full rounded-2xl object-cover" />
            
              <p className="mt-5 text-[12.5px] font-semibold text-accent">
                {post.category}
              </p>
              <h3 className="mt-2 text-[18px] font-bold leading-snug tracking-[-0.02em] text-ink transition-colors duration-150 ease-out group-hover:text-accent">
                {post.title}
              </h3>
            </Link>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <p className="mt-auto pt-5 text-[12.5px] text-faint">
              {post.date} · {post.readTime}
            </p>
          </article>
        )}
      </div>
    </Section>);

}
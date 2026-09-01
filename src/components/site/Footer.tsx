import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const columns = [
{
  title: 'Platform',
  links: [
  { label: 'Campaign briefs', to: '/#platform' },
  { label: 'Creator matching', to: '/#platform' },
  { label: 'Rights & compliance', to: '/#platform' },
  { label: 'Performance intelligence', to: '/#platform' }]

},
{
  title: 'Who it is for',
  links: [
  { label: 'Brands', to: '/#audiences' },
  { label: 'Creators', to: '/#audiences' },
  { label: 'Agencies', to: '/#audiences' },
  { label: 'Pricing', to: '/#pricing' }]

},
{
  title: 'Company',
  links: [
  { label: 'About us', to: '/about' },
  { label: 'Case studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/about' }]

},
{
  title: 'Resources',
  links: [
  { label: 'UGC benchmark report', to: '/blog' },
  { label: 'Creative research', to: '/blog/ugc-hooks-that-hold' },
  { label: 'Brief templates', to: '/blog' },
  { label: 'Help centre', to: '/blog' }]

}];


export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[220px] text-[13.5px] leading-relaxed text-subtle">
              The operating system for user-generated content campaigns.
            </p>
          </div>
          {columns.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-faint">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="text-[13.5px] text-body transition-colors duration-150 ease-out hover:text-ink">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-faint">
            © {new Date().getFullYear()} UGCFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Creator agreement'].map((link) =>
            <Link
              key={link}
              to="/"
              className="text-[12.5px] text-faint transition-colors duration-150 ease-out hover:text-ink">
              
                {link}
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>);

}
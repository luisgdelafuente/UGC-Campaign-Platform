import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Section, Eyebrow } from '../ui/Section';
import { Button } from '../ui/Button';
import { pricingTiers, testimonials } from '../../data/site';

export function Pricing() {
  const quote = testimonials[1];

  return (
    <Section
      id="pricing"
      labelledBy="pricing-heading"
      className="border-y border-hairline bg-surface py-24 lg:py-28">
      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>Precios</Eyebrow>
          <h2
            id="pricing-heading"
            className="mt-3 text-[32px] font-extrabold leading-[1.1] tracking-display text-ink sm:text-[40px]">
            
            Nuestra oferta para marcas
          </h2>
        </div>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-muted">
          Tres planes con precio cerrado. Precios sin IVA; la inversión en paid
          (Meta, TikTok) nunca está incluida.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) =>
        <article
          key={tier.name}
          className={`flex flex-col rounded-3xl p-8 ${
          tier.featured ?
          'bg-ink text-white' :
          'border border-hairline bg-canvas'}`
          }>
          
            <div className="flex items-center justify-between">
              <h3
              className={`text-sm font-bold uppercase tracking-[0.06em] ${
              tier.featured ? 'text-accent-300' : 'text-faint'}`
              }>
              
                {tier.name}
              </h3>
              {tier.featured &&
            <span className="rounded-full bg-accent-bright px-2.5 py-1 text-[11px] font-semibold text-ink">
                  El más elegido
                </span>
            }
            </div>

            <p className="mt-6 flex items-baseline gap-2">
              <span
              className={`text-[36px] font-extrabold tracking-display ${
              tier.featured ? 'text-white' : 'text-ink'}`
              }>
              
                {tier.price}
              </span>
              <span
              className={`text-[13px] ${
              tier.featured ? 'text-white/60' : 'text-subtle'}`
              }>
              
                {tier.cadence}
              </span>
            </p>

            <p
            className={`mt-3 text-[14px] leading-relaxed ${
            tier.featured ? 'text-white/70' : 'text-muted'}`
            }>
            
              {tier.text}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {tier.features.map((feature) =>
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-[14px] ${
              tier.featured ? 'text-white/85' : 'text-body'}`
              }>
              
                  <CheckIcon
                className={`mt-0.5 h-4 w-4 shrink-0 ${
                tier.featured ? 'text-accent-300' : 'text-accent'}`
                }
                aria-hidden="true" />
              
                  {feature}
                </li>
            )}
            </ul>

            <div className="mt-auto pt-9">
              <Button
              href="#demo"
              size="md"
              variant={tier.featured ? 'primary' : 'secondary'}
              className="w-full">
              
                {tier.cta}
              </Button>
            </div>
          </article>
        )}
      </div>

      <figure className="mt-14 flex flex-col gap-6 border-t border-hairline pt-10 lg:flex-row lg:items-center lg:gap-12">
        <blockquote className="max-w-3xl text-[19px] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
          “{quote.quote}”
        </blockquote>
        <figcaption className="flex shrink-0 items-center gap-3">
          <img
            src={quote.avatar}
            alt=""
            className="h-10 w-10 rounded-full object-cover" />
          
          <span className="flex flex-col">
            <span className="text-sm font-semibold text-ink">{quote.name}</span>
            <span className="text-[13px] text-subtle">{quote.role}</span>
          </span>
        </figcaption>
      </figure>
    </Section>);

}
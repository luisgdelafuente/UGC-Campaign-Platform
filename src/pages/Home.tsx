import React from 'react';
import { SiteLayout } from '../components/site/SiteLayout';
import { Hero } from '../components/home/Hero';
import { LogoStrip } from '../components/home/LogoStrip';
import { ContentWall } from '../components/home/ContentWall';
import { Audiences } from '../components/home/Audiences';
import { Workflow } from '../components/home/Workflow';
import { Platform } from '../components/home/Platform';
import { CaseStudies } from '../components/home/CaseStudies';
import { Expertise } from '../components/home/Expertise';
import { Pricing } from '../components/home/Pricing';
import { Faq } from '../components/home/Faq';
import { BlogTeaser } from '../components/home/BlogTeaser';
import { DemoCta } from '../components/home/DemoCta';

interface HomeProps {
  showPricing?: boolean;
  showLogoStrip?: boolean;
}

export function Home({ showPricing = true, showLogoStrip = true }: HomeProps) {
  return (
    <SiteLayout>
      <Hero />
      {showLogoStrip && <LogoStrip />}
      <ContentWall />
      <Audiences />
      <Workflow />
      <Platform />
      <CaseStudies />
      <Expertise />
      {showPricing && <Pricing />}
      <Faq />
      <BlogTeaser />
      <DemoCta />
    </SiteLayout>);

}
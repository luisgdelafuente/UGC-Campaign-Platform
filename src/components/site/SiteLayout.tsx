import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-canvas">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>);

}
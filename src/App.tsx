import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToHash } from './components/site/ScrollToHash';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

interface AppProps {
  showPricing?: boolean;
  showLogoStrip?: boolean;
}

export function App({ showPricing = true, showLogoStrip = true }: AppProps) {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
          <Home showPricing={showPricing} showLogoStrip={showLogoStrip} />
          } />
        
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>);

}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollToHash } from './components/site/ScrollToHash';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { CaseStudies } from './pages/CaseStudies';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

interface AppProps {
  language?: 'en' | 'es';
  theme?: 'light' | 'dark';
  showPricing?: boolean;
  showLogoStrip?: boolean;
}

export function App({
  language = 'en',
  theme = 'dark',
  showPricing = true,
  showLogoStrip = true
}: AppProps) {
  return (
    <ThemeProvider initialTheme={theme}>
      <LanguageProvider initialLanguage={language}>
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
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>);

}
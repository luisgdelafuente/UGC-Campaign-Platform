export type Language = 'en' | 'es';

export interface UgcClip {
  id: string;
  creator: string;
  niche: string;
  platform: 'TikTok' | 'Reels' | 'Shorts';
  metric: string;
  metricLabel: string;
  poster: string;
  src: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  cover: string;
  stats: {value: string;label: string;}[];
  quote: {text: string;name: string;role: string;};
  clipIds: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {name: string;role: string;avatar: string;};
  cover: string;
  clipId?: string;
  body: {heading?: string;text: string;}[];
}

export interface Audience {
  key: 'brands' | 'creators' | 'agencies';
  tab: string;
  headline: string;
  description: string;
  bullets: {title: string;text: string;}[];
  cta: string;
  metric: {value: string;label: string;};
}
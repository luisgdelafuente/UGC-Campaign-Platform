export const navLinks = [
{ label: 'Platform', to: '/#platform' },
{ label: 'Who it is for', to: '/#audiences' },
{ label: 'Case Studies', to: '/case-studies' },
{ label: 'Blog', to: '/blog' },
{ label: 'About', to: '/about' },
{ label: 'Pricing', to: '/#pricing' }];


export const partnerLogos = [
'NORTHWIND',
'Glowbrand',
'Moveline',
'STUDIO/11',
'Verdant'];


export const matchedCreators = [
{ name: 'Maya R.', niche: 'Beauty & Skincare', score: 98, tone: '#C4B5FD' },
{ name: 'Jordan K.', niche: 'Lifestyle', score: 95, tone: '#A78BFA' },
{ name: 'Ade O.', niche: 'Fitness & Wellness', score: 93, tone: '#8B5CF6' },
{ name: 'Priya S.', niche: 'Skincare', score: 91, tone: '#5B2BFF' }];


export type AudienceKey = 'brands' | 'creators' | 'agencies';

export interface Audience {
  key: AudienceKey;
  tab: string;
  headline: string;
  description: string;
  bullets: {title: string;text: string;}[];
  cta: string;
  metric: {value: string;label: string;};
}

export const audiences: Audience[] = [
{
  key: 'brands',
  tab: 'For Brands',
  headline: 'Ship a month of creative in a week',
  description:
  'Write one brief, get matched with vetted creators who already perform in your category, and approve everything in a single review queue.',
  bullets: [
  {
    title: 'Category-trained matching',
    text: 'Ranked shortlists built from performance history, not follower counts.'
  },
  {
    title: 'One review queue',
    text: 'Scripts, cuts and revisions approved in-platform with full version history.'
  },
  {
    title: 'Usage rights handled',
    text: 'Licensing, whitelisting and paid usage terms signed before the first shoot.'
  }],

  cta: 'See the brand workflow',
  metric: { value: '11 days', label: 'average brief-to-asset turnaround' }
},
{
  key: 'creators',
  tab: 'For Creators',
  headline: 'Real briefs, clear rates, paid on time',
  description:
  'Get matched to campaigns that fit what you actually make. Rates and usage are visible before you apply, and payouts clear within 72 hours of approval.',
  bullets: [
  {
    title: 'No pitching into the void',
    text: 'Briefs come to you with budget, deliverables and usage stated upfront.'
  },
  {
    title: 'Feedback in one place',
    text: 'One thread per deliverable, so revisions never arrive by scattered DM.'
  },
  {
    title: '72-hour payouts',
    text: 'Automatic invoicing and escrowed budgets in 40+ currencies.'
  }],

  cta: 'Join the creator network',
  metric: { value: '72 hours', label: 'average time to payout' }
},
{
  key: 'agencies',
  tab: 'For Agencies',
  headline: 'Run every client from one control room',
  description:
  'Multi-client workspaces, white-label reporting and pooled creator rosters — so you scale output without scaling headcount.',
  bullets: [
  {
    title: 'Multi-client workspaces',
    text: 'Separate budgets, brand rules and rosters under a single agency login.'
  },
  {
    title: 'White-label reporting',
    text: 'Client-ready performance decks generated from live campaign data.'
  },
  {
    title: 'Margin protection',
    text: 'Cost, markup and profitability visible on every campaign line.'
  }],

  cta: 'See the agency workspace',
  metric: { value: '4.6x', label: 'output per account manager' }
}];


export const workflowSteps = [
{
  step: '01',
  title: 'Brief',
  text: 'Describe the campaign once. Objectives, platforms, budget and usage rights are turned into a structured brief creators can actually act on.',
  detail: 'Average 6 minutes to publish'
},
{
  step: '02',
  title: 'Match',
  text: 'Our matching model ranks the network on category performance, audience overlap and past delivery reliability — not vanity metrics.',
  detail: '18,000+ vetted creators scored'
},
{
  step: '03',
  title: 'Produce',
  text: 'Scripts, shoots, revisions and approvals run in one thread with version history, so nothing lives in a spreadsheet or a DM.',
  detail: '2 revision rounds included'
},
{
  step: '04',
  title: 'Measure',
  text: 'Every asset carries a tracked ID, so spend, ROAS and creative-level performance feed straight back into the next brief.',
  detail: 'Connected to Meta, TikTok & GA4'
}];


export const platformFeatures = {
  primary: {
    title: 'Matching model trained on 2.1M delivered assets',
    text: 'Every brief is scored against real delivery history — completion rates, revision counts and paid performance by category and market. Shortlists arrive ranked, with the reasoning shown, so your team makes the call instead of the algorithm making it quietly.',
    points: [
    'Category and market-level performance signals',
    'Brand-safety and past-collaboration screening',
    'Explainable scores your client can read']

  },
  secondary: [
  {
    title: 'Rights and compliance built in',
    text: 'Usage windows, whitelisting and disclosure requirements are attached to the asset itself and enforced at export.'
  },
  {
    title: 'Creative performance intelligence',
    text: 'Hook, format and length broken out per asset, so the next brief starts from evidence rather than instinct.'
  }]

};

export const caseStudies = {
  featured: {
    brand: 'Glowbrand',
    sector: 'Skincare · DTC',
    title: 'From 12 assets a quarter to 140 a month',
    text: 'Glowbrand replaced a three-agency creative chain with a single always-on UGC pipeline, cutting cost per asset by 61% while lifting paid social ROAS across every market.',
    image: "/610758d7-afc6-465b-b0cb-ad07cf2cf1a7.jpg",

    stats: [
    { value: '3.1x', label: 'paid social ROAS' },
    { value: '-61%', label: 'cost per asset' },
    { value: '140', label: 'assets per month' }]

  },
  supporting: [
  {
    brand: 'Moveline',
    sector: 'Fitness apps',
    title: 'Nine markets launched from one brief',
    stat: '9 markets',
    statLabel: 'launched in 5 weeks'
  },
  {
    brand: 'STUDIO/11',
    sector: 'Independent agency',
    title: 'Doubled client output without new hires',
    stat: '2.0x',
    statLabel: 'output per account manager'
  }]

};

export const expertiseStats = [
{ value: '9 years', label: 'running creator campaigns' },
{ value: '2.1M', label: 'assets delivered to date' },
{ value: '43', label: 'markets covered' },
{ value: '400+', label: 'brands and agencies' }];


export const testimonials = [
{
  quote:
  'We stopped treating UGC as a side channel. It is now the majority of our paid creative, and it is the only part of the funnel where cost per asset goes down while performance goes up.',
  name: 'Elena Marchetti',
  role: 'VP Growth, Glowbrand',
  avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

},
{
  quote:
  'The reporting is the part clients notice. We hand over a live view instead of a monthly deck, and renewals stopped being a conversation about proof.',
  name: 'Tomas Herrera',
  role: 'Managing Partner, STUDIO/11',
  avatar: "/f85a11ee-9d16-4b8e-8b2e-1c3da04bb733.jpg"

}];


export const pricingTiers = [
{
  name: 'Launch',
  price: '€1,200',
  cadence: 'per month',
  text: 'For brands testing UGC as a paid social channel.',
  features: [
  'Up to 20 assets per month',
  '1 brand workspace',
  'Standard usage rights',
  'Email support'],

  cta: 'Start with Launch',
  featured: false
},
{
  name: 'Scale',
  price: '€3,800',
  cadence: 'per month',
  text: 'For teams running always-on campaigns across markets.',
  features: [
  'Up to 120 assets per month',
  'Unlimited briefs and workspaces',
  'Paid usage and whitelisting',
  'Performance intelligence suite',
  'Dedicated campaign strategist'],

  cta: 'Book a demo',
  featured: true
},
{
  name: 'Agency',
  price: 'Custom',
  cadence: 'annual',
  text: 'For agencies managing UGC for multiple clients.',
  features: [
  'Unlimited client workspaces',
  'White-label reporting',
  'Margin and cost controls',
  'API and SSO',
  'Named account team'],

  cta: 'Talk to sales',
  featured: false
}];


export const faqs = [
{
  q: 'How are creators vetted?',
  a: 'Every creator completes an identity check, a craft review of past deliverables and a brand-safety screen before joining. After that, their score is maintained by real delivery data: on-time rates, revision counts and paid performance by category.'
},
{
  q: 'Who owns the content we commission?',
  a: 'You do. Usage terms — duration, territories, whitelisting and paid amplification — are agreed inside the brief before production starts and travel with the asset in the library, so nothing is ever exported without valid rights.'
},
{
  q: 'Can we bring our own creators?',
  a: 'Yes. Existing creator relationships can be invited into your workspace and run through the same briefing, approval, rights and payout flows as matched creators, at no extra platform cost.'
},
{
  q: 'How does this fit alongside our agency?',
  a: 'Most brands keep their agency and give them an agency workspace. The agency briefs and reviews, the brand approves budget and rights, and both sides read the same performance data.'
},
{
  q: 'What does onboarding look like?',
  a: 'A strategist runs your first campaign with you end to end — usually live within 10 working days, including workspace setup, brand rules, integrations and the first matched roster.'
}];
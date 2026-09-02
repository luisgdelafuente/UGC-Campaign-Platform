import { VIDEOS, POSTERS, IMAGES, CREATOR_TONES } from '../media';
import { Audience, BlogPost, CaseStudy, UgcClip } from '../../types/content';

const clips: UgcClip[] = [
{
  id: 'clip-skincare',
  creator: '@antonellacomino',
  niche: 'Product & personal care',
  platform: 'TikTok',
  metric: '320k+',
  metricLabel: 'views',
  poster: POSTERS.skincare,
  src: VIDEOS.blazes
},
{
  id: 'clip-fitness',
  creator: '@guille.moves',
  niche: 'Fitness & wellness',
  platform: 'Reels',
  metric: '180+',
  metricLabel: 'sign-ups',
  poster: POSTERS.fitness,
  src: VIDEOS.escapes
},
{
  id: 'clip-unboxing',
  creator: '@marti_fuscaldo',
  niche: 'Retail & product',
  platform: 'Shorts',
  metric: '150+',
  metricLabel: 'UGC pieces',
  poster: POSTERS.unboxing,
  src: VIDEOS.fun
},
{
  id: 'clip-coffee',
  creator: '@iarasekzer',
  niche: 'Hospitality · Madrid',
  platform: 'TikTok',
  metric: '120+',
  metricLabel: 'bookings',
  poster: POSTERS.coffee,
  src: VIDEOS.joyrides
},
{
  id: 'clip-sneakers',
  creator: '@ln.streets',
  niche: 'Fashion & streetwear',
  platform: 'Reels',
  metric: '3K+',
  metricLabel: 'followers',
  poster: POSTERS.sneakers,
  src: VIDEOS.meltdowns
}];


const audiences: Audience[] = [
{
  key: 'brands',
  tab: 'Brands',
  headline: 'Tell us the goal, we run the whole campaign',
  description:
  'Footfall, bookings, sign-ups or sales. We find the creators inside your sector, negotiate, produce and measure what actually happens off-screen.',
  bullets: [
  {
    title: 'Creators from your sector',
    text: 'People who already know the product and speak your category’s language.'
  },
  {
    title: 'One owner per campaign',
    text: 'A named person who approves each piece, holds the timeline and answers you.'
  },
  {
    title: 'One single system',
    text: 'Brief, contract, revisions, publishing and measurement without leaving the platform.'
  }],

  cta: 'See how we work with brands',
  metric: { value: '48h', label: 'to activate your first campaign' }
},
{
  key: 'creators',
  tab: 'Creators',
  headline: 'Brands worth your time, clear terms, protected payment',
  description:
  'Concrete briefs, real creative freedom and a team that answers. You know what is being asked, what it pays and when you get paid before accepting.',
  bullets: [
  {
    title: 'No chasing brands',
    text: 'Offers from your sector arrive with brief, dates and fee stated upfront.'
  },
  {
    title: 'Freedom to create',
    text: 'The brief sets the message, never the way you tell it. Your style stays yours.'
  },
  {
    title: 'Funds held in escrow',
    text: 'Budget is locked before you shoot and released the moment it goes live.'
  }],

  cta: 'Join the creator network',
  metric: { value: '500+', label: 'active creators in the network' }
},
{
  key: 'agencies',
  tab: 'Agencies',
  headline: 'Offer UGC without building a department',
  description:
  'A white-label operation under your name. You keep the client relationship and the strategy; we bring the network, the production and the reporting.',
  bullets: [
  {
    title: 'White label',
    text: 'Deliverables and reporting in your identity. The client stays yours.'
  },
  {
    title: 'Several clients at once',
    text: 'Separate workspaces per account, with independent budgets and rosters.'
  },
  {
    title: 'Margin under control',
    text: 'Cost, markup and profitability visible on every campaign line.'
  }],

  cta: 'See the agency model',
  metric: { value: '200+', label: 'campaigns produced with partners' }
}];


const caseStudies: CaseStudy[] = [
{
  slug: 'swiss-butter',
  brand: 'Swiss Butter',
  sector: 'Hospitality · Madrid',
  title: 'A queue every night from a fully organic campaign',
  summary:
  'An opening sustained over weeks with the city’s food creators: daily content, a launch event with 150 creators and zero spend on paid.',
  challenge:
  'A newly opened restaurant with no customer base, needing to fill Tuesday to Thursday rather than just the weekend.',
  approach:
  'Food creators from Madrid selected on real audience fit, a staggered six-week visit calendar, and an opening event with 150 profiles publishing on the same day.',
  outcome:
  'Over a million organic views and a sustained queue on nights that used to be empty. The content still works as the brand’s asset library.',
  cover: IMAGES.caseSkincare,
  stats: [
  { value: '1M+', label: 'organic views' },
  { value: '200+', label: 'content pieces' },
  { value: '150', label: 'creators at one event' },
  { value: '€0', label: 'spent on paid' }],

  quote: {
    text: 'We went from filling only weekends to a waiting list midweek. The content was made by people from here, not by something that looked like an ad.',
    name: 'Floor management',
    role: 'Swiss Butter, Madrid'
  },
  clipIds: ['clip-coffee', 'clip-skincare', 'clip-unboxing']
},
{
  slug: 'harper-and-bone',
  brand: 'Harper & Bone',
  sector: 'Retail · Barcelona and Madrid',
  title: '250,000 people reached in 15 days',
  summary:
  'Two cities, fifteen days and a roster of fashion creators producing store and product content for both organic and paid.',
  challenge:
  'The brand needed creative volume to sustain paid in two cities without running a studio shoot for every new collection.',
  approach:
  'Parallel rosters in Barcelona and Madrid working from one brief, staggered delivery, and usage rights closed upfront so everything could be amplified.',
  outcome:
  'More than 150 pieces in two weeks, three thousand new followers, and a reusable library for the campaigns that followed.',
  cover: IMAGES.caseFitness,
  stats: [
  { value: '250,000', label: 'people reached' },
  { value: '150+', label: 'UGC pieces produced' },
  { value: '3K+', label: 'new followers' },
  { value: '15', label: 'days of campaign' }],

  quote: {
    text: 'We needed creative at retail speed. In two weeks we had more material than we used to produce in a quarter.',
    name: 'Brand team',
    role: 'Harper & Bone'
  },
  clipIds: ['clip-sneakers', 'clip-unboxing', 'clip-skincare']
},
{
  slug: 'temu',
  brand: 'TEMU',
  sector: 'Ecommerce · Spain and Argentina',
  title: 'UGC managed at scale across two countries at once',
  summary:
  'More than fifty recurring creators a month producing content in two markets in parallel, amplified both organically and through paid.',
  challenge:
  'Scaling content volume without losing control of quality, contracts or deadlines across two countries with very different dynamics.',
  approach:
  'One operating system for both markets: a recurring roster, localised briefs, centralised reviews and escrowed payment per piece.',
  outcome:
  'A stable monthly cadence, predictable cost per piece, and content ready for organic and paid from the first month.',
  cover: IMAGES.team,
  stats: [
  { value: '50+', label: 'recurring creators/month' },
  { value: '2', label: 'countries in parallel' },
  { value: '100%', label: 'pieces with rights closed' },
  { value: 'Org + paid', label: 'amplification' }],

  quote: {
    text: 'Finding creators was never the hard part. Holding the pace month after month in two countries was, and that is exactly what got solved.',
    name: 'Content lead',
    role: 'TEMU Spain and Argentina'
  },
  clipIds: ['clip-unboxing', 'clip-fitness', 'clip-sneakers']
}];


const posts: BlogPost[] = [
{
  slug: 'specialist-creators-cheaper-leads',
  title: 'Why a specialist creator produces cheaper leads',
  excerpt:
  'A creator from your sector lowers cost per lead because the audience is already qualified: fewer impressions, more conversion, less total spend.',
  category: 'Articles',
  date: '31 August 2026',
  readTime: '5 min read',
  author: {
    name: 'Delfina Ruiz',
    role: 'Campaign director',
    avatar: IMAGES.avatarDelfina
  },
  cover: IMAGES.blog1,
  clipId: 'clip-skincare',
  body: [
  {
    text: 'Comparing creators by follower count is the fastest way to overpay. What moves cost per lead is not reach, but how much of that audience genuinely sits inside your category.'
  },
  {
    heading: 'Fewer impressions, better qualified',
    text: 'A generalist profile with a hundred thousand followers may hold a handful of people interested in your product. A specialist with ten thousand may hold half. Cost per impression rises, cost per lead falls.'
  },
  {
    heading: 'The content changes too',
    text: 'Someone who knows the sector explains the product without being told how. They need fewer revision rounds and produce pieces that hold up as ads, not only as organic posts.'
  },
  {
    heading: 'How to apply it in the brief',
    text: 'Define the sector and the moment of consumption first, volume second. Activating twelve niche creators over three months beats one large profile once.'
  }]

},
{
  slug: 'using-ai-to-launch-creator-campaigns',
  title: 'How to use AI to launch a creator campaign',
  excerpt:
  'AI speeds up discovery and first contact, but audience fit and the long-term relationship still decide the result.',
  category: 'Articles',
  date: '28 August 2026',
  readTime: '5 min read',
  author: {
    name: 'Guillermina Sanz',
    role: 'Operations & creator network',
    avatar: IMAGES.avatarGuille
  },
  cover: IMAGES.blog2,
  clipId: 'clip-fitness',
  body: [
  {
    text: 'The automatable part of a creator campaign is larger than it looks, and also duller: scanning profiles, cross-checking audiences, preparing offers and chasing replies.'
  },
  {
    heading: 'What is worth automating',
    text: 'Discovery, fit scoring, first contact and reminders. That is where automation buys real time and stops a campaign depending on one person’s calendar.'
  },
  {
    heading: 'What is not',
    text: 'Choosing who to activate, writing the message and holding the relationship. A creator who feels handled by a system stops bringing ideas, and that is exactly where performance is lost.'
  }]

},
{
  slug: 'does-ugc-work-for-b2b',
  title: 'Does UGC work for B2B and professional services?',
  excerpt:
  'It does, but the formats are nothing like consumer goods: less product, more judgement, process and people.',
  category: 'Articles',
  date: '25 August 2026',
  readTime: '5 min read',
  author: {
    name: 'Delfina Ruiz',
    role: 'Campaign director',
    avatar: IMAGES.avatarDelfina
  },
  cover: IMAGES.blog3,
  clipId: 'clip-unboxing',
  body: [
  {
    text: 'In B2B a recommendation carries more weight than an ad, but the content that works looks nothing like consumer marketing. Nobody unboxes industrial software.'
  },
  {
    heading: 'Formats that do work',
    text: 'Process walkthroughs, honest comparisons, opinions from practitioners in the field, and explanations of why a buying decision was made. Authority before spectacle.'
  },
  {
    heading: 'Who tells it',
    text: 'Technicians, consultants and professionals with small but very specific audiences. Reach matters little when the ticket is high and the sales cycle is long.'
  }]

}];


export const en = {
  label: 'English',
  short: 'EN',
  nav: [
  { label: 'Brands', to: '/#audiences' },
  { label: 'Agencies', to: '/#audiences' },
  { label: 'Creators', to: '/#audiences' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' }],

  header: {
    pricing: 'Pricing',
    cta: 'Get in touch',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageLabel: 'Language',
    themeLabel: 'Appearance',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
    mobileNote: '500+ creators · Spain and LATAM · activation in 48 hours.'
  },
  hero: {
    badge: 'Managed creator marketing',
    titleStart: 'The platform that connects you with creators inside your',
    titleAccent: 'sector',
    lede: 'Every sector has its own people. We find them, activate them and run the whole campaign: contract, delivery, escrowed payment and measurement in one system.',
    primaryCta: 'Tell us about your business',
    secondaryCta: 'See how it works',
    proofValue: '500+',
    proofLabel: 'creators in the network'
  },
  frame: {
    ariaLabel: 'Example campaign plan with proposed creators',
    title: '✦ Your campaign plan',
    tag: 'Example',
    caseLabel: '✦ Real case · Restaurant, Madrid',
    briefLabel: 'The brief we were given →',
    briefQuote:
    '“We are a restaurant in Malasaña and we need to fill tables from Tuesday to Thursday…”',
    chips: ['Visits 24K', 'Bookings/month +120', 'Cost €1,480'],
    creatorsTitle: 'Proposed creators',
    creatorsTag: 'AI + team',
    fitSuffix: 'fit',
    creators: [
    { name: 'Antonella C.', niche: 'Food & dining · Madrid', score: 98, tone: CREATOR_TONES[0] },
    { name: 'Iara S.', niche: 'Lifestyle · Madrid', score: 95, tone: CREATOR_TONES[1] },
    { name: 'Martina F.', niche: 'Retail & fashion', score: 93, tone: CREATOR_TONES[2] },
    { name: 'Guille R.', niche: 'Food reviews', score: 91, tone: CREATOR_TONES[3] }],

    activationValue: '48',
    activationUnit: 'h',
    activationLabel: 'to activate the campaign',
    networkValue: '500+',
    networkLabel: 'creators in the network'
  },
  logoStrip: {
    label: 'Brands that trust us',
    logos: ['SWISS BUTTER', 'Harper & Bone', 'TEMU', 'CASA CARMEN', 'Nordia']
  },
  contentWall: {
    eyebrow: 'From the network',
    heading: 'The work itself, and what happened off-screen',
    lede: 'A sample of pieces produced this month. The number on each clip is the one the business reported, not a vanity metric.',
    footNoteStrong: '200+ campaigns',
    footNote: 'produced across Spain and LATAM since 2019.',
    link: 'See the campaigns behind them'
  },
  audiencesSection: {
    eyebrow: 'One network, three sides',
    heading: 'Brands, agencies and creators in the same system',
    lede: 'Each side works in its own space, but the brief, the reviews and the payments all run on the same information.',
    tablistLabel: 'Choose an audience',
    whatChanges: 'What changes',
    items: audiences
  },
  workflow: {
    eyebrow: 'How it works',
    heading: 'From brief to measured result, without leaving the system',
    steps: [
    {
      step: '01',
      title: 'Brief',
      text: 'You tell us the business and the goal. We turn it into an actionable brief with message, formats, dates and a fixed budget.',
      detail: 'Tailored plan within 48 hours'
    },
    {
      step: '02',
      title: 'Selection',
      text: 'The model proposes profiles from your sector by audience fit and past delivery. The team decides, negotiates and closes the terms.',
      detail: '500+ creators in the network'
    },
    {
      step: '03',
      title: 'Production',
      text: 'Contract, script, revisions and publishing in one thread. A named owner approves every piece before it goes out.',
      detail: 'Payment held until published'
    },
    {
      step: '04',
      title: 'Measurement',
      text: 'We measure what happens off-screen: footfall, bookings, sign-ups and sales. The result feeds the next campaign.',
      detail: 'Organic plus paid amplification'
    }]

  },
  platform: {
    eyebrow: 'What Locals Club is',
    heading: 'A managed service, not self-service',
    primary: {
      title: 'Technology proposes, people decide',
      text: 'Self-service is the category; a managed service is the difference. The technology scans the network, scores sector fit and clears the heavy lifting. Who gets activated, with which message and at which moment is decided by a person who owns your campaign.',
      points: [
      'Fit by sector and market, not by follower count',
      'Delivery history and reliability on every creator',
      'A named owner who approves and answers']

    },
    secondary: [
    {
      title: 'Contracts and escrowed payment',
      text: 'Usage rights, territories and windows signed before anyone shoots. Budget is held and released on publication.'
    },
    {
      title: 'Results, not vanity metrics',
      text: 'Bookings, footfall, sign-ups and attributed sales. Views are the means to get there, never the headline of the report.'
    }]

  },
  casesSection: {
    eyebrow: 'Case studies',
    heading: 'Campaigns measured by what happens off-screen',
    link: 'All case studies',
    featuredImageAlt: 'Product beside a phone playing creator content'
  },
  expertise: {
    eyebrow: 'Experience',
    heading: 'Years of activating creators, turned into a system',
    body: 'We started running campaigns by hand for restaurants and shops, not building a marketplace. Every rule in the system — how a brief is written, how rights are closed, how a creator is scored — comes from campaigns we ran ourselves. There is still a named owner on every account.',
    imageAlt: 'The team reviewing creator content in the studio'
  },
  stats: [
  { value: '500+', label: 'creators in the network' },
  { value: '200+', label: 'campaigns produced' },
  { value: '48h', label: 'to activate a campaign' },
  { value: '2', label: 'regions: Spain and LATAM' }],

  testimonials: [
  {
    quote:
    'Communication is fast and clear, they understand our style and leave room to create naturally. Briefings and timings are organised, so the work happens without stress.',
    name: 'Antonella C.',
    role: 'Creator · @antonellacomino',
    avatar: IMAGES.avatarDelfina
  },
  {
    quote:
    'We contracted a campaign and received a full operation. The client sees bookings, we keep the relationship and the strategy. That is the part we could not offer before.',
    name: 'Tomas Herrera',
    role: 'Managing partner, agency partner',
    avatar: IMAGES.avatarGuille
  }],

  pricing: {
    eyebrow: 'Pricing',
    heading: 'What we offer brands',
    note: 'Three plans with fixed pricing. Prices exclude VAT, and paid media spend on Meta or TikTok is never included.',
    mostChosen: 'Most chosen',
    tiers: [
    {
      name: 'Pilot',
      price: '€1,500',
      cadence: 'one-off',
      text: 'A launch, an opening or a single action with a date attached.',
      features: [
      'Hospitality and product',
      'Up to 50 creators',
      'Six-week duration',
      'Contract and escrowed payment included'],

      cta: 'Start with a pilot',
      featured: false
    },
    {
      name: 'Campaign',
      price: '€2,500',
      cadence: 'per month',
      text: 'Content every month and sustained presence, not one spike and out.',
      features: [
      'Hospitality and product',
      'Up to 50 creators per month',
      'Three-month minimum',
      'Named campaign owner',
      'Monthly results report'],

      cta: 'Get my plan',
      featured: true
    },
    {
      name: 'Custom',
      price: 'On request',
      cadence: 'fixed quote',
      text: 'Multi-city, several markets, or a brief that does not fit a package.',
      features: [
      'Any sector',
      'As many creators as the goal requires',
      'However long the campaign needs',
      'Paid amplification',
      'White-label operation'],

      cta: 'Talk to the team',
      featured: false
    }]

  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'What people ask us before starting',
    lede: 'Anything else, we answer it on the first call.',
    items: [
    {
      q: 'What exactly is Locals Club?',
      a: 'A managed creator campaign service across Spain and LATAM. It is not a marketplace where you browse profiles, and not an influencer database: you tell us what you need to achieve and we handle the brief, selection, negotiation, feedback, publishing and measurement.'
    },
    {
      q: 'What is the difference between a creator and an influencer?',
      a: 'An influencer sells reach; a creator sells content. We work with people who know your sector and produce pieces that hold up both on their own profile and inside your ads, even when their audience is small.'
    },
    {
      q: 'What does a campaign cost?',
      a: 'Three plans with fixed pricing: a one-off pilot from €1,500, monthly continuity from €2,500, and custom campaigns. Prices exclude VAT, and paid media spend on Meta or TikTok is never included.'
    },
    {
      q: 'What results should I expect?',
      a: 'We measure what happens off-screen: visits to the venue, bookings, sign-ups or sales. Before we start we agree the primary indicator and the expected volume of pieces and creators.'
    },
    {
      q: 'Which markets do you work in?',
      a: 'Spain and LATAM, including simultaneous campaigns across countries. Our axis is sector rather than geography: hospitality, retail, fintech, industrial and automotive.'
    }]

  },
  blogTeaser: {
    eyebrow: 'Latest',
    heading: 'The most recent things we have published',
    link: 'See the whole blog'
  },
  demo: {
    eyebrow: 'Start here',
    heading: 'Tell us about your business and we will build the plan',
    lede: 'No endless forms, no commitment. We look at your brand, propose creators from your sector and come back with volume, duration and an estimated budget.',
    bullets: [
    'Tailored plan, free of charge',
    'Activation in 48 hours',
    'Fixed pricing, no surprises'],

    formTitle: 'Get my plan',
    roleLegend: 'I am a',
    roles: ['Brand', 'Agency', 'Creator'],
    emailLabel: 'Contact email',
    emailPlaceholder: 'you@business.com',
    emailError: 'Enter a valid email address.',
    submit: 'Talk to the team',
    submitting: 'Sending…',
    disclaimer: 'Tailored plan · Free and with no commitment.',
    successTitle: 'Request received',
    successBefore: 'We will email',
    successAfter:
    'within 24 hours with a proposed creator roster and an estimated budget.'
  },
  footer: {
    tagline:
    'Campaigns with creators from your sector, managed end to end. Spain and LATAM.',
    rights: 'All rights reserved.',
    legal: ['Privacy', 'Terms', 'Cookie policy'],
    columns: [
    {
      title: 'Service',
      links: [
      { label: 'How it works', to: '/#how-it-works' },
      { label: 'Managed service', to: '/#platform' },
      { label: 'Contracts and payments', to: '/#platform' },
      { label: 'Measurement', to: '/#platform' }]

    },
    {
      title: 'Who it is for',
      links: [
      { label: 'Brands', to: '/#audiences' },
      { label: 'Agencies', to: '/#audiences' },
      { label: 'Creators', to: '/#audiences' },
      { label: 'Pricing', to: '/#pricing' }]

    },
    {
      title: 'Locals',
      links: [
      { label: 'About us', to: '/about' },
      { label: 'Case studies', to: '/case-studies' },
      { label: 'Blog', to: '/blog' },
      { label: 'Get in touch', to: '/#demo' }]

    },
    {
      title: 'Resources',
      links: [
      { label: 'Creators and CPL', to: '/blog/specialist-creators-cheaper-leads' },
      { label: 'AI and campaigns', to: '/blog/using-ai-to-launch-creator-campaigns' },
      { label: 'UGC in B2B', to: '/blog/does-ugc-work-for-b2b' },
      { label: 'All articles', to: '/blog' }]

    }]

  },
  about: {
    eyebrow: 'About us',
    title: 'We were running the campaigns before we built the system',
    lede: 'Locals Club began by managing creators by hand for neighbourhood businesses, not by building a marketplace. Every rule in the system comes from a campaign we had to solve ourselves.',
    primaryCta: 'Tell us about your business',
    secondaryCta: 'Read our story',
    clipsNote:
    'One day of work delivered by the network. After 200+ campaigns, it is still the only thing we care to show.',
    storyEyebrow: 'Our story',
    storyHeading: 'Four moments that got us here',
    storyImageAlt: 'The team reviewing creator videos together',
    timeline: [
    {
      year: '2019',
      title: 'Neighbourhood campaigns',
      text: 'We started activating creators for restaurants in Madrid, on spreadsheets and a lot of manual work.'
    },
    {
      year: '2022',
      title: 'The first system',
      text: 'Structured brief, contract and escrowed payment in one flow. Activation time dropped to days.'
    },
    {
      year: '2024',
      title: 'The model starts proposing',
      text: 'Sector fit began to be scored on our own delivery history rather than on follower counts.'
    },
    {
      year: '2026',
      title: '200+ campaigns produced',
      text: 'More than 500 creators in the network, campaigns across Spain and LATAM, and a human owner on every one.'
    }],

    valuesEyebrow: 'How we work',
    valuesHeading: 'Three things we do not trade away',
    values: [
    {
      title: 'Physical results, not vanity metrics',
      text: 'Bookings, footfall, sign-ups and sales. Views are a means of getting there, never the headline of the report.'
    },
    {
      title: 'The axis is sector, not geography',
      text: 'Hospitality, retail, fintech, industrial or automotive: every sector has its own people, and those are the ones we activate.'
    },
    {
      title: 'Technology proposes, people decide',
      text: 'Automation clears the heavy lifting. A named owner approves every campaign and answers for it.'
    }],

    teamEyebrow: 'Who runs it',
    teamHeading: 'A named owner on every campaign',
    teamLede:
    'A team across Madrid, Barcelona and Buenos Aires. Everyone managing campaigns has worked with creators brand-side or agency-side before.',
    team: [
    {
      name: 'Delfina Ruiz',
      role: 'Co-founder · Campaigns',
      bio: 'Years running creators for hospitality and retail before turning that method into a system with contracts, payments and measurement.',
      avatar: IMAGES.avatarDelfina
    },
    {
      name: 'Guillermina Sanz',
      role: 'Co-founder · Creator network',
      bio: 'Looks after the relationship with the 500+ creators across Spain and LATAM, and makes sure the agreed terms are always kept.',
      avatar: IMAGES.avatarGuille
    }]

  },
  casesPage: {
    eyebrow: 'Case studies',
    title: 'Campaigns measured by what happens off-screen',
    lede: 'Three campaigns managed end to end. Each one shows the problem, what we ran, the content that came out of it and the numbers the business reported.',
    cta: 'Tell us about your business',
    tablistLabel: 'Select a case study',
    blocks: {
      problem: 'The problem',
      approach: 'What we ran',
      outcome: 'Where it landed'
    },
    clipsTitle: 'Content from this campaign',
    clipsNote: 'Muted previews · tap to play'
  },
  blogPage: {
    eyebrow: 'Blog',
    title: 'What we learn campaign after campaign',
    lede: 'Judgement on creators, sectors and measurement, written by the team running the campaigns every week.',
    readLink: 'Read the article',
    moreTitle: 'More from the team'
  },
  postPage: {
    back: 'All articles',
    exampleAsset: 'Example asset',
    ctaText:
    'Want this applied to your next campaign? We will build a tailored plan, free and with no commitment.',
    ctaButton: 'Get my plan',
    keepReading: 'Keep reading',
    notFoundTitle: 'That article is no longer here',
    notFoundText: 'The piece you are looking for is not published at this address.',
    notFoundCta: 'Back to the blog'
  },
  notFoundPage: {
    eyebrow: 'Error 404',
    title: 'This page does not exist',
    text:
    'The address you opened is not part of the site. It may have been moved, or the link that brought you here is out of date.',
    homeCta: 'Back to home',
    blogCta: 'Read the blog'
  },
  videoTile: { play: 'Play', pause: 'Pause', from: 'the video from' },
  clips,
  caseStudies,
  posts
};

export type SiteCopy = typeof en;
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

const VIDEOS = {
  blazes:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  escapes:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  fun: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  joyrides:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  meltdowns:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  bunny:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  elephants:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
};

const POSTERS = {
  skincare: "/27856742-0d58-40b0-92c7-eccb8a9c38fd.jpg",

  fitness: "/1231581e-0ed6-48fe-aa81-58333818cfbc.jpg",

  unboxing: "/7fcf5c4d-0632-43f0-a649-fb8edc54d3ba.jpg",

  coffee: "/4a8f42e9-7e48-4c5b-9797-8fda1b4b6572.jpg",

  sneakers: "/435249f6-a2d0-4171-8f9c-a9a2fff0e0a3.jpg"

};

export const ugcClips: UgcClip[] = [
{
  id: 'clip-skincare',
  creator: '@mayarosewell',
  niche: 'Beauty & Skincare',
  platform: 'TikTok',
  metric: '3.4x',
  metricLabel: 'ROAS',
  poster: POSTERS.skincare,
  src: VIDEOS.blazes
},
{
  id: 'clip-fitness',
  creator: '@ade.moves',
  niche: 'Fitness & Wellness',
  platform: 'Reels',
  metric: '1.9%',
  metricLabel: 'CTR',
  poster: POSTERS.fitness,
  src: VIDEOS.escapes
},
{
  id: 'clip-unboxing',
  creator: '@priyaunboxed',
  niche: 'Product & Tech',
  platform: 'Shorts',
  metric: '412k',
  metricLabel: 'views',
  poster: POSTERS.unboxing,
  src: VIDEOS.fun
},
{
  id: 'clip-coffee',
  creator: '@jordan.kfeed',
  niche: 'Food & Drink',
  platform: 'TikTok',
  metric: '-48%',
  metricLabel: 'CPA',
  poster: POSTERS.coffee,
  src: VIDEOS.joyrides
},
{
  id: 'clip-sneakers',
  creator: '@ln.streets',
  niche: 'Fashion & Streetwear',
  platform: 'Reels',
  metric: '2.7x',
  metricLabel: 'ROAS',
  poster: POSTERS.sneakers,
  src: VIDEOS.meltdowns
}];


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
  clips: UgcClip[];
}

export const caseStudyList: CaseStudy[] = [
{
  slug: 'glowbrand',
  brand: 'Glowbrand',
  sector: 'Skincare · DTC',
  title: 'From 12 assets a quarter to 140 a month',
  summary:
  'Glowbrand replaced a three-agency creative chain with a single always-on UGC pipeline, cutting cost per asset by 61% while lifting paid social ROAS across every market.',
  challenge:
  'Creative was the bottleneck. Each new angle took six weeks and three suppliers to produce, so the media team kept re-running fatigued ads and watched CPA climb every quarter.',
  approach:
  'We rebuilt the brief as a repeatable template, matched a standing roster of 34 skincare creators across four markets, and set a weekly cadence of 12 concepts with performance feeding the next round of briefs.',
  outcome:
  'Within two quarters UGC became 74% of all paid creative. Winning hooks are now identified in days rather than months, and the same roster produces localised variants without a new brief.',
  cover: "/610758d7-afc6-465b-b0cb-ad07cf2cf1a7.jpg",

  stats: [
  { value: '3.1x', label: 'paid social ROAS' },
  { value: '-61%', label: 'cost per asset' },
  { value: '140', label: 'assets per month' },
  { value: '4', label: 'markets running weekly' }],

  quote: {
    text: 'We stopped treating UGC as a side channel. It is now the majority of our paid creative, and the only part of the funnel where cost per asset goes down while performance goes up.',
    name: 'Elena Marchetti',
    role: 'VP Growth, Glowbrand'
  },
  clips: [ugcClips[0], ugcClips[2], ugcClips[3]]
},
{
  slug: 'moveline',
  brand: 'Moveline',
  sector: 'Fitness apps',
  title: 'Nine markets launched from a single brief',
  summary:
  'A localisation model that let one campaign brief produce native-language creator content in nine markets within five weeks.',
  challenge:
  'Moveline had one global creative set translated by subtitle. Install rates outside the UK were less than half of home-market performance.',
  approach:
  'One master brief, nine local rosters. Creators shot in-language against the same structure, so results stayed comparable market to market.',
  outcome:
  'Localised UGC beat the translated master set in eight of nine markets, and the roster is now permanent.',
  cover: "/9eff03c5-9ab5-4d04-9c62-cb9bbbe7ff87.jpg",

  stats: [
  { value: '9', label: 'markets in 5 weeks' },
  { value: '+64%', label: 'install rate uplift' },
  { value: '2.2x', label: 'blended ROAS' },
  { value: '87', label: 'creators activated' }],

  quote: {
    text: 'Localisation used to mean subtitles and hope. Now every market gets creative made by someone who lives there, from the same brief and the same budget line.',
    name: 'Sofia Lindqvist',
    role: 'Head of Performance, Moveline'
  },
  clips: [ugcClips[1], ugcClips[4], ugcClips[3]]
},
{
  slug: 'studio-11',
  brand: 'STUDIO/11',
  sector: 'Independent agency',
  title: 'Doubled client output without new hires',
  summary:
  'An independent agency moved eleven clients into shared workspaces and doubled monthly deliverables per account manager.',
  challenge:
  'Every client ran on its own spreadsheet, contract template and payment cycle. Account managers spent more time on coordination than on creative.',
  approach:
  'Eleven client workspaces under one agency login, pooled creator roster, white-label reporting generated from live campaign data.',
  outcome:
  'Coordination time dropped by two thirds and renewal conversations shifted from justifying spend to expanding it.',
  cover: "/de5242f3-4079-47cb-805a-c4a0daf6fe0d.jpg",

  stats: [
  { value: '2.0x', label: 'output per manager' },
  { value: '11', label: 'client workspaces' },
  { value: '-68%', label: 'admin hours' },
  { value: '100%', label: 'renewal rate' }],

  quote: {
    text: 'The reporting is the part clients notice. We hand over a live view instead of a monthly deck, and renewals stopped being a conversation about proof.',
    name: 'Tomas Herrera',
    role: 'Managing Partner, STUDIO/11'
  },
  clips: [ugcClips[4], ugcClips[0], ugcClips[1]]
}];


export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {name: string;role: string;avatar: string;};
  cover: string;
  clip?: UgcClip;
  body: {heading?: string;text: string;}[];
}

export const blogPosts: BlogPost[] = [
{
  slug: 'ugc-hooks-that-hold',
  title: 'The first two seconds: what separates a hook that holds',
  excerpt:
  'We looked at 41,000 delivered assets to find out which openings keep viewers past the second mark — and which ones quietly burn budget.',
  category: 'Creative research',
  date: '18 August 2026',
  readTime: '7 min read',
  author: {
    name: 'Elena Marchetti',
    role: 'Head of Creative Strategy',
    avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

  },
  cover: "/ecf5df21-32ed-4e40-a7d0-05a0bb13fea4.jpg",

  clip: ugcClips[0],
  body: [
  {
    text: 'Hook performance is the single largest controllable variable in short-form paid creative. Across the assets delivered on the platform last year, the gap between a top-decile and median hook was worth more than the gap between a top-decile and median creator.'
  },
  {
    heading: 'Three openings that consistently held attention',
    text: 'Problem-first openings — showing the failure state before the product — held 34% more viewers to the two-second mark than product-first openings. Direct address to a named audience came second. Motion-led openings without spoken audio performed worst in feed placements, despite testing well internally.'
  },
  {
    heading: 'What did not matter',
    text: 'Production quality, within reason, was close to irrelevant. Assets shot on a phone in a kitchen outperformed studio-lit equivalents in eleven of fifteen categories, provided the audio was clean. Audio quality mattered roughly four times as much as image quality.'
  },
  {
    heading: 'How to apply it in the brief',
    text: 'Stop briefing a hook as a line of copy. Brief it as a situation: who is on screen, what is going wrong, and what the viewer sees in the first frame. Creators consistently deliver stronger openings when the brief describes a moment rather than a sentence.'
  }]

},
{
  slug: 'building-a-standing-roster',
  title: 'Why a standing creator roster beats one-off casting',
  excerpt:
  'Recasting every campaign is the most expensive habit in UGC. Here is the operating model teams switch to instead.',
  category: 'Operations',
  date: '4 August 2026',
  readTime: '6 min read',
  author: {
    name: 'Tomas Herrera',
    role: 'Partner in Residence',
    avatar: "/f85a11ee-9d16-4b8e-8b2e-1c3da04bb733.jpg"

  },
  cover: "/68cfefbf-d201-4b18-9dff-8216ebd872dd.jpg",

  clip: ugcClips[1],
  body: [
  {
    text: 'Most teams treat casting as a per-campaign task. Every brief starts with an empty roster, a fresh round of outreach and a new set of contracts. It feels rigorous. It is mostly rework.'
  },
  {
    heading: 'The compounding effect',
    text: 'A creator on their fourth campaign for the same brand needs 40% less direction, delivers 1.6 fewer revision rounds, and produces assets that perform measurably better because they already understand what has worked.'
  },
  {
    heading: 'How to build one',
    text: 'Start with twelve. Run them for a quarter, keep the top six on retainer-style briefs, and refresh the remainder each quarter. The roster stays fresh without losing institutional memory.'
  }]

},
{
  slug: 'usage-rights-without-the-legal-queue',
  title: 'Usage rights without the legal queue',
  excerpt:
  'Rights are the most common reason a finished asset never runs. A short guide to getting the terms right inside the brief.',
  category: 'Rights & compliance',
  date: '21 July 2026',
  readTime: '5 min read',
  author: {
    name: 'Elena Marchetti',
    role: 'Head of Creative Strategy',
    avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

  },
  cover: "/6316f1cf-198b-4477-ba53-77e4ee18ff71.jpg",

  clip: ugcClips[2],
  body: [
  {
    text: 'The most expensive asset is the one that tested well and cannot legally run. In our data, roughly one in nine delivered assets is delayed or shelved because usage was agreed after production rather than before it.'
  },
  {
    heading: 'Decide four things before the shoot',
    text: 'Duration, territories, placements and whether the brand can run the asset from the creator’s own handle. Those four answers cover the overwhelming majority of disputes, and all four belong in the brief, not in a follow-up email.'
  },
  {
    heading: 'Price extensions upfront',
    text: 'Agree the cost of a six-month extension at the point of the original contract. Renegotiating a licence for a proven winner is the weakest possible negotiating position.'
  }]

}];


export const teamMembers = [
{
  name: 'Elena Marchetti',
  role: 'Co-founder & CEO',
  bio: 'Ran in-house creator programmes for two DTC brands before building the first version of the brief engine.',
  avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

},
{
  name: 'Tomas Herrera',
  role: 'Co-founder & COO',
  bio: 'Fifteen years agency-side, most recently scaling a social studio across seven European markets.',
  avatar: "/f85a11ee-9d16-4b8e-8b2e-1c3da04bb733.jpg"

}];


export const timeline = [
{
  year: '2017',
  title: 'An in-house creator team',
  text: 'We ran creator campaigns for two skincare brands out of a shared studio, on spreadsheets and goodwill.'
},
{
  year: '2020',
  title: 'The first brief engine',
  text: 'Structured briefs and a scoring sheet replaced the spreadsheet. Turnaround dropped from six weeks to eighteen days.'
},
{
  year: '2023',
  title: 'Matching goes live',
  text: 'A model trained on our own delivery history started ranking creators by category performance instead of reach.'
},
{
  year: '2026',
  title: '2.1M assets delivered',
  text: '400+ brands and agencies, 18,000 vetted creators, 43 markets — and strategists still on every account.'
}];


export const values = [
{
  title: 'Creators are suppliers, not inventory',
  text: 'Rates visible before applying, escrowed budgets, payouts in 72 hours. A network that treats creators badly stops performing within two quarters.'
},
{
  title: 'Show the reasoning',
  text: 'Every match score can be read and argued with. If a recommendation cannot be explained to a client, it should not be made.'
},
{
  title: 'Software plus strategists',
  text: 'Automation handles the coordination. Judgement about what to make stays with people who have run campaigns themselves.'
}];
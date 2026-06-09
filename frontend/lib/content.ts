export type NavItem = {
  href: string;
  label: string;
};

export type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  accent: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Story = {
  category: string;
  title: string;
  summary: string;
  author: string;
  tone: string;
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Archive' },
  { href: '/assistant', label: 'AI Assistant' },
  { href: '/translator', label: 'Translator' },
  { href: '/photo-restoration', label: 'Photo Restoration' },
];

export const features: Feature[] = [
  {
    eyebrow: 'Cultural Archive',
    title: 'Digitize oral history, manuscripts, and heritage collections at scale.',
    description: 'Create a living archive with curated discovery, preservation workflows, and AI-assisted tagging built for real teams.',
    href: '/archive',
    accent: 'brand',
  },
  {
    eyebrow: 'AI Assistant',
    title: 'A multilingual heritage guide for historians, students, and diaspora communities.',
    description: 'Blend grounded answers with source-aware prompts, conversation history, and domain-specific context.',
    href: '/assistant',
    accent: 'sand',
  },
  {
    eyebrow: 'Translation',
    title: 'Preserve cultural nuance while translating Somali and English content.',
    description: 'Pair literal translation with interpretation notes, glossaries, and confidence-aware suggestions.',
    href: '/translator',
    accent: 'brand',
  },
  {
    eyebrow: 'Photo Restoration',
    title: 'Restore archival imagery with controlled enhancement and review.',
    description: 'Support denoising, color recovery, upscaling, and a careful before/after workflow for curators.',
    href: '/photo-restoration',
    accent: 'sand',
  },
];

export const metrics: Metric[] = [
  { value: '1.2M+', label: 'Artifacts indexed', detail: 'Structured metadata and search-ready cataloging.' },
  { value: '98.4%', label: 'Dialect accuracy', detail: 'Careful translation and glossary-backed review.' },
  { value: '500+', label: 'Oral histories', detail: 'Community stories preserved with consent and attribution.' },
  { value: '24/7', label: 'AI support', detail: 'Always-on assistance for collections and visitors.' },
];

export const stories: Story[] = [
  {
    category: 'History',
    title: 'Oral History of Laas Geel',
    summary: 'Exploring the Neolithic rock art and the untold stories surrounding one of the region’s most important heritage sites.',
    author: 'Ahmed Warsame',
    tone: 'Warm desert light, documentary realism',
  },
  {
    category: 'Folktales',
    title: 'The Legend of Araweelo',
    summary: 'A digitized manuscript and audio collection telling a cultural narrative through scholarship and oral memory.',
    author: 'Dr. Rawa Abdi',
    tone: 'Museum paper, cinematic contrast',
  },
  {
    category: 'Textiles',
    title: 'Alindi Weaving Patterns',
    summary: 'A visual database of geometric motifs, weaving traditions, and artisan interviews across generations.',
    author: 'Sahra Mohamed',
    tone: 'Rich indigo textile, macro detail',
  },
  {
    category: 'Music',
    title: 'Gabay Archive Vol. 1',
    summary: 'Rare audio recordings of traditional poetic performance curated for modern discovery and education.',
    author: 'Heritage Labs',
    tone: 'Soundwave glow, night studio',
  },
  {
    category: 'Poetry',
    title: 'The Poetic DNA',
    summary: 'Analysis of classical Somali structure rendered as a contemporary, easy-to-explore digital archive.',
    author: 'Ismail Ali',
    tone: 'Editorial portrait, electric blue',
  },
  {
    category: 'Field Notes',
    title: 'Trade Routes of Zeila',
    summary: 'Mapping maritime trade, architecture, and cultural exchange across centuries of coastal history.',
    author: 'Yusuf Osman',
    tone: 'Charted parchment, muted graphite',
  },
];

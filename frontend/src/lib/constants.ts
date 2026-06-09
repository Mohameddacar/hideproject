export const NAV_LINKS = [
  { href: "/archive", label: "Archive" },
  { href: "/ai-assistant", label: "AI Assistant" },
  { href: "/translator", label: "Translator" },
  { href: "/photo-restoration", label: "Photo Restoration" },
] as const;

export const FOOTER_EXPLORE_LINKS = [
  { href: "#", label: "Community" },
  { href: "#", label: "Our Mission" },
  { href: "#", label: "Contribute" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
] as const;

export const ARCHIVE_CATEGORIES = [
  "All Records",
  "Poetry",
  "History",
  "Folktales",
  "Music",
  "Textiles",
] as const;

export type ArchiveCategory = (typeof ARCHIVE_CATEGORIES)[number];

export interface ArchiveItem {
  id: string;
  title: string;
  description: string;
  author: string;
  category: Exclude<ArchiveCategory, "All Records">;
  image?: string;
  icon?: "book" | "music" | "textile";
  quote?: string;
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "1",
    title: "Oral History of Laas Geel",
    description:
      "Ancient rock art and the stories of the earliest Somali pastoralists who left their mark on the caves of Somaliland.",
    author: "Ahmed Warsame",
    category: "History",
    image:
      "https://images.unsplash.com/photo-1569163139394-de479e1a8653?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "The Legend of Araweelo",
    description:
      "A powerful queen who ruled with wisdom and strength — one of Somalia's most enduring folktales.",
    author: "Fatima Ali",
    category: "Folktales",
    icon: "book",
    quote: '"In the land where queens ruled with wisdom..."',
  },
  {
    id: "3",
    title: "Alindi Weaving Patterns",
    description:
      "Traditional textile motifs passed down through generations of Somali artisans and master weavers.",
    author: "Hassan Mohamed",
    category: "Textiles",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "The Poetic DNA",
    description:
      "Exploring the rhythmic structures and metaphors that define classical Somali poetry across centuries.",
    author: "Amina Hassan",
    category: "Poetry",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Heesaha Dhaqanka",
    description:
      "Traditional Somali songs preserved through oral tradition, from wedding melodies to work chants.",
    author: "Omar Jama",
    category: "Music",
    icon: "music",
  },
  {
    id: "6",
    title: "Berbera Trade Routes",
    description:
      "Historical accounts of ancient maritime commerce connecting the Horn of Africa to the world.",
    author: "Dr. Said Ibrahim",
    category: "History",
    image:
      "https://images.unsplash.com/photo-1544551763-77a415c745765?w=600&h=400&fit=crop",
  },
  {
    id: "7",
    title: "Geedka Sheekooyinka",
    description:
      "Stories told under the acacia tree — a collection of village folktales from rural Somalia.",
    author: "Khadija Noor",
    category: "Folktales",
    icon: "book",
  },
  {
    id: "8",
    title: "Dirac & Guntiino",
    description:
      "The art and symbolism of traditional Somali dress, from everyday wear to ceremonial attire.",
    author: "Sahra Abdi",
    category: "Textiles",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
  },
];

export const CATEGORY_COLORS: Record<
  Exclude<ArchiveCategory, "All Records">,
  string
> = {
  History: "bg-orange-500/90 text-white",
  Folktales: "bg-blue-500/90 text-white",
  Poetry: "bg-purple-500/90 text-white",
  Music: "bg-pink-500/90 text-white",
  Textiles: "bg-emerald-500/90 text-white",
};

export const HOME_FEATURES = [
  {
    title: "Cultural Archive",
    description:
      "Access a vast digital repository of Somali history, poetry, and oral traditions preserved for future generations.",
    icon: "book" as const,
    href: "/archive",
    linkText: "Access Records",
  },
  {
    title: "AI Assistant",
    description:
      "Chat with an AI trained on Somali culture, language, and history to explore heritage in depth.",
    icon: "bot" as const,
    href: "/ai-assistant",
    linkText: "Start Chatting",
  },
  {
    title: "Translation",
    description:
      "Translate Somali idioms, dialects, and poetic structures with cultural context and precision.",
    icon: "languages" as const,
    href: "/translator",
    linkText: "Launch Tools",
  },
  {
    title: "Photo Restoration",
    description:
      "Restore and colorize archival Somali photography using neural networks trained on heritage imagery.",
    icon: "camera" as const,
    href: "/photo-restoration",
    linkText: "Upload Images",
  },
];

export const RESTORATION_FEATURES = [
  {
    title: "Denoising",
    description: "Remove film grain and dust",
    icon: "wand" as const,
  },
  {
    title: "Colorize",
    description: "Breathe life into B&W scenes",
    icon: "palette" as const,
  },
  {
    title: "4K Upscaling",
    description: "Print-ready resolution",
    icon: "zoom" as const,
  },
  {
    title: "Face Recovery",
    description: "Restore delicate features",
    icon: "user" as const,
  },
];

export const HOME_STATS = [
  { value: "1.2M+", label: "Artifacts Indexed" },
  { value: "98.4%", label: "Dialect Accuracy" },
  { value: "500+", label: "Oral Histories" },
  { value: "24/7", label: "AI Support" },
];

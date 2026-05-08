export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Song Zero',
    description:
      'Musical genealogy project mapping the lineage of popular music. Vol. 1 — "Rollin\' Rock" — traces 65 tracks across 8 branches from 1929 to 2001, anchored on Tielman Brothers. Static editorial site plus a Next.js 15 + Supabase admin/CMS platform powering the pipeline.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'AI SDK', 'Vercel'],
    liveUrl: 'https://song-zero.app',
  },
  {
    title: 'Portfolio Site',
    description: 'Personal portfolio built with Next.js 14, featuring a raw brutalist design with MDX blog support.',
    tags: ['Next.js', 'React', 'TypeScript', 'MDX'],
    codeUrl: 'https://github.com/Beerspitnight/portfolio-site',
  },
];

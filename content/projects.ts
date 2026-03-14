export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Site',
    description: 'Personal portfolio built with Next.js 14, featuring a raw brutalist design with MDX blog support.',
    tags: ['Next.js', 'React', 'TypeScript', 'MDX'],
    codeUrl: 'https://github.com/Beerspitnight/portfolio-site',
  },
];

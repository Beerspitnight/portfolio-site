export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export const summary =
  'Help Desk Professional with 10+ years delivering technical support across on-premise and SaaS environments, resolving 200+ monthly tickets with up to 96% satisfaction using Zendesk, Jira, TeamViewer, and Microsoft Remote Desktop (RDP). Proficient in hardware, software, and network troubleshooting with exposure to .NET, REST APIs, SQL, React, and Node.js.';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Ticketing & ITSM',
    skills: ['Zendesk', 'Jira', 'Ticketing Systems', 'SLA Management', 'Knowledge Base Management'],
  },
  {
    category: 'Remote Support',
    skills: ['TeamViewer', 'Microsoft Remote Desktop (RDP)', 'Screen Sharing', 'Remote Troubleshooting'],
  },
  {
    category: 'Operating Systems',
    skills: ['Windows 10/11', 'macOS', 'Chrome OS', 'iOS', 'Android'],
  },
  {
    category: 'Productivity & Cloud',
    skills: ['Microsoft 365', 'Google Workspace', 'Outlook', 'Teams', 'SharePoint', 'Moodle LMS'],
  },
  {
    category: 'Development Exposure',
    skills: ['.NET', 'REST APIs', 'SQL', 'React', 'Node.js'],
  },
  {
    category: 'Hardware',
    skills: ['Desktops', 'Laptops', 'Printers', 'Projectors', 'Interactive Displays', 'Mobile Devices'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Help Desk Support Specialist',
    company: 'MMMarket Research',
    location: 'Lakewood, NJ',
    startDate: 'Jul 2022',
    endDate: 'Dec 2025',
    achievements: [
      'Resolved 200+ monthly help desk tickets via live chat, email, and phone, maintaining a 92% CSAT rate by diagnosing software, hardware, and system configuration issues.',
      'Developed and maintained knowledge base articles and support documentation, reducing repeat inquiries by 20% and improving first-contact resolution rates.',
      'Collaborated with IT, development, and customer success teams to escalate and track complex issues through Jira, accelerating resolution time and increasing user retention.',
    ],
  },
  {
    title: 'EdTech Support Director',
    company: 'Dunecrest International School',
    location: 'Dubai, UAE',
    startDate: 'Jul 2020',
    endDate: 'Jun 2022',
    achievements: [
      'Delivered Tier 1 technical support to 100+ monthly users in person, achieving a 96% satisfaction rate while managing the academic software portfolio including LMS, Google Workspace, and Microsoft 365.',
      'Trained 60+ faculty and staff through one-on-one coaching and group workshops, increasing technology adoption across classroom instruction.',
      'Partnered with IT to troubleshoot hardware and software issues, manage user accounts, and maintain a secure digital environment for 500+ end users.',
      'Created user-friendly guides and FAQs that empowered end users to self-resolve common issues, reducing support dependency by 15%.',
    ],
  },
  {
    title: 'Technology Support Teacher',
    company: 'International School of the Eastern Seaborn',
    location: 'Chonburi, Thailand',
    startDate: 'Jul 2015',
    endDate: 'Jun 2020',
    achievements: [
      'Provided first-response technical support to educators, diagnosing and resolving issues with interactive whiteboards, projectors, student devices, Google Workspace, Microsoft 365, and LMS Moodle.',
      'Delivered just-in-time coaching to teaching staff on educational software, translating technical functions into practical classroom applications.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Master of Writing & Literature',
    school: 'Deakin University, Melbourne, Australia',
    year: '2011',
  },
  {
    degree: 'Bachelor of Science in Marketing',
    school: 'York College of Pennsylvania, York, PA',
    year: '2000',
  },
];

export const certifications: Certification[] = [
  { name: 'Microsoft IT Support Specialist Professional Certificate', issuer: 'Microsoft' },
  { name: 'Google IT Support Professional Certificate', issuer: 'Google' },
  { name: 'Gemini Teacher Certification', issuer: 'Google' },
  { name: 'Adobe Creative Educator (ACE) Level 1', issuer: 'Adobe' },
];

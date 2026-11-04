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
  year?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export const summary =
  'School administrator with 20+ years in K–12 education, including 10 years teaching high school English and 6 years as an assistant principal in New Jersey and Dubai. Coached a 26-teacher English department through observation cycles, lesson planning and unit design aligned to the NJ Student Learning Standards for ELA, and designs professional development for audiences of 190+ educators. Facilitates data meetings that turn i-Ready and MAP results into action plans, and built an i-Ready data dashboard for teachers, leaders and specialists.';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Professional Learning',
    skills: ['PD Design & Facilitation', 'Adult Learning', 'Instructional Coaching', 'Observation & Feedback Cycles', 'Professional Learning Communities'],
  },
  {
    category: 'ELA Curriculum & Standards',
    skills: ['Common Core State Standards (ELA)', 'NJ Student Learning Standards (ELA)', 'Concept-Based Teaching', 'Explicit Instruction', 'Science of Learning', 'Curriculum & Assessment Alignment'],
  },
  {
    category: 'Data & Assessment',
    skills: ['i-Ready', 'MAP Growth', 'Data Meetings & Action Planning', 'Formative Assessment'],
  },
  {
    category: 'Implementation & EdTech',
    skills: ['Program Implementation & Evaluation', 'Blended & Adaptive Learning', 'Moodle', 'H5P', 'SCORM', 'Canvas'],
  },
];

export const experiences: Experience[] = [
  {
    title: 'Co-Founder & Co-Principal, Operations',
    company: 'ngenAOS',
    location: 'Seaside Heights, NJ',
    startDate: 'Jul 2026',
    endDate: 'Present',
    achievements: [
      'Co-founded a website and Answer Engine Optimization (AEO) service for New Jersey shore businesses; after three months building the operating infrastructure, signed 6 clients and launched 4 managed sites.',
      'Runs the client side end to end, from cold calls and presentations to business owners through proposals, contracts, design, onboarding and quality checks, while managing several client projects at once.',
      'Prepares design and content packages for a developer co-founder’s automated build process and reviews each site before launch.',
    ],
  },
  {
    title: 'Team Principal',
    company: 'Lucid North LLC',
    location: 'Toms River, NJ',
    startDate: 'Jul 2025',
    endDate: 'Present',
    achievements: [
      'Leads development of Harry Llama, an AI-powered substitute-scheduling platform for K–12 schools, piloting and refining it with New Jersey school leaders.',
      'Conducts discovery calls with district administrators across New Jersey to understand staffing needs and validate the product.',
      'Develops outreach and sales materials matched to the challenges districts describe.',
    ],
  },
  {
    title: 'Assistant Principal',
    company: 'South Brunswick High School',
    location: 'South Brunswick, NJ',
    startDate: 'Jul 2020',
    endDate: 'Jun 2024',
    achievements: [
      'Coached a 26-teacher English department through observation cycles, summative meetings and feedback, lesson planning and unit enhancement grounded in Science of Learning principles.',
      'Strengthened ELA units with concept-based teaching, explicit instruction and assessments aligned to the taught curriculum and the NJ Student Learning Standards for ELA.',
      'Designed and facilitated professional development for 190+ educators using active learning, cognitive load theory and formative assessment, leading to a 31% rise in student engagement and 28% improvement in knowledge retention.',
      'Facilitated structured assessment-data meetings with special education teachers, reading interventionists and other specialists, turning results into action plans for individual students.',
      'Directed a multi-phase curriculum audit and introduced shared rubrics, improving alignment between taught and assessed curriculum by 44%.',
      'Rolled out blended learning tools and adaptive platforms across departments, raising implementation consistency by 34%.',
    ],
  },
  {
    title: 'Assistant Principal of Academics',
    company: 'Universal American School',
    location: 'Dubai, UAE',
    startDate: 'Jul 2018',
    endDate: 'Jun 2020',
    achievements: [
      'Coached English teachers through observation cycles, feedback and lesson planning, strengthening unit design and assessment alignment.',
      'Led cross-department alignment to the Common Core State Standards for grades 6–12, reaching 97% curricular alignment and improving instructional consistency by 34%.',
      'Delivered virtual professional development for 70+ educators using Moodle, H5P, SCORM content and branching-scenario modules, increasing engagement by 26%.',
      'Built a technology adoption framework tied to instructional goals and data privacy, reallocating 22% of the technology budget and cutting procurement time by 33%.',
    ],
  },
  {
    title: 'Strategic Learning Coordinator',
    company: 'International School of Beijing',
    location: 'Beijing, PRC',
    startDate: 'Jul 2015',
    endDate: 'Jun 2018',
    achievements: [
      'Built onboarding programs for new hires, using data and feedback to raise new-staff satisfaction from 65% to 92% in three years.',
      'Designed and scaled experiential learning programs across five countries, growing student participation from 18% to 67%.',
    ],
  },
  {
    title: 'High School English Teacher',
    company: 'International School of Beijing',
    location: 'Beijing, PRC',
    startDate: 'Jun 2008',
    endDate: 'Jul 2015',
    achievements: [
      'Developed and taught a critical thinking curriculum for non-IB high school English courses within the Common Core framework, strengthening students’ reading comprehension and analytical writing.',
      'Led teacher professional learning communities focused on assessment practices and instructional innovation.',
    ],
  },
  {
    title: 'High School English Teacher',
    company: 'Everglades High School',
    location: 'Miramar, FL',
    startDate: 'Jun 2005',
    endDate: 'Jul 2008',
    achievements: [
      'Designed student-centered learning experiences that increased engagement and built a growth mindset in learners.',
    ],
  },
];

export const education: Education[] = [
  { degree: 'M.A., Writing & Literature', school: 'Deakin University' },
  { degree: 'M.Ed., International Secondary Education', school: 'The College of New Jersey' },
  { degree: 'Post-Graduate Certificate, Educational Leadership', school: 'The College of New Jersey' },
  { degree: 'B.S., Marketing', school: 'York College of Pennsylvania' },
];

export const certifications: Certification[] = [
  { name: 'Council of International Schools — International Evaluation Team Member', issuer: 'Affiliation' },
  { name: 'Middle States Commission — Peer Evaluator', issuer: 'Affiliation' },
];

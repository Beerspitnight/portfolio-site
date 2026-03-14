import type { Metadata } from 'next';
import { projects } from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects | Brian McManus',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

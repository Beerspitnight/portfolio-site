import { Project } from '@/content/projects';
import SkillChip from './SkillChip';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <SkillChip key={tag} label={tag} />
        ))}
      </div>
      <div className={styles.links}>
        {project.liveUrl && (
          <a href={project.liveUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
            Live
          </a>
        )}
        {project.codeUrl && (
          <a href={project.codeUrl} className={styles.link} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  );
}

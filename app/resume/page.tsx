import type { Metadata } from 'next';
import SkillChip from '@/components/SkillChip';
import {
  summary,
  skillCategories,
  experiences,
  education,
  certifications,
} from '@/content/resume';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resume | Brian McManus',
};

export default function ResumePage() {
  return (
    <article>
      <div className={styles.header}>
        <h1>Resume</h1>
        <a
          href="/Brian-McManus-Resume.pdf"
          className={styles.downloadBtn}
          download
        >
          Download PDF
        </a>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Summary</h2>
        <p className={styles.summaryText}>{summary}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        {skillCategories.map((cat) => (
          <div key={cat.category} className={styles.skillGroup}>
            <p className={styles.skillLabel}>{cat.category}</p>
            <div className={styles.chips}>
              {cat.skills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.company} className={styles.role}>
            <div className={styles.roleHeader}>
              <span className={styles.roleTitle}>{exp.title}</span>
              <span className={styles.roleDates}>
                {exp.startDate} &ndash; {exp.endDate}
              </span>
            </div>
            <p className={styles.roleCompany}>
              {exp.company} &mdash; {exp.location}
            </p>
            <ul className={styles.achievements}>
              {exp.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {education.map((edu) => (
          <div key={edu.degree} className={styles.eduItem}>
            <span className={styles.eduDegree}>{edu.degree}</span>
            {' '}&mdash;{' '}
            <span className={styles.eduSchool}>
              {edu.school}, {edu.year}
            </span>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        {certifications.map((cert) => (
          <div key={cert.name} className={styles.certItem}>
            {cert.name}{' '}
            <span className={styles.certIssuer}>| {cert.issuer}</span>
          </div>
        ))}
      </section>
    </article>
  );
}

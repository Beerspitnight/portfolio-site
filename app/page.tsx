import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Brian McManus | Help Desk Professional',
  description:
    '10+ years delivering technical support across on-premise and SaaS environments, resolving 200+ monthly tickets with up to 96% satisfaction.',
};

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Brian McManus</h1>
      <p className={styles.subtitle}>Help Desk Professional</p>
      <div className={styles.accent} />
      <p className={styles.summary}>
        10+ years delivering technical support across on-premise and SaaS
        environments, resolving 200+ monthly tickets with up to 96%
        satisfaction.
      </p>
      <div className={styles.buttons}>
        <Link href="/resume" className={styles.btn}>Resume</Link>
        <Link href="/projects" className={styles.btn}>Projects</Link>
        <Link href="/blog" className={styles.btn}>Blog</Link>
      </div>
    </section>
  );
}

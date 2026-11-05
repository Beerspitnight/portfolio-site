import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Brian McManus | School Administrator & ELA Educator',
  description:
    'Former high school English teacher and assistant principal who coaches ELA teachers, designs professional development and helps schools turn i-Ready data into instruction.',
};

export default function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Brian McManus</h1>
      <p className={styles.subtitle}>School Administrator &amp; ELA Educator</p>
      <div className={styles.accent} />
      <p className={styles.summary}>
        20+ years in K–12 education: 10 years teaching high school English and
        6 years as an assistant principal, coaching English teachers, designing professional development
        for 190+ educators and helping schools turn i-Ready data into
        instruction.
      </p>
      <div className={styles.buttons}>
        <Link href="/resume" className={styles.btn}>Resume</Link>
        <Link href="/projects" className={styles.btn}>Projects</Link>
        <Link href="/blog" className={styles.btn}>Blog</Link>
      </div>
    </section>
  );
}

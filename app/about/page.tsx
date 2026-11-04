import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About | Brian McManus',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <p>
          I&apos;m Brian McManus, a school administrator and ELA educator based in
          New Jersey. I taught high school English for ten years in Florida and
          Beijing, then moved into school leadership in Beijing, Dubai and South
          Brunswick, NJ, where I coached a 26-teacher English department and
          designed professional development for 190+ educators.
        </p>
        <p>
          I care about data that changes what happens in a classroom. Schools
          have more data points than anyone can act on, so I built an i-Ready
          dashboard that helps teachers find the specific, granular support a
          student needs when broad interventions haven&apos;t moved their
          achievement. This site is built with Next.js and deployed on Netlify.
        </p>
      </div>
      <div className={styles.links}>
        <a href="mailto:Hello.Mac4488@gmail.com" className={styles.link}>
          Email
        </a>
<a
          href="https://github.com/beerspitnight"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

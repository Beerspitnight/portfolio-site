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
          I&apos;m Brian McManus, a Help Desk Professional with over a decade of
          experience supporting users across education and market research. I&apos;ve
          worked in Thailand, Dubai, and the US, helping people solve technical
          problems and get more out of their tools.
        </p>
        <p>
          When I&apos;m not troubleshooting, I&apos;m exploring web development
          with React, Node.js, and modern tooling. This site is built with
          Next.js and deployed on Netlify.
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

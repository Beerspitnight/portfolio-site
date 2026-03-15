import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>&copy; Brian McManus</span>
      <div className={styles.links}>
        <a
          href="mailto:Hello.Mac4488@gmail.com"
          className={styles.link}
        >
          Email
        </a>
<a
          href="https://github.com/brianmcmanus"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

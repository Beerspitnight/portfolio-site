'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const links = [
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        McManus
      </Link>
      <div className={styles.links}>
        {links.map((link, i) => (
          <span key={link.href}>
            {i > 0 && <span className={styles.slash}> / </span>}
            <Link
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ''
              }`}
              {...(pathname === link.href ? { 'aria-current': 'page' as const } : {})}
            >
              {link.label}
            </Link>
          </span>
        ))}
      </div>
    </nav>
  );
}

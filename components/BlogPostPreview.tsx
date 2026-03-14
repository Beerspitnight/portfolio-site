import Link from 'next/link';
import { Post } from '@/lib/blog';
import styles from './BlogPostPreview.module.css';

export default function BlogPostPreview({ post }: { post: Post }) {
  const href = post.frontmatter.externalUrl ?? `/blog/${post.slug}`;

  return (
    <article className={styles.preview}>
      <h2 className={styles.title}>
        <Link href={href}>{post.frontmatter.title}</Link>
      </h2>
      <p className={styles.meta}>
        {post.frontmatter.date} &middot; {post.readingTime}
      </p>
      <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>
      <Link href={href} className={styles.readLink}>
        Read
      </Link>
    </article>
  );
}

import Link from 'next/link';
import { Post } from '@/lib/blog';
import styles from './BlogPostPreview.module.css';

export default function BlogPostPreview({ post }: { post: Post }) {
  return (
    <article className={styles.preview}>
      <h2 className={styles.title}>
        <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
      </h2>
      <p className={styles.meta}>
        {post.frontmatter.date} &middot; {post.readingTime}
      </p>
      <p className={styles.excerpt}>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className={styles.readLink}>
        Read
      </Link>
    </article>
  );
}

import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogPostPreview from '@/components/BlogPostPreview';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog | Brian McManus',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className={styles.title}>Blog</h1>
      {posts.map((post) => (
        <BlogPostPreview key={post.slug} post={post} />
      ))}
    </section>
  );
}

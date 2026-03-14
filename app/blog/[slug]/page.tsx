import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { mdxComponents } from '@/components/mdx-components';
import styles from './page.module.css';

export const dynamic = 'error';

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    return {
      title: `${post.frontmatter.title} | Brian McManus`,
      description: post.frontmatter.excerpt,
    };
  } catch {
    return { title: 'Post Not Found | Brian McManus' };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
      <article>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.meta}>
          {post.frontmatter.date} &middot; {post.readingTime}
        </p>
        <div className={styles.content}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}

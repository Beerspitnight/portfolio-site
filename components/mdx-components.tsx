import type { MDXComponents } from 'mdx/types';
import styles from './mdx-components.module.css';

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className={styles.h2} {...props} />,
  h3: (props) => <h3 className={styles.h3} {...props} />,
  p: (props) => <p className={styles.p} {...props} />,
  a: (props) => <a className={styles.a} {...props} />,
  blockquote: (props) => <blockquote className={styles.blockquote} {...props} />,
  pre: (props) => <pre className={styles.pre} {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
};

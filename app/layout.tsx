import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Brian McManus',
  description:
    'School administrator and ELA educator with 20+ years in K–12 education: English teaching, teacher coaching, professional development and i-Ready data.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

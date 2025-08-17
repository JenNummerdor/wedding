import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import { Header } from '@/app/components/header';
import { Providers } from '@/app/components/providers';
import { Footer } from '@/app/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jen and Oscar's Wedding",
  description: "Info website for Jen and Oscar's wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} wedding-light text-foreground bg-background`}>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

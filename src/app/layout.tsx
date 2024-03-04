import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://todolist-redux-sigma.vercel.app/'),
  title: 'Todo List App',
  description: 'Simple todo list using Next.js and Redux Toolkit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe - Developer Portfolio',
  description: 'Senior Developer specializing in Next.js, React, and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_br">
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
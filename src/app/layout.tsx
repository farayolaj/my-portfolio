import { Metadata } from 'next';
import { Providers } from './providers';
import Analytics from '@components/lib/Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

const title = 'Joshua Farayola - Software Engineer';
const description =
  'Joshua is a software engineer who is focused on building efficient and maintainable software solutions that provide business value.';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    'joshua',
    'farayola',
    'portfolio',
    'java',
    'javascript',
    'developer',
    'fullstack',
    'react',
    'node',
    'express',
    'aws',
    'gcp',
  ],
  openGraph: {
    type: 'website',
    title: title,
    url: baseUrl,
    countryName: 'Nigeria',
    description: description,
    emails: 'farayolajoshua@gmail.com',
  },
  applicationName: title,
  authors: {
    name: 'Joshua Farayola',
    url: baseUrl,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  creator: 'Joshua Farayola',
  colorScheme: 'dark',
  themeColor: '#000000',
  twitter: {
    card: 'summary_large_image',
    title: title,
    creator: 'Joshua Farayola',
    description: description,
  },
};

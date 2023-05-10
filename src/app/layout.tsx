import { Metadata } from 'next';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

const title = 'Joshua Farayola - Software Engineer';
const description =
  'Software engineer skilled with Java, JavaScript, React, Node, Express';
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

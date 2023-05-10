import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
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
  appleWebApp: {
    title: title,
    startupImage: {
      url: '/images/logo.png',
    },
    capable: true,
    statusBarStyle: 'black',
  },
  openGraph: {
    type: 'website',
    title: title,
    url: baseUrl,
    countryName: 'Nigeria',
    description: description,
    images: {
      url: '/images/logo.png',
    },
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
    images: {
      url: '/images/logo.png',
    },
  },
};

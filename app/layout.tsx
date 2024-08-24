import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Footer from "./components/footer";

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/AdobeClean-Regular.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/AdobeClean-Regular.otf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jesspengdesign.com'),
  title: {
    default: 'Jessica Peng',
    template: '%s | Jessica Peng',
  },
  description: 'Graphic designer & developer',
  openGraph: {
    title: 'Jessica Peng',
    description: 'Graphic designer & developer',
    url: 'https://jesspengdesign.com',
    siteName: 'Jessica Peng',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Jessica Peng',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={clsx(
              graphik.variable
          )}
      >
      <body id="" className="">
      <main className="">
        <Sidebar/>
        {children}
        <Analytics />
      </main>
      </body>
      </html>
  );
}

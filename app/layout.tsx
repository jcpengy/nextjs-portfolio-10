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
      path: '../public/fonts/Proxima-Nova-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Proxima-Nova-Regular.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leerob.io'),
  title: {
    default: 'Jess Peng',
    template: '%s | Jess Peng',
  },
  description: 'Graphic designer & developer',
  openGraph: {
    title: 'Jess Peng',
    description: 'Graphic designer & developer',
    url: 'https://jcpengy.io',
    siteName: 'Jess Peng',
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
    title: 'Jess Peng',
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

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

const navItems = {
  // '/': {
  //   name: 'Home',
  // },
  '/': {
    name: 'ABOUT',
  },
  '/design': {
    name: 'DESIGN',
  },
  '/art': {
    name: 'ART',
  },
};

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  let pathname = usePathname() || '/';
  return (
      <html
          lang="en"
          className={clsx(
              graphik.variable
          )}
      >
      <body id="body" className="antialiased mb-40 flex flex-col md:flex-row mt-8 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <nav id="navbar-mobile" className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          >
            <div id="navbar-mobile-menu">MENU</div>
            <div id="nav-links" className="flex flex-row space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    id="nav-link"
                    key={path}
                    href={path}
                    className={clsx(
                      '',
                      {
                        'text-neutral-500': !isActive,
                      }
                    )}
                  >
                    <span className="relative py-1 px-2">
                      {name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        <Sidebar/>
        {children}
        <Analytics />
      </main>
      </body>
      </html>
  );
}

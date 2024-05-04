'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {useEffect, useState} from "react";
import { LayoutGroup, motion } from 'framer-motion';
import WebsiteHeaderPic from 'public/images/stamp.jpg';

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
  '/petportraits': {
    name: 'PET PORTRAITS',
  },
  '/photography': {
    name: 'PHOTOGRAPHY',
  },
  '/moreart': {
    name: 'MORE ART'
  }
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggle = () => {
    setOpenMobileMenu(!openMobileMenu);
};

  return (      
    <aside className="tracking-tight">
    <div id="navbar-mobile" className="flex flex-col items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <button id="navbar-mobile-menu" onClick={toggle}>MENU</button>
            {
               openMobileMenu && 
               (<div id="navbar-mobile-links">
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
             </div>)
            }
          </div>
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <br/>
        <img
          id='website-header-pic'
          key={'website-header-pic'}
          src={WebsiteHeaderPic.src}
          alt={'website-header-pic'}
          />
          <br/>
          <div id="website-header">JESS PENG</div>
          <nav id="navbar-desktop" className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          >
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
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
          <hr/>
        </LayoutGroup>
      </div>
    </aside>
  );
}

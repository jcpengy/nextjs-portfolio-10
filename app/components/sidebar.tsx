'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function Navbar() {
  let pathname = usePathname() || '/';
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggle = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const navItems = {
    '/': {
      name: 'WORK',
    },
    '/about': {
      name: 'ABOUT/CONTACT',
    }
  };

  return (
    <div id="navbar-mobile-container">
      {/* mobile navigation */}
      <div id="navbar-mobile" className="flex flex-col items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
        <button id="navbar-mobile-menu" onClick={toggle}>Jessica Peng ≡</button>
        {
          openMobileMenu &&
          (<div id="navbar-mobile-links">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;
              return (
                <a id={path} key={path} href={path} className={clsx(
                  '',
                  {
                    'text-neutral-500': !isActive,
                  }
                )} onClick={(e) => setOpenMobileMenu(false)}><span className="relative py-1 px-2">
                    {name}
                  </span></a>
              );
            })}
          </div>)
        }
      </div>
    </div>
  );
}

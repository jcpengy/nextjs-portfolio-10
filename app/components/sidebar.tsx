'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from "react";
import burger from "../../public/images/burger.svg";

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
      <div id="navbar-mobile" className="flex flex-col items-center relati md:relative">
        <div id="navbar-mobile-menu">
          <a id="navbar-mobile-menu-jessica-peng" href="/">Jessica Peng</a>
          <div id="hamburger-container">
            <button id="hamburger" onClick={toggle}>
              <img className="burger-link" src={burger.src} alt="burger" />
            </button>
          </div>
        </div>
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

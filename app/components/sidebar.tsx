'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import burger from "../../public/images/burger.svg";
import close from "../../public/images/close.svg";

export default function Navbar() {
  let pathname = usePathname() || '/';
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggle = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const navItems = {
    '/': {
      name: 'featured',
    },
    '/art': {
      name: 'work',
    },
    '/about': {
      name: 'about/contact',
    }
  };

  return (
    <div id="navbar-mobile-container">
      {/* mobile navigation */}
      <div id="navbar-mobile" className="flex flex-col items-center relati md:relative">
        <div id="navbar-mobile-menu">
          <a id="navbar-mobile-menu-jessica-peng" href="/">jessica peng</a>
          <div id="hamburger-container">
            {
              openMobileMenu ?
              <button id="hamburger" onClick={toggle}>
              <img className="burger-link" src={close.src} alt="burger" />
            </button>
            : <button id="hamburger" onClick={toggle}>
            <img className="burger-link" src={burger.src} alt="burger" />
          </button>
            }

          </div>
        </div>
        {
          openMobileMenu &&
          (<div id="navbar-mobile-links">
            <a href='/' onClick={(e) => setOpenMobileMenu(false)}>
              <span className="relative py-1 px-2">
                featured
              </span>
            </a>
            <div id="submenu-text"><i>work</i></div>
            <a className="navbar-mobile-submenu" href='/ui-ux' onClick={(e) => setOpenMobileMenu(false)}>
              <span className="relative py-1 px-2">
                ui/ux
              </span>
            </a>
            <a className="navbar-mobile-submenu" href='/graphicdesign' onClick={(e) => setOpenMobileMenu(false)}>
              <span className="relative py-1 px-2">
                graphic design
              </span>
            </a>
            <div id="submenu-text">
              <u>personal</u>
            </div>
            <a className="navbar-mobile-submenu" href='/art' onClick={(e) => setOpenMobileMenu(false)}>
              <span className="relative py-1 px-2">
                art
              </span>
            </a>
            <a className="navbar-mobile-submenu" href='/photography' onClick={(e) => setOpenMobileMenu(false)}>
              <span className="relative py-1 px-2">
                photography
              </span>
            </a>
            <a href='/about' onClick={(e) => setOpenMobileMenu(false)}>
              <span className="relative py-1 px-2">
                about/contact
              </span>
            </a>
            {/*{Object.entries(navItems).map(([path, {name}]) => {*/}
            {/*  const isActive = path === pathname;*/}
            {/*  return (*/}
            {/*    <a id={path} key={path} href={path} className={clsx(*/}
            {/*      '',*/}
            {/*      {*/}
            {/*        'text-neutral-500': !isActive,*/}
            {/*      }*/}
            {/*    )} onClick={(e) => setOpenMobileMenu(false)}><span className="relative py-1 px-2">*/}
            {/*        {name}*/}
            {/*      </span></a>*/}
            {/*  );*/}
            {/*})}*/}
          </div>)
        }
      </div>
    </div>
  );
}

"use client";
import { usePathname } from 'next/navigation';
import SocialMediaLinks from './socialMediaLinks';

export default function DesktopNavbar() {
    let pathname = usePathname() || '/';

    const navItems = {
        '/': {
            name: 'work'
        },
        '/art': {
            name: 'personal'
        },
        '/about': {
            name: 'about/contact'
        }
    };
    return (
        <div id="desktop-navbar">
            <a id="desktop-navbar-title" href="/"><h4 id="desktop-navbar-left">jessica peng</h4></a>
            <div id="desktop-navbar-right">
                <a id="desktop-navbar-button" href='/'>
                    work
                </a>
                <div className="dropdown">
                    <button>
                        personal
                    </button>
                    <div className="dropdown-content">
                        <a href="/art">art</a>
                        <a href="/graphicdesign">graphic design</a>
                        <a href="/photography">photography</a>
                    </div>
                </div>
                <a id="desktop-navbar-button" href='/about'>
                    about/contact
                </a>
                <SocialMediaLinks/>
            </div>
        </div>
    );
}

"use client";
import { usePathname } from 'next/navigation';
import SocialMediaLinks from './socialMediaLinks';

export default function DesktopNavbar() {
    let pathname = usePathname() || '/';

    const navItems = {
        '/': {
            name: 'Work'
        },
        '/art': {
            name: 'Personal'
        },
        '/about': {
            name: 'About/Contact'
        }
    };
    return (
        <div id="desktop-navbar">
            <a id="desktop-navbar-title" href="/"><h4 id="desktop-navbar-left">Jessica Peng</h4></a>
            <div id="desktop-navbar-right">
                {Object.entries(navItems).map(([path, { name }], i) => {
                    const isActive = path === pathname;
                    // const style = { "background-color": backgroundColors[i] }
                    return (
                        <a id="desktop-navbar-button" href={path}>
                            {name}
                        </a>
                    );
                })}
                <SocialMediaLinks />
            </div>
        </div>
    );
}

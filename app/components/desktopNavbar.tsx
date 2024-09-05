"use client";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Ceojess from "../../public/images/ceojess-head.png";
import Link from 'next/link';
import { motion } from 'framer-motion';
import SocialMediaLinks from './socialMediaLinks';

export default function DesktopNavbar() {
    let pathname = usePathname() || '/';

    // colors to assign nav buttons
    const backgroundColors = [
        "#f3eaab", "#b8d9c0", "#d6b4e3"
    ]

    const navItems = {
        '/': {
            name: 'WORK',
        },
        '/about': {
            name: 'ABOUT/CONTACT',
        }
    };
    return (
        <div id="desktop-navbar">
            <h4 id="desktop-navbar-left">Jessica Peng</h4>
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

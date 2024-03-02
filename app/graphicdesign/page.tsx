'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React, {useEffect} from "react";
import Footer from "../components/footer";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NYTCover from 'public/images/nyt-cover.jpg';
import EtsyCover from 'public/images/etsy-cover.jpg';
import Etsy from 'app/etsy/page';

const kesslerposter = [
    {
        src: 'https://i.ibb.co/XWpQCqr/kessler-tickets.png',
        alt: '1',
    },
    {
        src: 'https://i.ibb.co/XSM6SKv/kessler-poster.png',
        alt: '2',
    },
]


const nytimes = [
    {
        src: 'https://i.ibb.co/CMchfKW/Screen-Shot-2023-11-27-at-2-58-22-PM.png',
        alt: 'Syria',
    },
    {
        src: 'https://i.ibb.co/MP7ZGSs/Screen-Shot-2023-11-27-at-2-59-17-PM.png',
        alt: 'Truck',
    },
    {
        src: 'https://i.ibb.co/fdV5v5k/Screen-Shot-2023-11-27-at-3-01-12-PM.png',
        alt: 'Thai Cave 1',
    },
    {
        src: 'https://i.ibb.co/PwBkWts/Screen-Shot-2023-11-27-at-3-01-38-PM.png',
        alt: 'Thai Cave 2',
    },
]

export const revalidate = 60;

export default async function GraphicDesign() {
    let pathname = usePathname() || '/';

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section id="portfolio-page">
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='kessler 1'
                    className='w-full rounded'
                    src='https://i.ibb.co/f0zG8Xs/kessler1.png'
                    alt='kessler 1'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">KESSLER PROJECT</span><br/><br/>
                        Finalist in the 2018 Disney Imaginations contest.
                    </p><br/>
                    <Link
                    id="project-button"
                    key='/kessler'
                    href='/kessler'>
                        View project
                    </Link>
                </div>
            </div><br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='nyt-cover'
                    className='w-full rounded'
                    src={NYTCover}
                    alt='nyt-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">THE NEW YORK TIMES</span><br/><br/>
                        Cover art and graphics for two high-profile breaking news pieces.
                    </p>
                    <br/>
                    <Link
                    id="project-button"
                    key='/new-york-times'
                    href='/new-york-times'>
                        View project
                    </Link>
                </div>
            </div><br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='etsy-cover'
                    className='w-full rounded'
                    src={EtsyCover}
                    alt='etsy-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">ETSY</span><br/><br/>
                        Commissioned work and freelance design for small businesses. 
                    </p>
                    <br/>
                    <Link
                    id="project-button"
                    key='/etsy'
                    href='/etsy'>
                        View project
                    </Link>
                </div>
            </div>       
        </section>
    );
}

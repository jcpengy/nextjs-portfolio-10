'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React, {useEffect} from "react";
import Footer from "../components/footer";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const kessler = [
    {
        src: 'https://i.ibb.co/W2NN0fh/kessler2.png',
        alt: '1',
    },
    {
        src: 'https://i.ibb.co/pytkTgR/kessler3.png',
        alt: '2',
    },
    {
        src: 'https://i.ibb.co/C1QBjZ7/kessler4.png',
        alt: '3',
    },
    {
        src: 'https://i.ibb.co/jgQ20tR/kessler4.png',
        alt: '4',
    },
    {
        src: 'https://i.ibb.co/JjCRXrc/Screen-Shot-2024-01-08-at-9-02-29-PM.png',
        alt: '5',
    },
    {
        src: 'https://i.ibb.co/WW0XVLG/Screen-Shot-2023-08-28-at-2-18-26-PM.png',
        alt: '6',
    },
]

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

const graphicdesignimages = [
    {
        src: 'https://i.ibb.co/x8Jx8GF/mermaid.png',
        alt: 'Mermaid',
    },
    {
        src: 'https://i.ibb.co/L8z0Cpz/3aec7a118346153-60877e247d35b.jpg',
        alt: 'Rob and Emily Side 1',
    },
    {
        src: 'https://i.ibb.co/pP2RT94/ea8a9a118346153-60877f2d59bcb.png',
        alt: 'Rob and Emily Side 2',
    },
    {
        src: 'https://i.ibb.co/3c1ZGq9/b1d5f7139012557-62285390426e3.png',
        alt: 'Playing Card Design',
    },
    {
        src: 'https://i.ibb.co/z6BystX/bc5e4d126048653-61259d3a03c42.png',
        alt: 'Happy Tappers',
    },
    {
        src: 'https://i.ibb.co/TkVVSz4/daisy.png',
        alt: 'Dog',
    },
    {
        src: 'https://i.ibb.co/vwWVnbt/rivers-01.png',
        alt: 'River',
    },
    {
        src: 'https://i.ibb.co/pzwsxPw/TSHARP.png',
        alt: 'Eid',
    },
    {
        src: 'https://i.ibb.co/t3Ym6Mp/vintage.png',
        alt: 'Vintage',
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
                        3D models, designs, and slides for a theme park concept and finalist in the 2018 Disney Imaginations contest.
                    </p>
                    <Link
                    key='/kessler'
                    href='/kessler'
                  >
                     <button id="button"></button>
                    View project
                  </Link>
                </div>
            </div><br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='nyt-cover'
                    className='w-full rounded'
                    src="https://i.ibb.co/bQPgWRv/douma-cover-desktop4.jpg"
                    alt='nyt-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">THE NEW YORK TIMES</span><br/><br/>
                        Cover art and graphics for two high-profile breaking news pieces.
                    </p>
                </div>
            </div><br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='etsy-cover'
                    className='w-full rounded'
                    src="https://i.ibb.co/MfsjPxW/Screenshot-2024-02-29-at-6-29-00-PM.png"
                    alt='etsy-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">ETSY</span><br/><br/>
                        Commissioned work and freelance design for small businesses. 
                    </p>
                </div>
            </div><br/>
            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                {kessler.map((image) => (
                    <img
                        key={image.src}
                        className='w-full rounded'
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </SlideshowLightbox><br/>
            <p id="centered-caption"><i>Redesigns, 2023</i></p>
            <br/>
            <br/>
            <h3>The New York Times</h3>
            <p>Cover art and graphics I created for two high-profile breaking news pieces as a Graphics Intern.<br/><br/>
            Credits: <a className="link" target="_blank" href="https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html"><u>"Step Inside the Thai Cave in Augmented Reality"</u></a><br/>
                <a className="link" target="_blank" href="https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html?mtrref=undefined&gwh=F58C966F1C905F9A7F76DD29F76E6E44&gwt=pay&assetType=PAYWALL"><u>"How We Created a Virtual Crime Scene to Investigate Syria's Chemical Attack"</u></a>
            </p><br/>
            <img
                key={'syria'}
                className='w-full rounded'
                src={nytimes[0].src}
                alt={nytimes[0].alt}
            /><br/>
            <img
                key={'thai'}
                className='w-full rounded'
                src='https://i.ibb.co/z4Sc5R5/thai.png'
                alt='thai cave'
            /><br/>
            <h3>Etsy</h3>
            <p>Freelance work I've done for small businesses, schools, and family
                events like weddings, vacations, and reunions.</p><br/>
            {/*<img*/}
            {/*    key={'mirabelle'}*/}
            {/*    className='w-full rounded'*/}
            {/*    src='https://i.ibb.co/PCt66hf/mirabelle.jpg'*/}
            {/*    alt='mirabelle'*/}
            {/*/><br/>*/}
            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                {graphicdesignimages.map((image) => (
                    <img
                        key={image.src}
                        className='w-full rounded'
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </SlideshowLightbox>
            <br/>
            <button id="button"><a target="_blank" href="https://behance.net/jesspdesign">More on my
                Behance →
            </a></button>
        </section>
    );
}

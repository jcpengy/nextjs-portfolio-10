'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
import Footer from "../components/footer";

const kessler = [
    {
        src: 'https://i.ibb.co/LPWmKmV/Screen-Shot-2023-08-28-at-2-15-59-PM.png',
        alt: '1',
    },
    {
        src: 'https://i.ibb.co/QNwVsDb/Screen-Shot-2023-08-28-at-2-16-43-PM.png',
        alt: '2',
    },
    {
        src: 'https://i.ibb.co/F0z7xSx/Screen-Shot-2023-08-28-at-2-17-18-PM.png',
        alt: '3',
    },
    {
        src: 'https://i.ibb.co/zFxyN5S/Screen-Shot-2023-08-28-at-2-17-54-PM.png',
        alt: '4',
    },
    {
        src: 'https://i.ibb.co/JKtZYhf/Screen-Shot-2023-08-28-at-2-18-10-PM.png',
        alt: '5',
    },
    {
        src: 'https://i.ibb.co/WW0XVLG/Screen-Shot-2023-08-28-at-2-18-26-PM.png',
        alt: '6',
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
        src: 'https://i.ibb.co/MsDf4mG/409496143892177-6282eafba4c84.jpg',
        alt: 'Bridle Up Hope',
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
        src: 'https://i.ibb.co/mzz24zn/dog.png',
        alt: 'Dog',
    },
    {
        src: 'https://i.ibb.co/fCg5Xmq/Screen-Shot-2023-09-10-at-12-37-37-PM.png',
        alt: 'Blended',
    },
    {
        src: 'https://i.ibb.co/2cQrGVY/616cf7116952781-606c8f93a3041.png',
        alt: 'Card',
    },
    {
        src: 'https://i.ibb.co/42Gbq4T/35b5ae116830079-606a67d45998d.png',
        alt: 'Wedding Residence',
    },
]

export const revalidate = 60;

export default async function GraphicDesign() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <h2>Graphic Design</h2>
            <h3>Etsy</h3>
            <p>I'm a best-selling graphic designer on Etsy. I've created designs for weddings, bachelorette parties,
                family vacations, and a variety of businesses.</p><br/>
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
            <h3>The New York Times</h3>
            <p>As an Immersive Storytelling Intern at the New York Times, I created cover art and graphics for a couple high-profile breaking news pieces.
                I also storyboarded and researched future projects and did R&D on emerging platforms.<br/><br/>
            Credits: <a className="link" target="_blank" href="https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html"><u>Step Inside the Thai Cave in Augmented Reality</u></a><br/>
                <a className="link" target="_blank" href="https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html?mtrref=undefined&gwh=F58C966F1C905F9A7F76DD29F76E6E44&gwt=pay&assetType=PAYWALL"><u>How We Created a Virtual Crime Scene to Investigate Syria's Chemical Attack</u></a>
            </p><br/>
            <img
                key={'syria'}
                className='w-full rounded'
                src={nytimes[0].src}
                alt={nytimes[0].alt}
            />
            <i>Cover graphic for "How We Created a Virtual Crime Scene to Investigate Syria's Chemical Attack"</i><br/><br/>
            <img
                key={'thai2'}
                className='w-full rounded'
                src={nytimes[3].src}
                alt={nytimes[3].alt}
            />
            <img
                key={'thai1'}
                className='w-full rounded'
                src={nytimes[2].src}
                alt={nytimes[2].alt}
            />
            <i>Graphics I worked on for "Step Inside the Thai Cave in Augmented Reality"</i><br/><br/>
            <h3>Disney Imagineering</h3>
            <p>Slides and digital illustrations I created for my team's submission and presentation as one of six finalists in the 2018 Walt Disney Imaginations Design Competition. The prompt that year was to take an abandoned place and convert
            it into a theme park experience. My team came up with the Kessler Project, an all-day space adventure that allows guests to explore abandoned landmarks
            potentially impacted by <a className="link" target="_blank" href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/The_Kessler_Effect_and_how_to_stop_it"><u>Kessler Syndrome</u></a>.</p><br/>
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
        </section>
    );
}

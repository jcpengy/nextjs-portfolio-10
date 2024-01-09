'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
import Footer from "../components/footer";

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

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <h2>Graphic Design</h2>
            <h3>Disney Imagineering</h3>
            <p>Slides and digital illustrations I created for Kessler Project, a theme park concept and finalist in Disney Imagineering's 2018 Imaginations Competition. In this
                all-day space excursion, guests can explore abandoned landmarks potentially impacted by <a className="link" target="_blank" href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/The_Kessler_Effect_and_how_to_stop_it"><u>Kessler Syndrome</u></a>.</p><br/>
            <img
                key='kessler 1'
                className='w-full rounded'
                src='https://i.ibb.co/f0zG8Xs/kessler1.png'
                alt='kessler 1'
            /><br/>
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
            <img
                key='kessler ticket'
                className='w-full rounded'
                src='https://i.ibb.co/XWpQCqr/kessler-tickets.png'
                alt='kessler ticket'
            /><i id="centered-caption">Re-imagined ticket design, 2023</i><br/><br/>
            <img
                key='kessler 4'
                className='w-full rounded'
                src='https://i.ibb.co/sgcJdKD/Screen-Shot-2023-12-26-at-10-09-55-PM.png'
                alt='kessler 4'
            /><br/>
            <img
                key='kessler 5'
                className='w-full rounded'
                src='https://i.ibb.co/JKtZYhf/Screen-Shot-2023-08-28-at-2-18-10-PM.png'
                alt='kessler 5'
            /><br/>
            <img
                key='kessler 6'
                className='w-full rounded'
                src='https://i.ibb.co/WW0XVLG/Screen-Shot-2023-08-28-at-2-18-26-PM.png'
                alt='kessler 6'
            /><br/>
            <h3>The New York Times</h3>
            <p>As an Immersive Storytelling Intern at the New York Times, I created cover art and graphics for two high-profile breaking news pieces.
                I also did R&D on emerging platforms and prospective articles.<br/><br/>
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
            /><br/>
            <img
                key={'karthik'}
                className='w-full rounded'
                src={'https://i.ibb.co/SRg6ynW/karthik.jpg'}
                alt={'karthik'}
            /><br/>
            <img
                key={'cutout'}
                className='w-full rounded'
                src={'https://i.ibb.co/7bqMTzj/thaicave-cutout.png'}
                alt={'cutout'}
            />
            <i>Graphics for "Step Inside the Thai Cave in Augmented Reality"</i><br/>
            <h3>Etsy</h3>
            <p>I'm a best-selling graphic designer on Etsy. I've created custom designs for small businesses,
                educational institutions, weddings, family events, and more.</p><br/>
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

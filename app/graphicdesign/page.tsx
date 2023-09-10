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
        src: 'https://i.ibb.co/r2Hj3zQ/c008a3144325137-628acc1f35c5d.jpg',
        alt: 'Marg Bar',
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
            <h2>Graphic Design</h2><br/>
            <h3>Kessler Project</h3><br/>
            <p>3D models, graphic design assets, and digital drawings I created for our finalist presentation and submission to the 2018 Walt
                Disney Imaginations Design Contest.</p><br/>
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
            <h3>Etsy</h3>
            <p>Designs I created for my Etsy customers.</p><br/>
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
            <br/>
            <button id="button"><a target="_blank" href="https://behance.net/jesspdesign">More on my
                Behance →
            </a></button>
        </section>
    );
}

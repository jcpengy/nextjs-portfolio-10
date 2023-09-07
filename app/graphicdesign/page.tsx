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
        src: 'https://i.ibb.co/KLwpyzq/108765144219523-628847521916f.png',
        alt: 'Bee Pattern',
    },
    {
        src: 'https://i.ibb.co/S613PJ4/0e2a51118344449-60877354b198c.png',
        alt: 'Eid Mubarak',
    },
    {
        src: 'https://i.ibb.co/j8wdL2g/eb0470118027941-6080ffca2bbab.png',
        alt: 'Eid Mubarak Gold',
    },
    {
        src: 'https://i.ibb.co/MgctjPg/8ee226119765095-60a47304b8bf0.png',
        alt: 'Wethexsadkids',
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
        src: 'https://i.ibb.co/MsDf4mG/409496143892177-6282eafba4c84.jpg',
        alt: 'Bridle Up Hope',
    },
    {
        src: 'https://i.ibb.co/LQk02nC/d89ee0122980071-60e4f4d5f2710.png',
        alt: 'Wedding Invite',
    },
    {
        src: 'https://i.ibb.co/zbG0ZFT/ce1b51118943467-6093476fae79e.png',
        alt: 'Mimosa Farm',
    },
    {
        src: 'https://i.ibb.co/pjvvZnD/e195e0143892729-6282ef3f21a9b.jpg',
        alt: 'Mirabelle',
    },
    {
        src: 'https://i.ibb.co/4Vkx1BH/85dcc1139011821-622850607249c.jpg',
        alt: 'I Believe',
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
        alt: 'Lightning Bolts',
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
        src: 'https://i.ibb.co/wrQgtb4/a6cc84126049763-6125a4800543d.png',
        alt: 'Reach the Beach',
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
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">Graphic Design</h1><br/>
            <b>Kessler Project</b><br/>
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
            <b>Etsy</b><br/>
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
        </section>
    );
}

'use client';
import Footer from "../components/footer";
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import React, {useEffect} from "react";
import Allison1 from "../../public/images/Etsy/allison-01.jpg";
import Allison2 from "../../public/images/Etsy/allison-02.jpg";
import Allison3 from "../../public/images/Etsy/allison-03.jpg";
import EM1 from "public/images/Etsy/dana-01.jpg";
import EM2 from "public/images/Etsy/dana-02.jpg";
import EM3 from "public/images/Etsy/dana-03.jpg";

import BabyRight from "public/images/Etsy/IMG_1488.jpg";

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

export default async function Etsy() {
    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });
    return (
        <section id="portfolio-page">
            <h3 id="all-caps">ETSY</h3>
            <p>Freelance work I've done for small businesses, schools, and family
                events like weddings, vacations, and reunions.<br/><br/>
                Visit my Etsy shop <a className="link" href="https://www.etsy.com/shop/JessPDesign?ref=seller-platform-mcnav">here</a>.</p><br/>
                <i>Robbie & Emily's Wedding Album</i>
                <img
                    id="art-image"
                    key='robbieemily1'
                    className='w-full rounded'
                    src={Allison1.src}
                    alt='robbieemily1'
                /><br/>
                 <div className="md:grid md:grid-cols-2">
                    <img
                    id="art-image"
                    key='robbieemily2'
                    className='w-full rounded'
                    src={Allison2.src}
                    alt='robbieemily2'
                    />
                    <img
                    id="art-image"
                    key='robbieemily3'
                    className='w-full rounded'
                    src={Allison3.src}
                    alt='robbieemily3'
                    />
                </div>
                <br/>
                <i>Eid Mubarak Gift Wrapping Paper</i>
                {/* <div className="md:grid md:grid-cols-3"> */}
                <img
                    id="art-image"
                    key='em1'
                    className='w-full rounded'
                    src={EM1.src}
                    alt='em1'
                />
                {/* <img
                    id="art-image"
                    key='em2'
                    className='w-full rounded'
                    src={EM2.src}
                    alt='em2'
                />
                <img
                    id="art-image"
                    key='em3'
                    className='w-full rounded'
                    src={EM3.src}
                    alt='em3'
                /> */}
                {/* </div> */}
                {/* <img
                    id="centered-caption"
                    key='baby-top'
                    src={BabyTop.src}
                    alt='baby-top'
                />
                <br/>
                <div className="md:grid md:grid-cols-2">
                <img
                    id="centered-caption"
                    key='baby-left'
                    src={BabyLeft.src}
                    alt='baby-left'
                />
                <img
                    id="centered-caption"
                    key='baby-right'
                    src={BabyRight.src}
                    alt='baby-right'
                />
                </div>
                <br/><br/> */}
            {/* <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                {graphicdesignimages.map((image) => (
                    <img
                        key={image.src}
                        className='w-full rounded'
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </SlideshowLightbox> */}
            <br/>
            {/* <button id="button"><a target="_blank" href="https://behance.net/jesspdesign">More on my
                Behance →
            </a></button> */}
            <br/>
            <Footer/>
        </section>
    );
}

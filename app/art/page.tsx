'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
import Footer from "../components/footer";
import Enzo from "../../public/images/Fine Art/enzo.jpg";
import BB from "../../public/images/Fine Art/beignet_and_butters.jpg";
import Beach from "../../public/images/Fine Art/beach.jpg";
import CentralPark from "../../public/images/Fine Art/centralpark.jpg";
import Cat from "../../public/images/Fine Art/cat.jpg";
import Dog1 from "../../public/images/Fine Art/dog1.jpg";
import Dog2 from "../../public/images/Fine Art/dog2.jpg";
import Dog3 from "../../public/images/Fine Art/dog3.jpg";
import Card from "../../public/images/Fine Art/happyholidays.jpg";

export default async function Art() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section id="portfolio-page">
            <p>View more of my personal art at <a className="link" href="https://instagram.com/jessp.design" target="_blank">@jessp.design</a>.</p><br/>
            <div className="md:grid md:grid-cols-3">
                <img
                    id="art-image"
                    key='bb'
                    className='w-full rounded'
                    src={BB.src}
                    alt='bb'
                />
                <img
                    id="art-image"
                    key='enzo'
                    className='w-full rounded'
                    src={Enzo.src}
                    alt='enzo'
                />
                <img
                    id="art-image"
                    key='card'
                    className='w-full rounded'
                    src={Card.src}
                    alt='card'
                />
                <img
                    id="art-image"
                    key='dog1'
                    className='w-full rounded'
                    src={Dog1.src}
                    alt='dog1'
                />
                <img
                    id="art-image"
                    key='dog2'
                    className='w-full rounded'
                    src={Dog2.src}
                    alt='dog2'
                />
                <img
                    id="art-image"
                    key='dog3'
                    className='w-full rounded'
                    src={Dog3.src}
                    alt='dog3'
                />
                <img
                    id="art-image"
                    key='cat'
                    className='w-full rounded'
                    src={Cat.src}
                    alt='cat'
                />
                <img
                    id="art-image"
                    key='beach'
                    className='w-full rounded'
                    src={Beach.src}
                    alt='beach'
                />
                <img
                    id="art-image"
                    key='centralpark'
                    className='w-full rounded'
                    src={CentralPark.src}
                    alt='centralpark'
                />
            </div>
            {/* <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                {artimages.map((image) => (
                    <img
                        key={image.src}
                        className='w-full rounded'
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </SlideshowLightbox> */}
            <Footer/>
        </section>
    );
}

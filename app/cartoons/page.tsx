'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
import Footer from "../components/footer";

const cartoonimages = [
    {
        src: 'https://i.ibb.co/5vJtf5K/IMG-8416.png',
        alt: 'SF Hills',
    },
]

export const revalidate = 60;

export default async function CartoonPage() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <p className="my-5">
            </p>
            <img
                key={cartoonimages[0].alt}
                className='w-full rounded'
                src={cartoonimages[0].src}
                alt={cartoonimages[0].alt}
            />
            <Footer/>
        </section>
    );
}

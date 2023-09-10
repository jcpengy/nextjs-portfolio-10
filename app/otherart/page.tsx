'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";

const artimages = [
    {
        src: 'https://i.ibb.co/tBYMXNv/IMG-9649.jpg',
        alt: 'Friends',
    },
    {
        src: 'https://i.ibb.co/nwGMSRQ/IMG-9650.jpg',
        alt: 'Central Park',
    },
    {
        src: 'https://i.ibb.co/mz0GNzd/IMG-9654.jpg',
        alt: 'Ye Ye',
    },
    {
        src: 'https://i.ibb.co/RSjBBSK/IMG-9653.jpg',
        alt: 'Nai Nai',
    },
    {
        src: 'https://i.ibb.co/VmdbMft/Screen-Shot-2023-09-10-at-3-50-00-PM.png',
        alt: 'Museum',
    },
    {
        src: 'https://i.ibb.co/z8LTBwG/IMG-9656.jpg',
        alt: 'Dog',
    }
]

export const revalidate = 60;

export default async function OtherArt() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <h2>Other Art</h2>
            <p>I love to draw people and animals. I usually use pencil or colored pencil, but sometimes I'll paint or draw on my iPad.</p><br/>
            <SlideshowLightbox className='container grid grid-cols-2 gap-2'>
                {artimages.map((image) => (
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

'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";

const artimages = [
    {
        src: 'https://i.ibb.co/DGF0Gqv/BBD1-A40-F-A166-43-E5-8-C9-E-5-D0-DB278-B736.jpg',
        alt: 'Dogs',
    },
    {
        src: 'https://i.ibb.co/3ysxTKv/8-F0-B2-A9-C-669-E-44-A7-BDDB-5-AA89-D32733-E.jpg',
        alt: 'Surf',
    },
    {
        src: 'https://i.ibb.co/tBYMXNv/IMG-9649.jpg',
        alt: 'Friends',
    },
    {
        src: 'https://i.ibb.co/nwGMSRQ/IMG-9650.jpg',
        alt: 'Central Park',
    },
    {
        src: 'https://i.ibb.co/5jZt51Y/E8-BA3324-3641-4-EB2-A1-FC-1-B7-DF4-ABB3-BB-1-201-a.jpg',
        alt: 'Mountains',
    },
    // {
    //     src: 'https://i.ibb.co/mz0GNzd/IMG-9654.jpg',
    //     alt: 'Ye Ye',
    // },
    {
        src: 'https://i.ibb.co/RSjBBSK/IMG-9653.jpg',
        alt: 'Nai Nai',
    }
]

export const revalidate = 60;

export default async function OtherArt() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <h2>Fine Art</h2>
            <p>I like making art of people, animals, and places that are special to me. My go-to medium is pencil, but sometimes I oil paint or draw on my iPad.</p><br/>
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

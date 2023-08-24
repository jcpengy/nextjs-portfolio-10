'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
import Footer from "../components/footer";

const cartoonimages = [
    {
        src: 'https://i.ibb.co/89HpZ2Q/IMG-8944.jpg',
        alt: 'Dating in SF',
    },
    {
        src: 'https://i.ibb.co/5vJtf5K/IMG-8416.png',
        alt: 'SF Hills',
    },
    {
        src: 'https://i.ibb.co/5kkqYW6/IMG-8949.jpg',
        alt: 'Congress1',
    },
    {
        src: 'https://i.ibb.co/nsnCwCD/IMG-8950.jpg',
        alt: 'Congress2',
    },
    {
        src: 'https://i.ibb.co/bsqm4Rq/IMG-8952.jpg',
        alt: 'Bugs Life',
    },
    {
        src: 'https://i.ibb.co/z7n38WQ/IMG-8951.jpg',
        alt: 'Lady Clingford',
    },
]

export default async function CartoonPage() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <div className="image-cropper">
                <img
                    id="profile-pic"
                    key={'ceojess2'}
                    src={'https://i.ibb.co/C70VVFn/ceojess.png'}
                    alt={'ceojess2'}
                />
            </div>
            <p className="cartoons-p">
                CEO Jess is an anxious yet optimistic potato with a heart of gold. Follow her adventures navigating the
                daily struggles of work, dating, and beyond on @officialceojess!
            </p><br/>
            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                {cartoonimages.map((image) => (
                    <img
                        key={image.src}
                        className='w-full rounded'
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </SlideshowLightbox>
            <Footer/>
        </section>
    );
}

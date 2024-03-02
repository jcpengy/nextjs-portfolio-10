'use client';
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
import Footer from "../components/footer";

const ceojess = [
    {
        src: "https://i.ibb.co/BVHNMwp/IMG-1407.jpg",
        alt: "Getting set up"
    },
    {
        src: 'https://i.ibb.co/YXwWJ9K/IMG-9214.jpg',
        alt: 'Wine tasting',
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
        src: 'https://i.ibb.co/z7n38WQ/IMG-8951.jpg',
        alt: 'Lady Clingford',
    },
]

export default async function CartoonPage() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section id="portfolio-page">
            <div id="rowContainer">
                    <div id="review1">
                        <img src={ceojess[0].src} alt="" width="300" height="300" />
                    </div>
                    <div id="review1">
                        <img src={ceojess[1].src} alt="" width="300" height="300" />
                    </div>
                    <div id="review1">
                        <img src={ceojess[2].src} alt="" width="300" height="300" />
                    </div>
                </div>
                <div id="rowContainer">
                    <div id="review1">
                        <img src={ceojess[3].src} alt="" width="300" height="300" />
                    </div>
                    <div id="review1">
                        <img src={ceojess[4].src} alt="" width="300" height="300" />
                    </div>
                    <div id="review1">
                        <img src={ceojess[5].src} alt="" width="300" height="300" />
                    </div>
                </div>
                <br/>
                <button id="button"><a target="_blank" href="https://instagram.com/officialceojess">More on my
                    Instagram →
                </a></button><br/>
                <br/>
            
            <Footer/>
        </section>
    );
}

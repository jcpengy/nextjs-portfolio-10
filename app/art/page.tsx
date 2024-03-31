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
import Painting from "../../public/images/Fine Art/painting.jpg";
import DogPortraits from "../../public/images/Fine Art/dog-portraits.jpg";
import Dog4 from "../../public/images/Fine Art/dogs.jpg";

export default async function Art() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section id="portfolio-page">
            <p><i>To request a pet portrait, please email pengjess2@gmail.com or (for smaller portraits) submit an order <a className="link" href="https://www.etsy.com/listing/771510565/custom-pet-portrait-mini-pet-portrait?click_key=2a1f63c3f155ec69ad8321fb86f5616b4c7c2cd4%3A771510565&click_sum=0b9786a5&ref=shop_home_active_13&frs=1" target="_blank">here</a>.</i></p><br/>
            <img
                    id="art-image"
                    key='dogportraits'
                    className='w-full rounded'
                    src={DogPortraits.src}
                    alt='dogportraits'
                />
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
                    key='dog1'
                    className='w-full rounded'
                    src={Dog1.src}
                    alt='dog1'
                />
                <img
                    id="art-image"
                    key='dog4'
                    className='w-full rounded'
                    src={Dog4.src}
                    alt='dog4'
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
                    key='painting'
                    className='w-full rounded'
                    src={Painting.src}
                    alt='painting'
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
                    key='card'
                    className='w-full rounded'
                    src={Card.src}
                    alt='card'
                />
                <img
                    id="art-image"
                    key='centralpark'
                    className='w-full rounded'
                    src={CentralPark.src}
                    alt='centralpark'
                />
            </div>
            <br/>
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

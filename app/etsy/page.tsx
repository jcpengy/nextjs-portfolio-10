'use client';
import Footer from "../components/footer";
import React from "react";
import Allison1 from "../../public/images/Etsy/allison-04.jpg";
import EM1 from "public/images/Etsy/dana-06.jpg";
import EM2 from "public/images/Etsy/dana-05.jpg";
import EM3 from "public/images/Etsy/dana-03.jpg";
import EM4 from "public/images/Etsy/dana-04.jpg";
import Card from "public/images/Etsy/card.jpg";
import DogStickers from "public/images/Etsy/dogstickers.jpg";
import Horses from "public/images/Etsy/horses.jpg";

export default async function Etsy() {
    return (
        <section>
        <section id="portfolio-page">
            <h3 id="all-caps">ETSY</h3>
            <p>Freelance design work I've done for small businesses and individual customers.<br/><br/>
                View more projects in my <a className="link" href="https://www.etsy.com/shop/JessPDesign?ref=seller-platform-mcnav">Etsy shop</a> or <a className="link" href="https://www.behance.net/jesspdesign">Behance</a>.</p><br/>
                <img
                    id="art-image"
                    key='robbieemily1'
                    className='w-full rounded'
                    src={Allison1.src}
                    alt='robbieemily1'
                />
                <br/>
                <div className="md:grid md:grid-cols-2">
                <img
                    id="art-image"
                    key='em1'
                    className='w-full rounded'
                    src={EM1.src}
                    alt='em1'
                />
                <img
                    id="art-image"
                    key='em3'
                    className='w-full rounded'
                    src={EM3.src}
                    alt='em3'
                />
                </div>
                <br/>
                <div className="md:grid md:grid-cols-2">
                <img
                    id="art-image"
                    key='goodbye'
                    className='w-full rounded'
                    src={Card.src}
                    alt='goodbye'
                />
                <img
                    id="art-image"
                    key='horses'
                    className='w-full rounded'
                    src={Horses.src}
                    alt='horses'
                />
                </div>               
                <br/>
                <img
                    id="art-image"
                    key='dog stickers'
                    className='w-full rounded'
                    src={DogStickers.src}
                    alt='dog stickers'
                />
                <br/>
                <br/>        
        </section>
        <Footer/>
        </section>
    );
}

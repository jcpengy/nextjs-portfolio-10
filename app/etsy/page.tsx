'use client';
import Footer from "../components/footer";
import React from "react";
import Allison1 from "../../public/images/Etsy/allison-01.jpg";
import Allison2 from "../../public/images/Etsy/allison-02.jpg";
import EM1 from "public/images/Etsy/dana-01.jpg";
import EM2 from "public/images/Etsy/dana-02.jpg";
import Card from "public/images/Etsy/card.jpg";

export default async function Etsy() {
    return (
        <section id="portfolio-page">
            <h3 id="all-caps">ETSY</h3>
            <p>Freelance design work I've done for small businesses, schools, and family
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
                <img
                    id="art-image"
                    key='robbieemily2'
                    className='w-full rounded'
                    src={Allison2.src}
                    alt='robbieemily2'
                 />
                <br/>
                <i>Eid Mubarak Gift Wrapping Paper</i>
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
                    key='em2'
                    className='w-full rounded'
                    src={EM2.src}
                    alt='em2'
                />
                </div>
                <br/>
                <i>Goodbye Card</i>
                <img
                    id="art-image"
                    key='goodbye'
                    className='w-full rounded'
                    src={Card.src}
                    alt='goodbye'
                />
            <br/>
            <br/>
            <Footer/>
        </section>
    );
}

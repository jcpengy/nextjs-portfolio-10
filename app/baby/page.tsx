'use client';
import Footer from "../components/footer";
import React from "react";
import Kai1 from "public/images/Baby/swaddle-kai-1.jpg";
import Kai2 from "public/images/Baby/swaddle-kai-2.jpg";
import Kai3 from "public/images/Baby/swaddle-kai-3.jpg";
import Dion1 from "public/images/Baby/swaddle-dion-1.jpg";
import Dion2 from "public/images/Baby/swaddle-dion-2.jpg";
import Dion3 from "public/images/Baby/swaddle-dion-3.jpg";

export default async function Baby() {
    return (
        <section>
        <section id="portfolio-page">
            <h3 id="all-caps">BABY SWADDLES</h3>
            <p>A set of two baby swaddles I designed for my niece and nephew featuring pets in the family.<br/><br/>
                Custom ordered from <a className="link" href="https://www.scafos.com">Scafos</a>.</p><br/>
                <img
                    id="art-image"
                    key='kai1'
                    className='w-full rounded'
                    src={Kai1.src}
                    alt='kai1'
                /><br/>
                <img
                    id="art-image"
                    key='kai2'
                    className='w-full rounded'
                    src={Kai2.src}
                    alt='kai2'
                 />
                <br/>
                 <img
                    id="art-image"
                    key='dion1'
                    className='w-full rounded'
                    src={Dion1.src}
                    alt='dion1'
                />
            <br/>
            <br/>
        </section>
        <Footer/>
        </section>
    );
}

'use client';
import Footer from "../components/footer";
import KesslerCover from "public/images/Kessler/kessler-slide-1.jpg";
import KesslerSlide2 from "public/images/Kessler/kessler-slide-2.jpg";
import KesslerSlide3 from "public/images/Kessler/kessler-slide-3.jpg";
import KesslerSlide4 from "public/images/Kessler/kessler-slide-4.jpg";
import WendyFamily from "public/images/Kessler/wendy-family.jpg";
import WendyStars from "public/images/Kessler/wendy-stars.jpg";
import WendyCar from "public/images/Kessler/wendy-car.jpg";

export default async function Kessler() {
    return (
        <section>
        <section id="portfolio-page">
            <h3 id="all-caps">KESSLER PROJECT</h3>
            <p>Designs, 3D assets, and illustrations for a space theme park concept and finalist in the 2018 Disney Imaginations contest. I led art direction and development on my four-person team.</p><br/>
            <br/>
                <img
                    id="centered-caption"
                    key='wendy-stars'
                    src={WendyStars.src}
                    alt='wendy-stars'
                />
                <br/> 
                <img
                    id="centered-caption"
                    key='wendy-family'
                    src={WendyFamily.src}
                    alt='wendy-family'
                />
                <br/>
                <img
                    id="centered-caption"
                    key='wendy-car'
                    src={WendyCar.src}
                    alt='wendy-car'
                />
                <br/>
            <img
                    id="centered-caption"
                    key='kessler-2'
                    src={KesslerSlide2.src}
                    alt='kessler-2'
                />
                <br/>
                 <img
                    id="centered-caption"
                    key='kessler-3'
                    src={KesslerSlide3.src}
                    alt='kessler-3'
                />
                <br/>
                 <img
                    id="centered-caption"
                    key='kessler-4'
                    src={KesslerSlide4.src}
                    alt='kessler-4'
                />
                <br/>
            <br/><br/>
        </section>
        <Footer/>
        </section>
    );
}

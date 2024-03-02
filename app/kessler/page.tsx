'use client';
import Footer from "../components/footer";
import KesslerPoster from "public/images/Kessler/kessler-poster.jpg";
import KesslerSlide2 from "public/images/Kessler/kessler-slide-2.jpg";
import KesslerSlide3 from "public/images/Kessler/kessler-slide-3.jpg";
import KesslerSlide4 from "public/images/Kessler/kessler-slide-4.jpg";

export default async function Kessler() {
    return (
        <section id="portfolio-page">
            <h3 id="all-caps">KESSLER PROJECT</h3>
            <p>Designs, 3D assets, and slides for a space theme park concept and finalist in the 2018 Disney Imaginations contest. I led art direction and development on my four-person team.</p><br/>
            <br/>
            <img
                    id="centered-caption"
                    key='kessler-2'
                    src={KesslerSlide2}
                    alt='kessler-2'
                />
                <br/>
                 <img
                    id="centered-caption"
                    key='kessler-3'
                    src={KesslerSlide3}
                    alt='kessler-3'
                />
                <br/>
                 <img
                    id="centered-caption"
                    key='kessler-4'
                    src={KesslerSlide4}
                    alt='kessler-4'
                />
                <br/>
            <img
                    id="centered-caption"
                    key='kessler-poster'
                    src={KesslerPoster.src}
                    alt='kessler-poster'
                />
            <Footer/>
        </section>
    );
}

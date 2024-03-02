'use client';
import Footer from "../components/footer";
import KesslerPoster from "public/images/kessler-poster.jpg";

export default async function Kessler() {
    return (
        <section id="portfolio-page">
            <h3 id="all-caps">KESSLER PROJECT</h3>
            <p>Designs, 3D assets, and slides for a space theme park concept and finalist in the 2018 Disney Imaginations contest. I led art direction and development on my four-person team.</p><br/>
            <br/>
            <img
                    id="centered-caption"
                    key='kessler-1'
                    src="https://i.ibb.co/wyPG8Mr/Screen-Shot-2021-04-06-at-2-13-02-PM.png"
                    alt='kessler-1'
                />
                <br/>
                 <img
                    id="centered-caption"
                    key='kessler-2'
                    src="https://i.ibb.co/tpr4fkW/Screen-Shot-2021-04-06-at-2-13-32-PM.png"
                    alt='kessler-2'
                />
                <br/>
                 <img
                    id="centered-caption"
                    key='kessler-3'
                    src="https://i.ibb.co/0QkSkjy/Screen-Shot-2021-04-06-at-2-13-57-PM.png"
                    alt='kessler-3'
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

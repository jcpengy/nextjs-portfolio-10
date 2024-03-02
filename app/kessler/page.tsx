'use client';
import Footer from "../components/footer";

export default async function Kessler() {
    return (
        <section id="portfolio-page">
            <h3 id="all-caps">KESSLER PROJECT</h3>
            <p>Designs, 3D assets, and slides for a space theme park concept and finalist in the 2018 Disney Imaginations contest. I led art direction and development on my four-person team.</p><br/>
            <img
                    id="kessler-poster"
                    key='kessler-poster'
                    src="https://i.ibb.co/XSM6SKv/kessler-poster.png"
                    alt='kessler-poster'
                />
            <Footer/>
        </section>
    );
}

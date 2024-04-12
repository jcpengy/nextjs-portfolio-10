'use client';
import Footer from "../components/footer";
import Beach from "../../public/images/Fine Art/beach.jpg";
import CentralPark from "../../public/images/Fine Art/centralpark.jpg";
import Cat from "../../public/images/Fine Art/cat.jpg";
import Card from "../../public/images/Fine Art/happyholidays.jpg";
import Painting from "../../public/images/Fine Art/painting.jpg";


export default async function MoreArt() {
    return (
        <section>
        <section id="portfolio-page">
            <div className="md:grid md:grid-cols-3">
                <img
                    id="art-image"
                    key='Centralpark'
                    className='w-full rounded'
                    src={CentralPark.src}
                    alt='centralpark'
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
                    key='painting'
                    className='w-full rounded'
                    src={Painting.src}
                    alt='painting'
                />
            </div>
            <br/>
        </section>
        <Footer/>
        </section>
    );
}

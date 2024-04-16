'use client';
import Footer from "../components/footer";
import Beach from "../../public/images/Fine Art/beach.jpg";
import CentralPark from "../../public/images/Fine Art/centralpark.jpg";
import Cat from "../../public/images/Fine Art/cat.jpg";
import Collage1 from "../../public/images/Fine Art/collage1.jpg";
import Collage2 from "../../public/images/Fine Art/collage2.jpg";
import Painting from "../../public/images/Fine Art/painting.jpg";
import Yeye from "../../public/images/Fine Art/yeye.jpg";
import Nainai from "../../public/images/Fine Art/nainai.jpg";


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
            <div className="md:grid md:grid-cols-3">
                <img
                    id="art-image"
                    key='collage1'
                    className='w-full rounded'
                    src={Collage1.src}
                    alt='collage1'
                />
                <img
                    id="art-image"
                    key='collage2'
                    className='w-full rounded'
                    src={Collage2.src}
                    alt='collage2'
                /> 
                <img
                    id="art-image"
                    key='yeye'
                    className='w-full rounded'
                    src={Yeye.src}
                    alt='yeye'
                /> 
            </div>
            <div className="md:grid md:grid-cols-3">
                <img
                    id="art-image"
                    key='nainai'
                    className='w-full rounded'
                    src={Nainai.src}
                    alt='nainai'
                />
            </div>
            <br/>
        </section>
        <Footer/>
        </section>
    );
}

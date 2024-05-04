'use client';
import Footer from "../components/footer";
import Pic1 from "../../public/images/Photography/IMG_1906.jpg";
import Pic2 from "../../public/images/Photography/IMG_1911.jpg";


export default async function Photography() {
    return (
        <section>
        <section id="portfolio-page">
            <p>My new hobby is taking film photos with my Nikon One Touch Zoom 90. Below are some shots I'm proud of:D</p><br/>
            <img
                    id="art-image"
                    key='pic2'
                    className='w-full rounded'
                    src={Pic2.src}
                    alt='pic2'
                />
            <br/>
            <img
                    id="art-image"
                    key='pic1'
                    className='w-full rounded'
                    src={Pic1.src}
                    alt='pic1'
                />
            <br/>
            {/* <img
                    id="art-image"
                    key='pic3'
                    className='w-full rounded'
                    src={Pic3.src}
                    alt='pic3'
                />
            <br/>
            <img
                    id="art-image"
                    key='pic4'
                    className='w-full rounded'
                    src={Pic4.src}
                    alt='pic4'
                />
            <br/>
            <img
                    id="art-image"
                    key='pic5'
                    className='w-full rounded'
                    src={Pic5.src}
                    alt='pic5'
                />
            <br/> */}
        </section>
        <Footer/>
        </section>
    );
}

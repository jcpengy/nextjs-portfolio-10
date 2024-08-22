'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/SFGrooming/finalImages', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
console.log(finalImageList.length);
const devImages = require.context('../../public/images/SFGrooming/devImages', false);
const devImageList = devImages.keys().map(image => devImages(image));

import { useState } from "react";

export default function SFGrooming() {
    const [openSection, setOpenSection] = useState(false);
    const toggle = () => {
        setOpenSection(!openSection);
    };
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>SAN FRANCISCO GROOMING</h2>
                <h4><i>2024</i></h4>
                <div id="section-description">
                    Logo and visual identity for San Francisco Grooming (or San Francisco Pet Grooming), a small pet grooming business in Hayes Valley. The shop is known for its affordable and friendly customer service. I designed them a menu, business cards, and signage to build their branding and reflect the playful, cozy, and charming atmosphere to new and existing customers.              </div>
                <button id="section-toggle" onClick={toggle}>{"Research & Concept Development " + (openSection ? "-" : "+")}</button>
                {
                    openSection &&
                    <>
                        <div id="section-description">
                            Local, welcoming, funky to match the San Francisco aesthetic, but calming for dogs and groomers. Inspiration: Duboce Park, existing signage that uses a bright orange and animal silhouettes, Golden Gate Bridge.</div>                        <div id="image-gallery-with-text-overlay">
                            {devImageList.map((image, index) => (
                                <div className="image-1 item">
                                    <img key={index} src={image.default.src} alt={`image-${index}`} />
                                    <p>Image Caption</p>
                                </div>

                            ))}
                        </div>
                        <div id="section-end">
                            ------ END -------
                        </div>
                    </>
                }
                <div id="image-gallery-with-text-overlay">
                    {finalImageList.map((image, index) => (
                        <div className="image-1 item">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>

                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

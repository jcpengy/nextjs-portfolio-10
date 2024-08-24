'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/Kessler', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

import { useState } from "react";

export default function Kessler() {
    const [openSection, setOpenSection] = useState(false);
    const toggle = () => {
        setOpenSection(!openSection);
    };
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>Disney Imaginations: Kessler Project</h2>
                <h4><i>2018</i></h4>
                <div id="section-description">
                    Kessler Project is a theme park concept that was a finalist in the 2018 Disney Imaginations competition. As the designer and artist on a four-person team, I led visual direction and creation of our submission slides and presentation slides to the Imagineering executives in Glendale, California.                </div>
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

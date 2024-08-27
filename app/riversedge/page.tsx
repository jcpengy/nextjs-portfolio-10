'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/RiversEdge/finalImages', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const devImages = require.context('../../public/images/RiversEdge/devImages', false);
const devImageList = devImages.keys().map(image => devImages(image));

import { useState } from "react";

export default function RiversEdge() {
    const [openSection, setOpenSection] = useState(false);
    const toggle = () => {
        setOpenSection(!openSection);
    };
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>River's Edge Cabin</h2>
                <h4><i>2022</i></h4>
                <div id="section-description">
                    A logo design, mini pamphlet, and set of stickers for River’s Edge Cabin, a charming Airbnb retreat in Ellijay, Georgia. The client wanted a vintage, retro style with warm colors. I created a visual identity featuring simple shapes, clean lines, and a bold font to achieve a fun, retro, and inviting aesthetic.                </div>
                <button id="section-toggle" onClick={toggle}>{"Research & Concept Development " + (openSection ? "-" : "+")}</button>
                {
                    openSection &&
                    <>
                        <div id="section-description">
                            {/* For inspiration, I looked at vintage sticker and logo designs and also used images provided by the client. The logo design was pretty straightforward since the client provided a sketch of what they wanted. I decided to start with the sticker designs to set the tone for the rest of the project and drafted rough ideas using basic shapes. I liked how the triangle mirrored the cabin’s gable roof and used that throughout my designs.                         </div> */}
                        </div>
                        <div id="image-gallery-with-text-overlay">
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

'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/Eid/finalImages', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const devImages = require.context('../../public/images/Eid/devImages', false);
const devImageList = devImages.keys().map(image => devImages(image));

import { useState } from "react";

export default function Eid() {
    const [openSection, setOpenSection] = useState(false);
    const toggle = () => {
        setOpenSection(!openSection);
    };
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>EID MUBARAK GIFT WRAPPING PAPER</h2>
                <h4><i>2024</i></h4>
                <div id="section-description">
                    A set of eight Eid Mubarak-themed gift wrapping paper designs for a Palestinian small business, Nine To Five Pali. The client wanted four designs for children and four modern designs for adults. I blended traditional Muslim iconography with a vibrant green and purple color palette to create festive patterns that resonate with both kids and adults.
                </div>
                <button id="section-toggle" onClick={toggle}>{"Research & Concept Development " + (openSection ? "-" : "+")}</button>
                {
                    openSection &&
                    <>
                        <div id="section-description">
                            I played around with visual motifs associated with the holiday, such as lanterns and string lights, mosques, the crescent and star, Mecca, and the words “Eid Mubarak,” the “Merry Christmas” phrase for the holiday. For the color palette, I used green (color of Islam) and a complementary rose as well as purple to signify royalty and spirituality.
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

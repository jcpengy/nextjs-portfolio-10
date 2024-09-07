'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder 
const doumaImages = require.context('../../public/images/NYT/douma1', false);
const doumaImageList = doumaImages.keys().map(image => doumaImages(image));
const thaiImages = require.context('../../public/images/NYT/thai', false);
const thaiImageList = thaiImages.keys().map(image => thaiImages(image));
const finalImages = require.context('../../public/images/NYT', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const xImages = require.context('../../public/images/NYT/crossword', false);
const xImageList = xImages.keys().map(image => xImages(image));

import { useState } from "react";

export default function NYT() {
    const [openSection, setOpenSection] = useState(false);
    const toggle = () => {
        setOpenSection(!openSection);
    };
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>Graphics Internship: The New York Times</h2>
                <h4><i>2018</i></h4>
                <div id="section-description">
                As a Graphics Intern on the Immersive Storytelling team, I designed 2D/3D cover images, infographics, and motion graphics for augmented reality articles. I received credits in “Step Inside the Thai Cave in Augmented Reality” and “How We Created a Virtual Crime Scene to Investigate Syria’s Chemical Attack,” which won an Emmy in the New Approaches category. 
                <br/><br/>I also led design and UI development on our intern project, a crossword puzzle re-imagined in 3D.</div>
                <div id="image-gallery-with-text-overlay">
                    {doumaImageList.map((image, index) => (
                        <div className="image-1 item">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>

                    ))}
                </div>
                <div id="image-gallery-with-text-overlay">
                    {finalImageList.map((image, index) => (
                        <div className="image-1 item">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>

                    ))}
                </div>
                <div id="image-gallery-with-text-overlay">
                    {thaiImageList.map((image, index) => (
                        <div className="image-1 item">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>

                    ))}
                </div>
                <div id="image-gallery-with-text-overlay">
                    {xImageList.map((image, index) => (
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

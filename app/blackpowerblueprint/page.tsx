'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/BPB/finalImages', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const devImages = require.context('../../public/images/BPB/devImages', false);
const devImageList = devImages.keys().map(image => devImages(image));

import { useState } from "react";

export default function BPB() {
    const [openSection, setOpenSection] = useState(false);
    const toggle = () => {
        setOpenSection(!openSection);
    };
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>BLACK POWER BLUEPRINT</h2>
                <h4><i>2020-2023</i></h4>
                <div id="section-description">
                    Instagram and Facebook posts for Black Power Blueprint, a joint program of the African People’s Education and Defense Fund (APEDF) and Black Star Industries (BSI) that aims to transform North St. Louis through renovation, economic development, and political power by and for the black community.                </div>
                <button id="section-toggle" onClick={toggle}>{"Research & Concept Development " + (openSection ? "-" : "+")}</button>
                {
                    openSection &&
                    <>
                        <div id="section-description">
                            The red, black and green flag that flies across the street from the Uhuru House is an inspiring symbol that represents a future of justice, prosperity and liberation for African people in St. Louis and around the world.                        </div>
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

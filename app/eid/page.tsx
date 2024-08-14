'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import EidM from "../../public/images/Eid/eid-cover.jpg";
import EidIdea1 from "../../public/images/Eid/eid-mubarak-ideas-01.jpg";
import EidIdea2 from "../../public/images/Eid/eid-mubarak-ideas-02.jpg";
import EidIdea3 from "../../public/images/Eid/eid-mubarak-ideas-03.jpg";
import { useState } from "react";

const finalImages = [
    { "src": EidM.src, "alt": "San Francisco Grooming" },
    { "src": EidM.src, "alt": "River's Edge Cabin" },
    { "src": EidM.src, "alt": "Black Power Blueprint" },
    { "src": EidM.src, "alt": "Eid Mubarak Wrapping Paper" },
    { "src": EidM.src, "alt": "Disney Imagineering: Kessler Project" },
]

const devImages = [
    { "src": EidIdea1.src, "alt": "Eid Mubarak Draft Image 1" },
    { "src": EidIdea2.src, "alt": "Eid Mubarak Draft Image 2" },
    { "src": EidIdea3.src, "alt": "Eid Mubarak Draft Image 3" },
]

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
                    A set of eight Eid Mubarak-themed gift wrapping paper designs for a Palestinian small business, Nine To Five Pali. The client wanted four designs geared towards children and four modern designs for adults. I blended traditional Muslim iconography with a vibrant green and purple color palette to create festive patterns that resonate with both kids and adults.
                </div>
                <button id="section-toggle" onClick={toggle}>{"Research & Concept Development " + (openSection ? "-" : "+")}</button>
                {
                    openSection &&
                    <>
                        <div id="section-description">
                            I played around with visual motifs associated with the holiday, such as lanterns and string lights, mosques, the crescent and star, Mecca, and the words “Eid Mubarak,” the “Merry Christmas” phrase for the holiday. For the color palette, I used green (color of Islam) and a complementary rose as well as purple to signify royalty and spirituality.
                        </div>
                        <div id="image-gallery-with-text-overlay">
                            {
                                devImages.map(image => {
                                    return (
                                        <div className="image-1 item">
                                            <a href="#">
                                                <img src={image.src} alt={image.alt} />
                                            </a>
                                            <p>Image Caption</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div id="section-end">
                            ------ END -------
                        </div>
                    </>
                }
                <div id="image-gallery-with-text-overlay">
                    {
                        finalImages.map(image => {
                            return (
                                <div className="image-1 item">
                                    <a href="#">
                                        <img src={image.src} alt={image.alt} />
                                    </a>
                                    <p>Image Caption</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <Footer />
        </>
    );
}

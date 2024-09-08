'use client';
import Eid from "public/images/Eid/finalImages/1.jpg";
import River from "public/images/RiversEdge/riversedge-cover.jpg";
import KesslerSlide2 from "public/images/Kessler/kessler-cover.jpg";
import BlackPower from "public/images/BPB/bpb-cover.jpg";
import SFGrooming from "public/images/SFGrooming/finalImages/1.jpg";
import NYT from "public/images/NYT/douma1/1.jpg";

const images = [
    { "src": Eid.src, "alt": "Eid Mubarak", "link": "/eid"},
    { "src": River.src, "alt": "River's Edge Cabin", "link": "/riversedge"},
    { "src": NYT.src, "alt": "The New York Times", "link": "/new-york-times" },
    { "src": BlackPower.src, "alt": "Black Power Blueprint", "link": "/blackpowerblueprint" },
    { "src": SFGrooming.src, "alt": "San Francisco Grooming", "link": "/sfgrooming" },
    { "src": KesslerSlide2.src, "alt": "Kessler Project", "link": "/kessler"},

]

export default function GraphicDesign() {
    return (
        <section id="graphic-design">
            <h2>Graphic Design</h2>
            <div id="section-description">
                Example design projects that showcase visual storytelling through branding, worldbuilding, and infographics. <u>Click on an image to view more details about a project.</u>
            </div>
            <div id="image-gallery-with-text-overlay">
                {
                    images.map(image => {
                        return (
                            <div className="image-1 item">
                                <a href={image.link}>
                                    <img id="clickable-image" src={image.src} alt={image.alt} />
                                </a>
                                <p>Image Caption</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

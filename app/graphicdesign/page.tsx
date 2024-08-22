'use client';
import Eid from "public/images/Eid/finalImages/eid-cover.jpg";
import River from "public/images/RiversEdge/finalImages/riversedge-cover.jpg";
import KesslerSlide2 from "public/images/Kessler/kessler-slide-1.jpg";
import BlackPower from "public/images/BPB/bpb-cover.jpg";
import SFGrooming from "public/images/SFGrooming/finalImages/1.jpg";

const images = [
    { "src": Eid.src, "alt": "Eid Mubarak", "link": "/eid"},
    { "src": River.src, "alt": "River's Edge Cabin", "link": "/riversedge"},
    { "src": KesslerSlide2.src, "alt": "Kessler Project", "link": "/kessler"},
    { "src": BlackPower.src, "alt": "Black Power Blueprint", "link": "/blackpowerblueprint" },
    { "src": SFGrooming.src, "alt": "San Francisco Grooming", "link": "/sfgrooming" },
]

export default function GraphicDesign() {
    return (
        <section id="graphic-design">
            <h2>GRAPHIC DESIGN</h2>
            <div id="section-description">
                Selected projects in graphic design, small business branding, and visual storytelling.
            </div>
            <div id="image-gallery-with-text-overlay">
                {
                    images.map(image => {
                        return (
                            <div className="image-1 item">
                                <a href={image.link}>
                                    <img src={image.src} alt={image.alt} />
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

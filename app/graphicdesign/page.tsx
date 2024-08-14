'use client';
import Eid from "public/images/Eid/eid-cover.jpg";
import River from "public/images/riversedge-cover.jpg";
import KesslerSlide2 from "public/images/Kessler/kessler-slide-2.jpg";
const images = [
    { "src": Eid.src, "alt": "San Francisco Grooming", "link": "/eid"},
    { "src": River.src, "alt": "River's Edge Cabin", "link": "/eid"},
    { "src": KesslerSlide2.src, "alt": "Black Power Blueprint", "link": "/eid"},
    { "src": Eid.src, "alt": "Eid Mubarak Wrapping Paper", "link": "/eid" },
    { "src": River.src, "alt": "Disney Imagineering: Kessler Project", "link": "/eid" },
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

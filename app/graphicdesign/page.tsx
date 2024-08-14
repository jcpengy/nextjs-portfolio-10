'use client';
import { ImgGalleryWithTextOverlay } from "app/imgGalleryWithTextOverlay/page";
import KesslerSlide2 from "public/images/Kessler/kessler-slide-2.jpg";
import KesslerSlide3 from "public/images/Kessler/kessler-slide-3.jpg";
import KesslerSlide4 from "public/images/Kessler/kessler-slide-4.jpg";
const images = [
    {"src": KesslerSlide2.src, "alt": "San Francisco Grooming"},
    {"src": KesslerSlide3.src, "alt": "River's Edge Cabin"},
    {"src": KesslerSlide4.src, "alt": "Black Power Blueprint"},
    {"src": KesslerSlide2.src, "alt": "Eid Mubarak Wrapping Paper"},
    {"src": KesslerSlide3.src, "alt": "Disney Imagineering: Kessler Project"},
]

export default function GraphicDesign() {
    return (
        <section id="graphic-design">
            <h2>GRAPHIC DESIGN</h2>
            <div id="section-description">
                Selected projects in graphic design, small business branding, and visual storytelling.
            </div>
            {/* <ImgGalleryWithTextOverlay images={images}/> */}
        </section>
    );
}

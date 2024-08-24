"use client"
import CEEM from "../../public/images/CEEM/ceem.gif";
import Sandbox from "../../public/images/SandboxCopy/sandbox.gif";

const images = [
    { "src": CEEM.src, "alt": "CEEM", "link": "/ceem" },
    { "src": Sandbox.src, "alt": "Sandbox Copy", "link": "/sandboxcopy" },
]

export default function UXDesign() {
    return (
        <section id="ux-design">
            <h2>UI/UX Design</h2>
            <div id="section-description">
                Tools and applications I'm working on at Adobe. Contact me to view the projects. 
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

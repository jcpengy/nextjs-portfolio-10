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
          <div id="section-description">
            <h2>Projects</h2>
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

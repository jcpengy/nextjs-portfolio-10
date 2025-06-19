"use client"
import CEEM from "../../public/images/CEEM/ceem.gif";
import Sandbox from "../../public/images/SandboxCopy/sandbox.gif";
import OnDemandLearning from "../../public/images/ODL/ODL-home.jpg";
import NYT from "../../public/images/NYT/nyt-cover.jpg";
import Disney from "../../public/images/kessler-cover.jpg";

const images = [
    { "src": CEEM.src, "alt": "CEEM", "link": "/ceem" },
    { "src": Sandbox.src, "alt": "Sandbox Copy", "link": "/sandboxcopy" },
    { "src": OnDemandLearning.src, "alt": "On-Demand Learning", "link": '/on-demand-learning' },
    { "src": NYT.src, "alt": "The New York Times", "link": '/new-york-times' },
    { "src": Disney.src, "alt": "Disney Imagineering", "link": 'kessler' }
]

export default function UXDesign() {
    return (
        <section id="ux-design">
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

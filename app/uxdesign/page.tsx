"use client"
import CEEM from "../../public/images/CEEM/ceem.gif";
import Sandbox from "../../public/images/SandboxCopy/sandbox.gif";
import OnDemandLearning from "../../public/images/ODL/hero-image.png";
import NYT from "../../public/images/NYT/douma1/1.jpg";
import Disney from "../../public/images/Kessler/wendy-stars.jpg";

const images = [
    { "src": CEEM.src, "alt": "CEEM", "link": "/ceem" },
    { "src": Sandbox.src, "alt": "Sandbox Copy", "link": "/sandboxcopy" },
    { "src": OnDemandLearning.src, "alt": "On-Demand Learning", "link": '/on-demand-learning' },
    { "src": NYT.src, "alt": "The New York Times", "link": '/new-york-times' },
    { "src": Disney.src, "alt": "Disney Imagineering", "link": 'kessler' }
]

export default function UXDesign() {
    return (
      <section>
        <div className="two-column-container">
          <div className="column">
            <a href={images[2].link}>
              <img id="clickable-image" src={OnDemandLearning.src} alt="ODL"/>
            </a>
          </div>
          <div className="column">
            <h4>On-Demand Learning</h4>
            <h6>UI/UX Design & Development</h6>
            A hands-on learning application to get customers and partners ramped up on Adobe Experience Platform.
          </div>
        </div>
        <div className="two-column-container">
          <div className="column">
            <a href={images[0].link}>
              <img id="clickable-image" src={CEEM.src} alt="CEEM"/>
            </a>
          </div>
          <div className="column">
            <h4>Customer Engineering Enablement Manager</h4>
            <h6>UI/UX Design & Development</h6>
            A hands-on learning application to get customers and partners ramped up on Adobe Experience Platform.
          </div>
        </div>
        <div className="two-column-container">
          <div className="column">
            <a href={images[1].link}>
              <img id="clickable-image" src={Sandbox.src} alt="Sandbox copy"/>
            </a>
          </div>
          <div className="column">
          <h4>Sandbox Artifact Copy</h4>
            <h6>UI/UX Design & Development</h6>
            A hands-on learning application to get customers and partners ramped up on Adobe Experience Platform.
          </div>
        </div>
        <div className="two-column-container">
          <div className="column">
            <a href={images[3].link}>
              <img id="clickable-image" src={NYT.src} alt="NYT"/>
            </a>
          </div>
          <div className="column">
          <h4>The New York Times</h4>
            <h6>3D Modeling, Graphics Development, UI/UX Design & Development</h6>
            A hands-on learning application to get customers and partners ramped up on Adobe Experience Platform.
          </div>
        </div>
        <div className="two-column-container">
          <div className="column">
            <a href={images[4].link}>
              <img id="clickable-image" src={Disney.src} alt="Disney"/>
            </a>
          </div>
          <div className="column">
          <h4>Disney Imagineering</h4>
            <h6>Graphic Design & Illustration</h6>
            A hands-on learning application to get customers and partners ramped up on Adobe Experience Platform.
          </div>
        </div>
        {/*<div id="image-gallery-with-text-overlay">*/}
        {/*  {*/}
        {/*    images.map(image => {*/}
        {/*      return (*/}
        {/*        <div className="image-1 item">*/}
        {/*          <a href={image.link}>*/}
        {/*            <img id="clickable-image" src={image.src} alt={image.alt}/>*/}
        {/*          </a>*/}
        {/*          <p>Image Caption</p>*/}
        {/*        </div>*/}
        {/*      )*/}
        {/*    })*/}
        {/*  }*/}
        {/*</div>*/}
      </section>
    );
}

'use client';
import Lasso from "public/images/ProjectLasso/m1/odl/a.png";
import ODL from "public/images/ODL/current/3.png";
import SandboxCopy from "public/images/SandboxCopy/cover.png";
import DesktopNavbar from "../components/desktopNavbar";
import Footer from "../components/footer";
import React from "react";

const images = [
  { "src": Lasso.src, "alt": "Project Lasso", "link": "/projectlasso"},
  { "src": ODL.src, "alt": "On-Demand Learning", "link": "/on-demand-learning" },
  { "src": SandboxCopy.src, "alt": "Sandbox Management App", "link": "/sandboxcopy"}
]

export default function UIUX() {
  return (
    <>
      <DesktopNavbar />
      <section>
        <br/>
        {/*Hero section*/}
        <div id="center-text">
          <h2>ui/ux</h2>
          <h4>Select projects in UI/UX design and development.</h4>
        </div>
        <br/>
        <div id="image-gallery-with-text-overlay">
          {
            images.map(image => {
              return (
                <div className="image-1 item">
                  <a href={image.link}>
                    <img id="clickable-image" src={image.src} alt={image.alt}/>
                  </a>
                  <p>Image Caption</p>
                </div>
              )
            })
          }
        </div>
      </section>
      <Footer/>
    </>
  );
}

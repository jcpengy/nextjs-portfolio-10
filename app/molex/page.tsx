'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder
const finalImages = require.context('../../public/images/Molex/images', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));

import { useState } from "react";

export default function Molex() {
  const [openSection, setOpenSection] = useState(false);
  const toggle = () => {
    setOpenSection(!openSection);
  };
  return (
    <>
      <DesktopNavbar />
      <section id="graphic-design-project">
        <h2>Digital Media Internship: Molex</h2>
        <h4><i>2017</i></h4>
        <div id="section-description">
          As a Digital Media Intern at Molex, I developed VR/AR mock-ups, motion graphics, and infographics to showcase
          a new line of power connectors.
          I also produced and animated a two-minute promotional video for an innovative gas sensor.
        </div>
        <br/>
        <div id="image-gallery-with-text-overlay">
          {finalImageList.map((image, index) => (
            <div className="image-1 item">
              <img key={index} src={image.default.src} alt={`image-${index}`}/>
              <p>Image Caption</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

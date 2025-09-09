'use client';
import Eid from "public/images/Eid/eid-paper-2.jpg";
import River from "public/images/RiversEdge/6.jpg";
import KesslerSlide2 from "public/images/kessler-cover.jpg";
import BlackPower from "public/images/BPB/bpb-cover.jpg";
import Molex from "public/images/Molex/cover.png";
import NYT from "../../public/images/NYT/cover/1.png";
import DesktopNavbar from "../components/desktopNavbar";
import Footer from "../components/footer";
const otherImages = require.context('../../public/images/design', false);
const otherImageList = otherImages.keys().map(image => otherImages(image));
import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import Masonry from "react-responsive-masonry";

const images = [
  { "src": Eid.src, "alt": "Eid Mubarak", "link": "/eid"},
  { "src": NYT.src, "alt": "The New York Times", "link": "/new-york-times" },
  { "src": River.src, "alt": "River's Edge Cabin", "link": "/riversedge"},
  { "src": BlackPower.src, "alt": "Black Power Blueprint", "link": "/blackpowerblueprint" },
  { "src": KesslerSlide2.src, "alt": "Kessler Project", "link": "/kessler"},
  { "src": Molex.src, "alt": "Molex", "link": "/molex"}
]

export default function GraphicDesign() {
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <DesktopNavbar />
      <section>
        <br/>
        {/*Hero section*/}
        <div id="center-text">
          <h2>graphic design</h2>
          <h4>Select projects that showcase visual storytelling through branding, world-building, and information design.</h4>
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
        <br />
        <FsLightbox
          toggler={toggler}
          sources={[otherImageList[imageIndex].default.src]}
          key={imageIndex}
          thumbs={[otherImageList[imageIndex].default.src]}
        />
        <Masonry columnsCount={3} gutter="10px">
          {otherImageList.map((image, i) => (
            <button onClick={() => {
              setToggler(!toggler);
              setImageIndex(i);
            }}>
              <img
                alt="design"
                key={i}
                src={image.default.src}
                style={{width: "100%", display: "block"}}
              />
            </button>
          ))}
        </Masonry>
      </section>
      <Footer/>
    </>
  );
}

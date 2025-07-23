'use client';
const artImages = require.context('../../public/images/art', false);
const artImageList = artImages.keys().map(image => artImages(image));
import DesktopNavbar from "../components/desktopNavbar";
import Footer from "../components/footer";
import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import Masonry from "react-responsive-masonry";

export default function Art() {
  const [toggler, setToggler] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <DesktopNavbar/>
      <section>
        <br/>
        {/*Hero section*/}
        <div id="center-text">
          <h2>art</h2>
          <h4>A collection of paintings, drawings, and sketches spanning a variety of styles and subjects.</h4>
        </div>
        <br/>
        <FsLightbox
          toggler={toggler}
          sources={[artImageList[imageIndex].default.src]}
          key={imageIndex}
          thumbs={[artImageList[imageIndex].default.src]}
        />
        <Masonry columnsCount={3} gutter="10px">
          {artImageList.map((image, i) => (
            <button onClick={() => {
              setToggler(!toggler);
              setImageIndex(i);
            }}>
              <img
                alt="art"
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

'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder
const nytImages = require.context('../../public/images/NYT', false);
const nytImageList = nytImages.keys().map(image => nytImages(image));

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Masonry from "react-responsive-masonry";

export default function NYT() {
    const [toggler, setToggler] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>Graphics Internship: The New York Times</h2>
                <h4><i>2018</i></h4>
                <div id="section-description">
                As a Graphics Intern on the Immersive Storytelling team, I designed 2D/3D cover images, infographics, and motion graphics for augmented reality articles. I received credits in “Step Inside the Thai Cave in Augmented Reality” and “How We Created a Virtual Crime Scene to Investigate Syria’s Chemical Attack,” which won an Emmy in the New Approaches category.
                <br/><br/>I also led design and UI development on our intern project, a crossword puzzle re-imagined in 3D.</div>
                <br />
                <FsLightbox
                  toggler={toggler}
                  sources={[nytImageList[imageIndex].default.src]}
                  key={imageIndex}
                  thumbs={[nytImageList[imageIndex].default.src]}
                />
                <Masonry columnsCount={3} gutter="10px">
                    {nytImageList.map((image, i) => (
                      <button onClick={() => {
                          setToggler(!toggler);
                          setImageIndex(i);
                      }}>
                          <img
                            alt="nyt"
                            key={i}
                            src={image.default.src}
                            style={{width: "100%", display: "block"}}
                          />
                      </button>
                    ))}
                </Masonry>
            </section>
            <Footer />
        </>
    );
}

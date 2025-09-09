'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder
const finalImages = require.context('../../public/images/Kessler/slides', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const wendy = require.context('../../public/images/Kessler/wendy', false);
const wendyList = wendy.keys().map(image => wendy(image));
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Masonry from "react-responsive-masonry";

export default function Kessler() {
  const [toggler, setToggler] = useState(false);
  const [togglerWendy, setTogglerWendy] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageIndexWendy, setImageIndexWendy] = useState(0);
  return (
    <>
      <DesktopNavbar />
      <section id="graphic-design-project">
        <h2>Disney Imaginations Finalist: Kessler Project</h2>
        <h4><i>2018</i></h4>
        <div id="section-description">
          Kessler Project is a theme park concept that was a finalist in the 2018 Disney Imaginations competition. On a
          four-person team, I led art direction and design of our submission and presentation to the Disney Imagineering
          executives in Glendale, California.
          <br/>
          <br/>
          That year’s Disney Imaginations prompt invited teams to reimagine an abandoned place on Earth and transform it
          into a unique park experience. Our team took the challenge to the stratosphere, envisioning a space-themed
          destination centered around Kessler Syndrome—a phenomenon in which space debris collides in low Earth orbit,
          creating a dangerous chain reaction of even more debris that threatens satellites, space travel, and the
          future of exploration.
          <br/>
          <br/>
          Our concept invites guests to embark on an immersive journey through space, experiencing both the awe and the
          challenges of life in orbit. We designed a series of space-inspired attractions and amenities, along with
          engaging characters and interactive storytelling moments that teach visitors—both kids and adults—about the
          importance of space sustainability.
        </div>
        <br/>
        <FsLightbox
          toggler={toggler}
          sources={[finalImageList[imageIndex].default.src]}
          key={imageIndex}
          thumbs={[finalImageList[imageIndex].default.src]}
        />
        <Masonry columnsCount={3} gutter="10px">
          {finalImageList.map((image, i) => (
            <button onClick={() => {
              setToggler(!toggler);
              setImageIndex(i);
            }}>
              <img
                alt="slides"
                key={i}
                src={image.default.src}
                style={{width: "100%", display: "block"}}
              />
            </button>
          ))}
        </Masonry>
        <br />
        <br />
        <div id="section-description">
          We presented our park experience through the eyes of our example guest named Wendy, an 11-year old girl from the Midwest
          who dreamt of becoming an astronaut. I illustrated her entire Kessler Project experience, from gazing at the
          stars and touring the Tracker Center to using our Mission Command Wristband and riding home with her Astronaut
          Keepsake made of recycled space debris. Combined with elements of our submission slides, the result was an
          engaging, informative, and inspiring experience that encourages guests to imagine the future of space
          exploration.
        </div>
        <br />
        <FsLightbox
          toggler={togglerWendy}
          sources={[wendyList[imageIndexWendy].default.src]}
          key={imageIndexWendy}
          thumbs={[wendyList[imageIndexWendy].default.src]}
        />
        <Masonry columnsCount={3} gutter="10px">
          {wendyList.map((image, i) => (
            <button onClick={() => {
              setTogglerWendy(!togglerWendy);
              setImageIndexWendy(i);
            }}>
              <img
                alt="wendy"
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

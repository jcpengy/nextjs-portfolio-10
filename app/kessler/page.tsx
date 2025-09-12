'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
// dynamically import all images from folder
const finalImages = require.context('../../public/images/Kessler/slides', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const wendy = require.context('../../public/images/Kessler/wendy', false);
const wendyList = wendy.keys().map(image => wendy(image));
const newdesigns = require.context('../../public/images/Kessler/newdesigns', false);
const newdesignsList = newdesigns.keys().map(image => newdesigns(image));
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Masonry from "react-responsive-masonry";
import Hero from "../../public/images/Kessler/hero.png";

export default function Kessler() {
  const [toggler, setToggler] = useState(false);
  const [togglerWendy, setTogglerWendy] = useState(false);
  const [togglerNew, setTogglerNew] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);
  const [imageIndexWendy, setImageIndexWendy] = useState(0);
  const [imageIndexNew, setImageIndexNew] = useState(0);
  return (
    <>
      <DesktopNavbar />
      <section id="graphic-design-project">
        <br />
        <div id="center-text">
          <h2>Kessler Project</h2>
          <h4>A theme park concept that was a finalist in the 2018 Disney Imaginations competition.</h4>
          <br/>
          <img className="hero-image" key="hero" src={Hero.src} alt="hero"/>
        </div>
        <br/>
        <div id="section-description">
          <div className="two-column-container">
            <div className="column">
              <h6>Prompt</h6>
              That year, teams were tasked with selecting an abandoned “ghost town” anywhere in the world and revitalizing
              it. Concepts could range from a functioning town to a historical site, living museum, or immersive themed
              experience. Submissions needed to honor the location’s history and respect the traditions and communities
              connected to it and its surrounding areas.
              <h6>Our Idea</h6>
              We decided to take our idea to the stratosphere, envisioning a space-themed destination called Kessler
              Project, where guests explore historic landmarks like the ISS, Hubble Telescope, and Tiangong-1 while learning
              about <a href="https://www.space.com/kessler-syndrome-space-debris" target="_blank">Kessler Syndrome</a>. The experience blends education and adventure, immersing visitors in a
              mission to clean up space debris while inspiring solutions for sustainable space exploration.
            </div>
            <div className="column">
              <h6>Role</h6>
              Creative Lead on a four-person team | Slide Design and Layout, 3D Modeling, Graphic Design, Information
              Design, Illustrations
              <h6>Scope</h6>
              October 2017 - January 2018
            </div>
          </div>
        </div>
        <br/>
        <h4>Design Approach</h4>
        <br />
        Limited to six submission slides, I first outlined key guest experiences and then assigned each slide a focus.
        To match our project’s space theme, I used futuristic fonts and 3D graphics to bring the story to life.
        <br/>
        <br/>
        <h4>Experience Design</h4>
        <br />
        Designing an experience set in space required balancing technical details with playful elements that capture the
        excitement of space exploration.
        <br/>
        <br/>
        I collaborated with technical team members to design and model Kessler Station, incorporating the spiral shape
        of the station into the logo, slide design, and features like the Spiral Seat. I also helped brainstorm the
        characters in the Kessler Crew.
        <br />
        <br />
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
        <br/>
        <br/>
        <div id="section-description">
          <h4>Presentation & What I Learned</h4>
          <br />
          As finalists, we were invited to the Disney Imagineering headquarters in Glendale, California to present our
          project to Imagineering executives. This presentation taught me how to incorporate storytelling into an
          experience, specifically adding the story of an example guest.
          I illustrated the story of Wendy, an 11-year old girl from the Midwest who dreams of becoming an astronaut.
          She embarks on this adventure to experience the wonders of space.
        </div>
        <br/>
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
        <br/>
        <div id="section-description">
          <h4>Rethinking Kessler Project</h4>
          <br />
          As a creative exercise this year, I reimagined the branding for Kessler Project, designing an advertising poster and space flight tickets. For this iteration, I used a neon color palette and updated typography to give the branding a more modern feel.
        </div>
        <br />
        <FsLightbox
          toggler={togglerNew}
          sources={[newdesignsList[imageIndexNew].default.src]}
          key={imageIndexNew}
          thumbs={[newdesignsList[imageIndexNew].default.src]}
        />
        <Masonry columnsCount={3} gutter="10px">
          {newdesignsList.map((image, i) => (
            <button onClick={() => {
              setTogglerNew(!togglerNew);
              setImageIndexNew(i);
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
      </section>
      <Footer/>
    </>
  );
}

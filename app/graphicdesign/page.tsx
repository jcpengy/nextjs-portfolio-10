'use client';
import Eid from "public/images/Eid/finalImages/1.jpg";
import River from "public/images/RiversEdge/riversedge-cover.jpg";
import KesslerSlide2 from "public/images/kessler-cover.jpg";
import BlackPower from "public/images/BPB/bpb-cover.jpg";
import SFGrooming from "public/images/sfgrooming-cover.jpg";
import NYT from "public/images/NYT/nyt-cover.jpg";
import DesktopNavbar from "../components/desktopNavbar";
import Footer from "../components/footer";
import Hero from "../../public/images/CEEM/ceem.gif";

const images = [
  { "src": Eid.src, "alt": "Eid Mubarak", "link": "/eid"},
  { "src": NYT.src, "alt": "The New York Times", "link": "/new-york-times" },
  { "src": River.src, "alt": "River's Edge Cabin", "link": "/riversedge"},
  { "src": BlackPower.src, "alt": "Black Power Blueprint", "link": "/blackpowerblueprint" },
  // { "src": SFGrooming.src, "alt": "San Francisco Grooming", "link": "/sfgrooming" },
  { "src": KesslerSlide2.src, "alt": "Kessler Project", "link": "/kessler"},

]

export default function GraphicDesign() {
  return (
    <>
      <DesktopNavbar />
      <section>
        <br/>
        {/*Hero section*/}
        <div id="center-text">
          <h2>graphic design</h2>
          <h4>Selected projects that showcase visual storytelling through branding, world-building, and information design.</h4>
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

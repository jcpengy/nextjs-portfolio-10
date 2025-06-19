'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Cover from "../../public/images/CEEM/ceem.gif";
import UserFlow from "../../public/images/ODL/UserFlow.png";
import P1 from "../../public/images/CEEM/p1.png";
import P21 from "../../public/images/CEEM/p2-1.png";
import P22 from "../../public/images/CEEM/p2-2.jpg";
import P23 from "../../public/images/CEEM/p2-3.png";
import 'bs5-lightbox';
import P31 from "../../public/images/CEEM/p3-1.png";
import P32 from "../../public/images/CEEM/p3-2.png";
import P33 from "../../public/images/CEEM/CurrentDesign/p3-3.jpg";
// dynamically import all images from folder
const finalImages = require.context('../../public/images/CEEM/CurrentDesign', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const v1Images = require.context('../../public/images/ODL/v1', false);
const v1ImageList = v1Images.keys().map(image => v1Images(image));

const v2Images = require.context('../../public/images/ODL/v2', false);
const v2ImageList = v2Images.keys().map(image => v2Images(image));

const sketches = require.context('../../public/images/ODL/Sketches', false);
const sketchesList = sketches.keys().map(image => sketches(image));

export default function OnDemandLearning() {
  return (
    <>
      <DesktopNavbar />
      <section id="graphic-design-project">
        <div id="section-description">
          <h2>On-Demand Learning</h2>
        </div>
        <div className="two-column-container-objective">
          <div className="column">
            <div id="section-description">
              <h4>Problem</h4>
              Adobe Experience Platform customers and partners are trained through a program called the
              "Developer Enablement Program," which involves deploying content across multiple sandboxes
              and conducting in-person sessions to facilitate the training.
            </div>
            <div id="section-description">
              <h4>Objective</h4>
              Provide training in a virtual and scalable manner by building an on-demand learning service where
              customers can access lectures alongside lab environments. The lab exercises will be based on content from
              the
              Developer Enablement Program.
            </div>
          </div>
          <div className="column">
            <div id="section-description">
              <h4>Features</h4>
              The customer should have the ability to:
              <ul>
                <li>Browse a list of on-demand courses.</li>
                <li>Preview an on-demand course.</li>
                <li>Enroll and un-enroll in an on-demand course.</li>
                <li>Request a lab environment within a course to do a hands-on exercise.</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="section-description">
          <h4>Research & Development</h4>
          We researched the ins and outs of Adobe Learning Manager (ALM), Adobe's product for delivering personalized
          trainings
          for employees and customers, to understand elements of the learning experience, how we could integrate lab
          environments, and API calls
          we would need for On-Demand Learning. I started out by drafting the user flow and sketching ideas based on our
          research.
          <h5>User Flow</h5>
          <img key="user-flow" src={UserFlow.src} alt="user-flow"/>
          <h5>Initial Sketches</h5>
          <div id="image-gallery-with-text-overlay">
            {sketchesList.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
          </div>
          <div id="section-description">
            <h4>Version 1</h4>
            Once we aligned on the user flow, I mocked an initial version in Figma based on my sketches and presented it
            during our team on-site. The purpose of this was to provide a general overview of the application.
            <br/><br/>
            <div id="image-gallery-with-text-overlay">
              {v1ImageList.map((image, index) => (
                <div className="image-1 item">
                  <img key={index} src={image.default.src} alt={`image-${index}`}/>
                  <p>Image Caption</p>
                </div>
              ))}
            </div>
          </div>
        <div id="section-description">
          <h4>Version 2</h4>
          Version 2 was re-designed to align more with the UI of Experience Platform since it would be an in-product
          offering.
          <br/><br/>
          <div id="image-gallery-with-text-overlay">
            {v2ImageList.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
        </div>
        <div id="section-description">
          <h4>Current Design</h4>
        </div>
        <div id="section-description">
          <h4>Future enhancements</h4>
          Changing My Learning to Bookmarked
        </div>
      </section>
      <Footer/>
    </>
  );
}

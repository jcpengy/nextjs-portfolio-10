"use client"
import CEEM from "../../public/images/CEEM/ceem.gif";
import Sandbox from "../../public/images/SandboxCopy/cover.png";
import OnDemandLearning from "../../public/images/ODL/current/3.png";
import NYT from "../../public/images/NYT/cover/1.png";
import Disney from "../../public/images/Kessler/wendy/wendy-stars.png";
import ProjectLasso from "../../public/images/ProjectLasso/m1/odl/a.png";

const images = [
  { "src": CEEM.src, "alt": "CEEM", "link": "/ceem" },
  { "src": Sandbox.src, "alt": "Sandbox Copy", "link": "/sandboxcopy" },
  { "src": OnDemandLearning.src, "alt": "On-Demand Learning", "link": '/on-demand-learning' },
  { "src": ProjectLasso.src, "alt": "Project Lasso", "link": '/projectlasso' },
  { "src": NYT.src, "alt": "The New York Times", "link": '/new-york-times' },
  { "src": Disney.src, "alt": "Disney Imagineering", "link": '/kessler' }
]

export default function UXDesign() {
  return (
    <section>
      <div id="center-text">
        <h4>Featured projects</h4>
      </div>
      <br/>
      <br/>
      <div className="two-column-container">
        <div className="column">
          <a href={images[3].link}>
            <img id="clickable-image" src={ProjectLasso.src} alt="Project Lasso"/>
          </a>
          <div className="project-description">
            <h4>Project Lasso (Personal Lab Environments)</h4>
            <div className="subtitle">UX Design & Development</div>
            A productized, self-paced implementation of the Developer Enablement Program.
          </div>
          <a href={images[2].link}>
            <img id="clickable-image" src={OnDemandLearning.src} alt="ODL"/>
          </a>
          <div className="project-description">
            <h4>On-Demand Learning</h4>
            <div className="subtitle">UX Design & Development</div>
            A hands-on learning solution for Adobe Experience Platform.
          </div>
        </div>
        <div className="column">
          <a href={images[1].link}>
            <img id="clickable-image" src={Sandbox.src} alt="Sandbox copy"/>
          </a>
          <div className="project-description">
            <h4>Sandbox Management App</h4>
            <div className="subtitle">UX Design & Development</div>
            A streamlined solution for transferring sandbox objects.
          </div>
          <a href={images[5].link}>
            <img id="clickable-image" src={Disney.src} alt="Disney"/>
          </a>
          <div className="project-description">
            <h4>Disney Imagineering</h4>
            <div className="subtitle">3D Modeling, Graphic Design, Illustration, & Branding</div>
            A theme park concept that was a finalist in the 2018 Disney Imaginations competition.
          </div>
        </div>
      </div>
      {/*<div className="two-column-container">*/}
      {/*  <div className="column">*/}
      {/*    <a href={images[4].link}>*/}
      {/*      <img id="clickable-image" src={NYT.src} alt="NYT"/>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div className="project-description-column">*/}
      {/*    <h4>The New York Times</h4>*/}
      {/*    <div className="subtitle">3D Modeling, Motion Graphics, Infographics, UI/UX Design & Development</div>*/}
      {/*    Graphics I designed during my summer internship on the Immersive Storytelling team.*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  );
}

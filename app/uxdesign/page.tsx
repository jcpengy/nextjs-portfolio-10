"use client"
import CEEM from "../../public/images/CEEM/ceem.gif";
import Sandbox from "../../public/images/SandboxCopy/sandbox.gif";
import OnDemandLearning from "../../public/images/ODL/hero-image.png";
import NYT from "../../public/images/NYT/douma1/1.jpg";
import Disney from "../../public/images/Kessler/wendy-stars.jpg";
import ProjectLasso from "../../public/images/ProjectLasso/m1/UI/1.png";

const images = [
    { "src": CEEM.src, "alt": "CEEM", "link": "/ceem" },
    { "src": Sandbox.src, "alt": "Sandbox Copy", "link": "/sandboxcopy" },
    { "src": OnDemandLearning.src, "alt": "On-Demand Learning", "link": '/on-demand-learning' },
    { "src": ProjectLasso.src, "alt": "Project Lasso", "link": '/projectlasso' },
    { "src": NYT.src, "alt": "The New York Times", "link": '/new-york-times' },
    { "src": Disney.src, "alt": "Disney Imagineering", "link": 'kessler' }
]

export default function UXDesign() {
    return (
      <section>
        <div id="center-text">
          <h4>Featured projects</h4>
        </div>
        <br />
        <br />
        <div className="two-column-container">
          <div className="column">
            <a href={images[3].link}>
              <img id="clickable-image" src={ProjectLasso.src} alt="Project Lasso"/>
            </a>
          </div>
          <div className="project-description-column">
            <h4>Project Lasso (Ongoing)</h4>
            <div className="subtitle">UX Design & Development</div>
            A productized, self-paced implementation of the Developer Enablement Program.
          </div>
        </div>
        <br/>
        <div className="two-column-container">
          <div className="column">
            <a href={images[2].link}>
              <img id="clickable-image" src={OnDemandLearning.src} alt="ODL"/>
            </a>
          </div>
          <div className="project-description-column">
            <h4>On-Demand Learning</h4>
            <div className="subtitle">UX Design & Development</div>
            A hands-on learning solution for Adobe Experience Platform.
          </div>
        </div>
        <br/>
        <div className="two-column-container">
          <div className="column">
            <a href={images[0].link}>
              <img id="clickable-image" src={CEEM.src} alt="CEEM"/>
            </a>
          </div>
          <div className="project-description-column">
            <h4>Customer Engineering Enablement Manager</h4>
            <div className="subtitle">UX Design & Development</div>
            A comprehensive sandbox package manager for enablement programs.
          </div>
        </div>
        <br/>
        <div className="two-column-container">
          <div className="column">
            <a href={images[1].link}>
              <img id="clickable-image" src={Sandbox.src} alt="Sandbox copy"/>
            </a>
          </div>
          <div className="project-description-column">
            <h4>Sandbox Artifact Copy</h4>
            <div className="subtitle">UX Design & Development</div>
            A streamlined solution for transferring and syncing sandbox objects.
          </div>
        </div>
        <br/>
        <div className="two-column-container">
          <div className="column">
            <a href={images[3].link}>
              <img id="clickable-image" src={NYT.src} alt="NYT"/>
            </a>
          </div>
          <div className="project-description-column">
            <h4>The New York Times</h4>
            <div className="subtitle">3D Modeling, Motion Graphics, Infographics, UI/UX Design & Development</div>
            Graphics I designed during my summer internship on the Immersive Storytelling team.
          </div>
        </div>
        <br/>
        <div className="two-column-container">
          <div className="column">
            <a href={images[4].link}>
              <img id="clickable-image" src={Disney.src} alt="Disney"/>
            </a>
          </div>
          <div className="project-description-column">
            <h4>Disney Imagineering</h4>
            <div className="subtitle">3D Modeling, Graphic Design, Illustration, & Branding</div>
            A theme park concept that was a finalist in the 2018 Disney Imaginations competition.
          </div>
        </div>
      </section>
    );
}

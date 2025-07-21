'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Hero from "../../public/images/CEEM/ceem.gif";
import P1 from "../../public/images/CEEM/p1.png";
import P21 from "../../public/images/CEEM/p2-1.png";
import P22 from "../../public/images/CEEM/p2-2.jpg";
import P23 from "../../public/images/CEEM/p2-3.png";
import P31 from "../../public/images/CEEM/p3-1.png";
import P32 from "../../public/images/CEEM/p3-2.png";
import P33 from "../../public/images/CEEM/CurrentDesign/p3-3.jpg";
import SoftwareDependencies from "../../public/images/ODL/SoftwareDependencies.png";
import UserFlow from "../../public/images/ODL/UserFlow.png";
const finalImages = require.context('../../public/images/CEEM/CurrentDesign', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const v1Images = require.context('../../public/images/CEEM/v1', false);
const v1ImageList = v1Images.keys().map(image => v1Images(image));
const v2Images = require.context('../../public/images/CEEM/v2', false);
const v2ImageList = v2Images.keys().map(image => v2Images(image));
const sketches = require.context('../../public/images/ODL/Sketches', false);
const sketchesList = sketches.keys().map(image => sketches(image));

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// core version + navigation, pagination modules:
import { Pagination, Navigation } from 'swiper/modules';

export default function CEEM() {
    return (
      <>
          <DesktopNavbar />
          <section>
              <br />
              {/*Hero section*/}
              <div id="center-text">
                  <h2>Customer Engineering Enablement Manager</h2>
                  <h4>A comprehensive sandbox package manager for enablement programs.</h4>
                  <br />
                  <img className="hero-image" key="hero" src={Hero.src} alt="hero"/>
              </div>
              <br />
              {/*Project overview*/}
              <div className="section">
                  <div className="two-column-container">
                      <div className="column">
                          <h6>Overview</h6>
                          Enablement programs for Adobe Experience Platform require sandbox packages to be created, deployed, and validated for training use. This process is time-intensive and lacks a central UI. As a result, Pre-Sales, Demo, and Engineering teams face challenges in efficiently debugging and publishing packages for broader use within the Customer Engineering team.
                          <h6>Goals</h6>
                          <ul>
                              <li>
                                  Build a solution that allows customers to seamlessly execute the end-to-end package
                                  workflow.
                              </li>
                              <li>
                                  Accelerate sandbox provisioning and deployment for Adobe Experience Platform
                                  enablement programs.
                              </li>
                              <li>
                                  Allow packages to be shared across orgs.
                              </li>
                          </ul>
                      </div>
                      <div className="column">
                          <h6>Role</h6>
                          UX Designer and Developer | Wireframes, Prototyping, UI/UX Research, Front-End Development and API Optimization
                          <h6>Scope</h6>
                          August 2024 - Current
                          <h6>Tools</h6>
                          React, TypeScript, React Spectrum (React implementation of Adobe’s design system), Unified Shell (Adobe’s UI framework for internal apps),
                          HTML/CSS
                      </div>
                  </div>
              </div>
              <br />
              <br />
              {/*Exploration/Discovery*/}
              <div className="section">
                  <h4>Exploration</h4>
                  <div className="two-column-container">
                      <div className="column">
                          <h6>Personas</h6>
                          <ul>
                              <li>Sales</li>
                              <li>Solution architect</li>
                              <li>Consultant</li>
                          </ul>
                      </div>
                      <div className="column">
                          <h6>Software Dependencies</h6>
                      </div>
                  </div>
                  <h6>Competitive Analysis</h6>
                  We explored DSN (Dynamic System Network), a similar tool developed to manage packages, however, we
                  decided it wasn't robust and comprehensive enough to cover our use cases.
                  <br/>
                  <br/>
                  Summary of pain points:
                  <ul>
                      <li>DSN is not a robust and comprehensive tool for package management</li>
                      <li>There is no UI for services such as web hook events and testing</li>
                      <li>Packages cannot be published and shared across IMS orgs</li>
                  </ul>
              </div>
              {/*Design process*/}
              <br/>
              <br/>

              <div className="section">
                  <h4>Design Process</h4>
                  <br />
                  Functional use cases:
                  <ul>
                      <li>View a list of available packages in IMS org</li>
                      <li>View a list of available packages in the Global Library</li>
                      <li>Onboard a package from the Global Library to current IMS org</li>
                      <li>Create a package that is either: 1) DSN, 2) Bootcamp, or 3) General</li>
                      <li>Deploy a package for testing</li>
                      <li>View package testing results and progress</li>
                      <li>View web hook events for debugging</li>
                      <li>Publish a package to the Global Library</li>
                  </ul>
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Version 1</h4>
                  <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                      {v1ImageList.map((image, index) => (
                        <SwiperSlide>
                            <img key={index} src={image.default.src} alt={`Image ${index}`}/>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  {/*<table className="improvements-table">*/}
                  {/*    <thead>*/}
                  {/*    <tr>*/}
                  {/*        <th id="improvement-column">Improvement</th>*/}
                  {/*        <th id="before-column">Before</th>*/}
                  {/*        <th id="after-column">After</th>*/}
                  {/*    </tr>*/}
                  {/*    </thead>*/}
                  {/*    <tbody>*/}
                  {/*    <tr>*/}
                  {/*        <td>*/}
                  {/*            <h6>Problem</h6>*/}
                  {/*            <h6>Solution</h6>*/}
                  {/*            <h6>Thought Process</h6>*/}
                  {/*        </td>*/}
                  {/*        <td>*/}
                  {/*            <img src={p00.src} alt="Before"/>*/}
                  {/*        </td>*/}
                  {/*        <td>*/}
                  {/*            <img src={p01.src} alt="After"/>*/}
                  {/*        </td>*/}
                  {/*    </tr>*/}
                  {/*    <tr>*/}
                  {/*        <td>*/}
                  {/*            <h6>Problem</h6>*/}
                  {/*            <h6>Solution</h6>*/}
                  {/*            <h6>Thought Process</h6>*/}
                  {/*        </td>*/}
                  {/*        <td>*/}
                  {/*            <img src={p02.src} alt="Before"/>*/}
                  {/*        </td>*/}
                  {/*        <td>*/}
                  {/*            <img src={p03.src} alt="After"/>*/}
                  {/*        </td>*/}
                  {/*    </tr>*/}
                  {/*    </tbody>*/}
                  {/*</table>*/}
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Version 2</h4>
                  <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                      {v2ImageList.map((image, index) => (
                        <SwiperSlide>
                            <img key={index} src={image.default.src} alt={`Image ${index}`}/>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <table className="improvements-table">
                      <thead>
                      <tr>
                          <th id="improvement-column">Improvement</th>
                          <th id="before-column">Before</th>
                          <th id="after-column">After</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>
                              <h6>Problem</h6>
                              Users cannot view or access the packages they created or onboarded.
                              <h6>Solution</h6>
                              Display a list of packages and their corresponding actions in ‘Authoring'
                              <h6>Thought Process</h6>
                              I initially planned to separate the authoring workflow and authored packages into different tabs but later combined them into a single page for better consistency. The package creation process was streamlined into three steps, removing the need for a separate tab. Additionally, the team preferred to differentiate authored and onboarded packages from those in the 'Marketplace' (now called the 'Global Library'). In the 'Authoring' section, users now immediately see a list of packages they can edit, deploy, or publish to the 'Marketplace.' A 'Create a use case' button in the top right allows quick package creation, consolidating package management into one cohesive and user-friendly interface.
                          </td>
                          <td>
                              <img src={P1.src} alt="Before"/>
                          </td>
                          <td>
                              <img src={P1.src} alt="After"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <h6>Problem</h6>
                              Users cannot monitor more complex steps of the authoring workflow.
                              <h6>Solution</h6>
                              Separate the deployment steps of the workflow into their own UI component.
                              <h6>Thought Process</h6>
                              As noted earlier, addressing this problem required further clarification of the distinctions between authoring and deployment. Given that deployment triggers the testing and validation steps, it made sense to enable users to start and monitor this process manually. In the current design, users deploy the package from the actions dropdown and see deployment results by clicking ‘View details.’ Meanwhile, 'Upload files' and 'Configure settings' were streamlined into a single form accessible via the 'Create a use case' button.
                          </td>
                          <td>
                              <img src={P22.src} alt="Before"/>
                          </td>
                          <td>
                              <img src={P23.src} alt="After"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <h6>Problem</h6>
                              The ‘Validation Results’ section does not scale to the amount of data in deployment.
                              <h6>Solution</h6>
                              Separate each deployment step into its own tab or page.
                              <h6>Thought Process</h6>
                              Deployment triggers several processes, including the health check, testing as a service, and web hook events. Each process generates a large amount of data that is pertinent to the user. In Version 1, all these steps were consolidated on a single page, requiring users to scroll through it painstakingly to review results. In Version 2, I introduced separate tabs for each step and an overview panel at the top displaying the start date and duration of the process (this was vague since ‘Webhooks’ does not have a definitive end). In the current design, I opted to represent these steps as individual buttons, each providing key information relevant to its process. Clicking on a button reveals the detailed data for that specific step to the user.
                          </td>
                          <td>
                              <img src={P31.src} alt="Before"/>
                          </td>
                          <td>
                              <img src={P32.src} alt="After"/>
                              <img src={P33.src} alt="After"/>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Current Design</h4>
                  <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                      {finalImageList.map((image, index) => (
                        <SwiperSlide>
                            <img key={index} src={image.default.src} alt={`Image ${index}`}/>
                        </SwiperSlide>
                      ))}
                  </Swiper>
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Future Improvements</h4>
                  <ul>
                      <li></li>
                  </ul>
              </div>
          </section>
          <Footer/>
      </>
    );
}


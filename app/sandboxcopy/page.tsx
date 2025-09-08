'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Hero from "../../public/images/SandboxCopy/cover.png";
import ReactPlayer from 'react-player';
import crossims from "../../public/images/SandboxCopy/crossims.png";
import jobstatus from "../../public/images/SandboxCopy/jobstatus.png";
import issues from "../../public/images/SandboxCopy/issues.png";
import Comp from "../../public/images/SandboxCopy/comparison.png";
import UserFlow from "../../public/images/SandboxCopy/user-flow.png";
import Sketches from "../../public/images/SandboxCopy/sketches.png";
import P12 from "../../public/images/SandboxCopy/p1.png";
import P11 from "../../public/images/SandboxCopy/v1/2.png";
import P22 from "../../public/images/SandboxCopy/p2-1.png";
import P21 from "../../public/images/SandboxCopy/v1/1.png";
import P32 from "../../public/images/SandboxCopy/p3-1.png";
import P31 from "../../public/images/SandboxCopy/auditlog.png";
import eventtypes from "../../public/images/SandboxCopy/eventtypes.png";
import sampleaduit from "../../public/images/SandboxCopy/sampleaudit.png";

import Tree from "../../public/images/SandboxCopy/objecttree.jpg";
// dynamically import all images from folder
const finalImages = require.context('../../public/images/SandboxCopy/currentDesign', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const v1Images = require.context('../../public/images/SandboxCopy/v1', false);
const v1ImageList = v1Images.keys().map(image => v1Images(image));

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// core version + navigation, pagination modules:
import { Pagination, Navigation } from 'swiper/modules';
import row from "../../public/images/ODL/row.png";

export default function SandboxCopy() {
    return (
      <>
          <DesktopNavbar/>
          <section>
              <br/>
              {/*Hero section*/}
              <div id="center-text">
                  <h2>Sandbox Artifact Copy</h2>
                  <h4>A streamlined solution for transferring sandbox objects.</h4>
                  <br/>
                  <img className="hero-image" key="hero" src={Hero.src} alt="hero"/>
              </div>
              <br/>
              {/*Project overview*/}
              <div className="section">
                  <div className="two-column-container">
                      <div className="column">
                          <h6>Overview</h6>
                          Transferring objects between sandboxes in Adobe Experience Platform requires manually running API
                          calls. The process lacks batch transfer capabilities, centralized tracking, and visibility into
                          dependencies before transfer. <br/>
                          <br/>
                          Sandbox Artifact Copy aims to simplify and streamline sandbox management.
                          <h6>Goals</h6>
                          <ul>
                              <li>Allow users to seamlessly transfer objects and their dependencies between sandboxes.
                              </li>
                              <li>Allow users to sync objects whose sources have been edited.
                              </li>
                          </ul>
                      </div>
                      <div className="column">
                          <h6>Role</h6>
                          UX Designer and Developer | Wireframes, Prototyping, UI/UX Research, Front-End Development and
                          API Optimization
                          <h6>Scope</h6>
                          August 2022 - January 2023
                          <h6>Tools</h6>
                          React, TypeScript, React Spectrum (React implementation of Adobe’s design system), Unified
                          Shell (Adobe’s UI framework for internal apps),
                          HTML/CSS
                      </div>
                  </div>
              </div>
              <br/>
              <br/>
              {/*Exploration/Discovery*/}
              <div className="section">
                  <h4>Exploration</h4>
                  <div className="two-column-container">
                      <div className="column">
                          <h6>Personas</h6>
                          <ul>
                              <li>AEP customers with a technical background</li>
                              <ul>
                                  <li>Solution architect</li>
                                  <li>Consultant</li>
                                  <li>Data engineer</li>
                              </ul>
                          </ul>
                          <h6>Identified pain points</h6>
                          <ul>
                              <li>Painful and time-consuming to copy complex objects between sandboxes</li>
                              <li>Need to easily kickstart new business implementations between environments</li>
                              <li>Need to deploy sandboxes with a baseline configuration, support customers that wish to
                                  benefit from faster sandbox deployments that include tested AEP configurations
                              </li>
                              <li>Need a separate set of APIs for AEP versus AJO for migrating development work to
                                  higher sandboxes
                              </li>
                          </ul>
                      </div>
                      <div className="column">
                          <h6>Functional use cases</h6>
                          <ul>
                              <li>Copy all foundation objects (schemas, datasets, segments, sources, destinations) and
                                  first level dependencies from one sandbox to another sandbox
                              </li>
                              <li>Review dependencies before copying</li>
                              <li>Sync objects between the source and destination sandboxes</li>
                              <li>Revert objects (once) after syncing</li>
                              <li>Log actions for documentation and troubleshooting</li>
                          </ul>
                      </div>
                  </div>
                  <h6>Competitive Analysis</h6>
                  <div id="section-image">
                      <img key="competitive-analysis" src={Comp.src} alt="competitive analysis"/>
                  </div>
              </div>
              {/*Design process*/}
              <br/>
              <br/>
              <div className="section">
                  <h4>Design Process</h4>
                  <div id="section-image">
                      <img key="user-flow" src={UserFlow.src} alt="user-flow"/>
                      <br/>
                      <i>User flow for copying objects</i>
                  </div>
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="sketches" src={Sketches.src} alt="sketches"/>
                  </div>
                  <div id="center-text">
                      <i>Initial sketches</i>
                  </div>
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
                              Users can only view one artifact's dependencies at a time.
                              <h6>Solution</h6>
                              List all objects and their dependencies in a separate window.
                              <h6>Thought Process</h6>
                              Previously, we used a dependency tree (plugin) to view all dependencies for a given object.
                              During testing sessions, we realized the tool was lagging for object's with multiple
                              dependencies and users wanted a more holistic view of all objects they selected. I
                              decided to create a separate window to display all objects and their dependencies in an
                              organized list.
                          </td>
                          <td>
                              <img src={P11.src} alt="Before"/>
                          </td>
                          <td>
                              <img src={P12.src} alt="After"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <h6>Problem</h6>
                              Lack of modularization makes it hard to incorporate new features.
                              <h6>Solution</h6>
                              Separate the objects into their own tabs.
                              <h6>Thought Process</h6>
                              We received two additional requests to sync and revert objects between sandboxes.
                              Incorporating these features (each requiring multiple UI components) would've been
                              time-consuming and unreliable in our single-page UI. Given that our highest priority was
                              to implement these features for schemas and we already faced issues running asynchronous
                              calls across different artifact types, we decided to move each object type to its own
                              tab.
                          </td>
                          <td>
                              <img src={P21.src} alt="Before"/>
                          </td>
                          <td>
                              <img src={P22.src} alt="After"/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <h6>Problem</h6>
                              The audit log is too dense and hard to follow for troubleshooting.
                              <h6>Solution</h6>
                              Turn the audit log into a table and put it on another tab.
                              <h6>Thought Process</h6>
                              The audit log outputted asynchronous calls across all copy operations, which made it hard
                              to trace what was actually happening for each copy workflow. Since we already created tabs
                              for each object type, we decided to extend this to the audit log and put it on a
                              separate tab. We also narrowed down the information to main actions taken in the app and
                              organized it into a table.
                          </td>
                          <td>
                              <img src={P31.src} alt="Before"/>
                          </td>
                          <td>
                              <img src={eventtypes.src} alt="After"/>
                              <img src={sampleaduit.src} alt="After"/>
                              <img src={P32.src} alt="After"/>
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
                  <h4>Development Process</h4>
                  <br/>
                  We went back and forth between design and development throughout this process, gaining feedback
                  through demo and testing
                  sessions with the wider team. Our main challenges included identifying what object dependencies were
                  required to be copied for a given root object (example tree shown below), and expectations when
                  dependencies were not copied correctly (a list of job statuses shows what we decided on for various
                  scenarios).
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="tree" src={Tree.src} alt="tree"/>
                      <br/>
                  </div>
                  <br/>
                  <div id="section-image">
                      <img key="jobstatus" src={jobstatus.src} alt="jobstatus"/>
                      <br/>
                  </div>
                  We asked users to log issues and feedback in a wiki document and logged JIRA tickets accordingly.
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="issues" src={issues.src} alt="issues"/>
                      <br/>
                  </div>
                  <br/>
                  <div id="center-text">Demo of our application</div>
                  <ReactPlayer src="../../public/images/SandboxCopy/demo-draft-1.mp4" />
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Impact & Next Steps</h4>
                  <br/>
                  Our audit logs indicate that over 100 internal consultants and solution architects have used our app.
                  With the addition of a feature to copy objects across IMS orgs, feedback has been very positive,
                  highlighting its impact on simplifying sandbox management in AEP.
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="crossims" src={crossims.src} alt="crossims"/>
                      <br/>
                  </div>
                  For example, manually recreating a single object takes ~4 hours at $250/hour ($1,000 per object).
                  <br/>
                  <ul>
                      <li>Syncs (60) → ~$20,000 saved</li>
                      <li>Copies (4,000) → ~$1,000,000+ saved</li>
                  </ul>
                  <br/>
                  In total, this represents over $1 million in savings, along with improved customer satisfaction.
              </div>
          </section>
          <Footer/>
      </>
    )
      ;
}


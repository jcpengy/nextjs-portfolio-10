'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Hero from "../../public/images/SandboxCopy/cover.png";
import crossims from "../../public/images/SandboxCopy/crossims.png";
import syncflow from "../../public/images/SandboxCopy/syncflow.png";
import v2flow from "../../public/images/SandboxCopy/v2flow.png";
import dependencies from "../../public/images/SandboxCopy/dependencies.png";
import dependencies2 from "../../public/images/SandboxCopy/dependencies2.png";
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
                  <h2>Sandbox Management App</h2>
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
                          Transferring objects between sandboxes in Adobe Experience Platform (AEP) is a manual process
                          that relies on individual API calls. Currently, users cannot perform bulk transfers, monitor
                          progress in a centralized view, or identify dependencies before initiating a transfer.
                          <br/>
                          <br/>
                          The Sandbox Management App provides one UI for users to easily move successful configurations
                          of AEP metadata (schemas, segments, datasets) from one sandbox to another.
                          <h6>Goals</h6>
                          <ul>
                              <li>Allow users to seamlessly transfer objects and their dependencies between sandboxes.
                              </li>
                              <li>Reduce overall time and cost to manage sandboxes
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
                          <h6>Functional requirements</h6>
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
                  We explored features and gaps of existing object copy tools within Adobe. Gaps included not having a UI, only supporting certain objects, and not supporting bulk copy. <u>In contrast to these offerings, Sandbox Management aims to provide a centralized experience where users can copy, sync, and revert multiple AEP objects.</u>
                  <br />
                  <br/>
                  <div id="section-image">
                      <img key="competitive-analysis" src={Comp.src} alt="competitive analysis"/>
                  </div>
                  <div id="center-text">
                      <i>Graph and table representation of root objects and their dependencies</i>
                  </div>
                  <br />
                  <br />
                  <div className="two-column-container">
                      <div className="column">
                          <img key="dependencies" src={dependencies.src} alt="dependencies"/>
                      </div>
                      <div className="column">
                          <img key="dependencies" src={dependencies2.src} alt="dependencies"/>
                      </div>
                  </div>
                  {/*Design process*/}
                  <br/>
                  <br/>
              </div>
              <div className="section">
                  <h4>Design Process</h4>
                  <br />
                  Based on requirements, I created a user flow diagram and sketches to illustrate the overall experience. From there, I drafted a mockup and gathered team feedback, which highlighted issues with scalability when copying multiple objects and challenges with debugging.
                  <br />
                  <br />
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
                  <br />
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
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Version 2</h4>
                  <br/>
                  Given the feedback on Version 1, I decided to restructure the experience, focusing on scalability and
                  organization.
                  <br/>
                  <br/>
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
                              Previously, we used a dependency tree (plugin) to view all dependencies for a given
                              object.
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
                              <img src={sampleaduit.src} alt="After"/>
                              <img src={P32.src} alt="After"/>
                          </td>
                      </tr>
                      </tbody>
                  </table>
                  <div id="section-image">
                      <img key="user-flow" src={v2flow.src} alt="user-flow"/>
                      <br/>
                      <i>Revised user flow for copying objects</i>
                  </div>
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
                  <div id="center-text">
                      <i>Final design</i>
                  </div>
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Development Process</h4>
                  <br/>
                  I developed the final experience on Unified Shell using React/React Spectrum and worked closely with the backend team to accurately copy dependencies in the correct order and test the experience. Through testing and demos, we gathered user feedback and tracked all issues in JIRA.
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="issues" src={issues.src} alt="issues"/>
                      <br/>
                  </div>
                  Our main challenges were successfully identifying and copying object dependencies and defining error
                  messages (we came up with a list of
                  job statuses for various scenarios).
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="syncflow" src={syncflow.src} alt="syncflow"/>
                      <br/>
                      <i>Flow diagram for copying and syncing a schema</i>
                  </div>
                  <br/>
                  <br/>
                  <div id="section-image">
                      <img key="jobstatus" src={jobstatus.src} alt="jobstatus"/>
                      <br/>
                      <i>All transfer job statuses displayed in the UI</i>
                  </div>
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Limitations</h4>
                  <br/>
                  Currently, users cannot copy more than 10 objects at a time. If a schema has a custom Identity
                  Namespace
                  as a dependency, users must first copy that object separately before copying the schema. In addition,
                  only the
                  top-level of dependent objects can be copied or synced to a destination.
              </div>
              <br/>
              <br/>
              <div className="section">
                  <h4>Impact & Next Steps</h4>
                  <br/>
                  Our audit logs indicate that over 100 internal consultants and solution architects have used our
                  app.
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
                  <br/>
                  <br/>
                  <div style={{
                      padding: '49.02% 0 0 0',
                      position: 'relative'
                  }}>
                      <iframe
                        src="https://player.vimeo.com/video/1116960200?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%'
                        }}
                        title="demo-draft-1"></iframe>
                  </div>
                  <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
          </section>
          <Footer/>
      </>
    )
      ;
}


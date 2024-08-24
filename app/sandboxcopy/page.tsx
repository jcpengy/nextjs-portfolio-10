'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Cover from "../../public/images/SandboxCopy/sandbox.gif";
import Comp from "../../public/images/SandboxCopy/comparison.png";
import P1 from "../../public/images/SandboxCopy/p1.png";
import P21 from "../../public/images/SandboxCopy/p2-1.png";
import P31 from "../../public/images/SandboxCopy/p3-1.png";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/SandboxCopy/currentDesign', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const v1Images = require.context('../../public/images/SandboxCopy/v1', false);
const v1ImageList = v1Images.keys().map(image => v1Images(image));

export default function SandboxCopy() {
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>Sandbox Artifact Copy App</h2>
                <div className="two-column-container">
                    <div className="column">Role: I led design and front-end implementation on a five-person team.</div>
                    <div className="column">
                        Technologies: React, React Spectrum (React implementation of Adobe’s design system), Unified Shell (Adobe’s UI framework for internal apps), HTML/CSS.</div>
                </div>
                <img key="ceem-cover" src={Cover.src} alt="ceem-cover" />
                <div className="two-column-container">
                    <div className="column">
                        <h4>Glossary</h4>
                        <ul>
                            <li>artifact: an object holding customer data </li>
                            <li>sandbox: virtual partition within an instance of AEP that allows customers to manage and monitor artifacts</li>
                        </ul>
                    </div>
                </div>
                <div id="section-description">
                    <h4>Problem</h4>
                    Transferring artifacts between sandboxes in Adobe Experience Platform is time-consuming and error prone.
                </div>
                <div id="section-description">
                    <h4>Objective</h4>
                    Build a tool that simplifies and streamlines sandbox management.
                </div>
                <div id="section-description">
                    <h4>Features</h4>
                    The customer should have the ability to:
                    <ul>
                        <li>Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                            first level dependencies from one sandbox to another sandbox</li>
                        <li>Review dependencies before copying </li>
                        <li>Sync artifacts between the source and destination sandboxes</li>
                        <li>Revert artifacts (once) after syncing</li>
                        <li>Log actions for documentation and troubleshooting</li>
                    </ul>
                </div>
                <div className="two-column-container">
                    <div className="column">
                        <h4>Research</h4>
                        All team members participated in the research process. We gathered requirements from internal consultants and solution architects whose customers needed to efficiently manage multi-sandbox environments. We identified the following pain points across all customers:
                        <ul>
                            <li>Painful and time-consuming to copy complex artifacts between sandboxes</li>
                            <li>Need to easily kickstart new business implementations between environments</li>
                            <li>Need to deploy sandboxes with a baseline configuration, support customers that wish to benefit from faster sandbox deployments that include tested AEP configurations</li>
                            <li>Need a separate set of APIs for AEP versus AJO for migrating development work to higher sandboxes</li>
                        </ul>
                    </div>
                    <div className="column">
                        A competitive analysis of other sandbox management apps:
                        <img key="competitve-analysis" src={Comp.src} alt="competitve-analysis" />
                        Throughout our design and implementation process, I led internal demos and testing sessions to debug the app, improve its usability, and fine-tune requirements.
                    </div>
                </div>
                <div id="section-description">
                    <h4>Version 1</h4>
                    Our initial design lacked scalability and helpful reporting. More specifically, it lacked a consolidated view of all dependencies for large copy operations, an organized audit log for troubleshooting, and a modularized/scalable UI to easily incorporate additional features.
                    <div id="image-gallery-with-text-overlay">
                        {v1ImageList.map((image, index) => (
                            <div className="image-1 item">
                                <img key={index} src={image.default.src} alt={`image-${index}`} />
                                <p>Image Caption</p>
                            </div>

                        ))}
                    </div>
                </div>
                <div id="section-description">
                    <h4>Version 2</h4>
                    Based on existing design patterns in AEP, I drafted a re-design in<span> </span>
                    <u><a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137">Figma</a></u>.<br /><br />
                    We faced a lot of challenges with semantics; aside from renaming a couple terms, we also discussed the distinctions between authoring and deployment. This topic is reflected in the Version 2 improvements.
                    <div className="two-column-container">
                        <div className="column">
                            Problem #1: Users cannot view more than one artifact's dependencies at a time.
                            <span id="space" />
                            Solution: List all artifacts and their dependencies in a separate window.
                            <span id="space" />
                            Thought process: Previously, the user could only view one artifact's dependencies at a time in a tree diagram, which was a useful but buggy feature. During the testing sessions, we agreed that a separate window was necessary to have an organized view of all selected artifacts and their dependencies. I decided to follow the AJO Object Copy UI and display them in a list.
                        </div>
                        <div className="column">
                            <img key="ceem-problem-1" src={P1.src} alt="ceem-problem-1" />
                        </div>
                    </div>
                    <div className="two-column-container">
                        <div className="column">
                            <img key="ceem-problem-2-1" src={P21.src} alt="ceem-problem-2-1" />
                        </div>
                        <div className="column">
                            Problem #2: Lack of modularization makes it hard to incorporate new features.
                            <span id="space" />
                            Solution: Separate the artifacts into their own tabs.
                            <span id="space" />
                            Thought process: We received two additional requests to sync and revert artifacts between sandboxes. Incorporating these features (each requiring multiple UI components) would've been time-consuming and unreliable in our single-page UI. Given that our highest priority was to implement these features for schemas and we already faced issues running asynchronous calls across different artifact types, we decided to move each artifact type to its own tab.
                        </div>
                    </div>
                </div>
                <div className="two-column-container">
                    <div className="column">
                        Problem #3: The audit log is hard to follow and unhelpful for troubleshooting.
                        <span id="space" />
                        Solution: Turn the audit log into a table and put it on another tab.
                        <span id="space" />
                        Thought process: The audit log outputted asynchronous calls across all copy operations, which made it hard to trace what was actually happening for each copy workflow. Since we already created tabs for each artifact type, we decided to extend this to the audit log and put it on a separate tab. We also narrowed down the information to main actions taken in the app and organized it into a table.
                    </div>
                    <div className="column">
                        <img key="ceem-problem-3-1" src={P31.src} alt="ceem-problem-3-1" />
                    </div>
                </div>
                <div id="section-description">
                    <h4>Current Design</h4>
                    <div id="image-gallery-with-text-overlay">
                        {finalImageList.map((image, index) => (
                            <div className="image-1 item">
                                <img key={index} src={image.default.src} alt={`image-${index}`} />
                                <p>Image Caption</p>
                            </div>

                        ))}
                    </div>
                </div>
                <div id="section-description">
                    <h4>Feedback</h4>
                    From the audit log, we've tracked over 100 internal consultants and solution architects using our app. We've also added an additional capability to copy artifacts across IMS orgs. Overall, we've received positive feedback on the usefulness of this tool to facilitate and streamline sandbox management in AEP.
                </div>
            </section>
            <Footer />
        </>
    );
}

'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Cover from "../../public/images/CEEM/ceem.gif";
import P1 from "../../public/images/CEEM/p1.png";
import P21 from "../../public/images/CEEM/p2-1.png";
import P22 from "../../public/images/CEEM/p2-2.jpg";
import P23 from "../../public/images/CEEM/p2-3.png";
import P31 from "../../public/images/CEEM/p3-1.png";
import P32 from "../../public/images/CEEM/p3-2.png";
import P33 from "../../public/images/CEEM/CurrentDesign/p3-3.jpg";
// dynamically import all images from folder 
const finalImages = require.context('../../public/images/CEEM/CurrentDesign', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const v1Images = require.context('../../public/images/CEEM/v1', false);
const v1ImageList = v1Images.keys().map(image => v1Images(image));

import { useState } from "react";

export default function CEEM() {
    return (
        <>
            <DesktopNavbar />
            <section id="graphic-design-project">
                <h2>Customer Engineering Enablement Manager (CEEM)</h2>
                <div className="two-column-container">
                    <div className="column">Role: I led design and front-end implementation on a five-person team.</div>
                    <div className="column">
                        Technologies: React, Redux, React Spectrum (React implementation of Adobe’s design system), Unified Shell (Adobe’s UI framework for internal apps), HTML/CSS.</div>
                </div>
                <img key="ceem-cover" src={Cover.src} alt="ceem-cover" />
                <div className="two-column-container">
                    <div className="column">
                        <h4>Glossary</h4>
                        <ul>
                            <li>AEP: Adobe Experience Platform</li>
                            <li>artifact: an object holding customer data </li>
                            <li>sandbox: virtual partition within an instance of AEP that allows customers to manage and monitor artifacts</li>
                            <li>package: collection of artifacts representing a customer use case </li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Notes</h4>
                        <i>During development, some terms were changed that are not reflected in the mock-ups. In the current UI, ‘use case’ is ‘package,’ ‘Authoring’ is ‘Library,’ and ‘Marketplace’ is ‘Global Library.’</i>
                    </div>
                </div>
                <div id="section-description">
                    <h4>Problem</h4>
                    There is no existing tool or application that scales packages for integration in the Content Management System. This process includes authoring, deploying, validating (including exposing events for Pre-Sales, Demo, and Engineering teams to debug effectively), and publishing packages to be shared across the Digital Experience org.
                </div>
                <div id="section-description">
                    <h4>Objective</h4>
                    Build a Unified Shell application that allows customers to execute the end-to-end package workflow.
                </div>
                <div id="section-description">
                    <h4>Features</h4>
                    The customer should have the ability to:
                    <ul>
                        <li>View a list of available packages in their IMS org</li>
                        <li>View a list of available packages in the Global Library </li>
                        <li>Onboard a package from the Global Library to their current IMS org</li>
                        <li>Create a package that is either: 1) DSN, 2) Bootcamp, or 3) General </li>
                        <li>Deploy a package for testing</li>
                        <li>View package testing results and progress</li>
                        <li>View web hook events for debugging</li>
                        <li>Publish a package to the Global Library </li>
                    </ul>
                </div>
                <div id="section-description">
                    <h4>Research</h4>
                    All team members participated in the research process, which included collecting and refining use cases from the sales team, internal consultants and solution architects. After many discussions, the team identified the following pain points:
                    <ul>
                        <li>DSN is not a robust and comprehensive tool for package management</li>
                        <li>There is no UI for individual services such as web hook events and testing as a service</li>
                        <li>Packages cannot be published and shared across IMS orgs </li>
                    </ul>
                    Throughout the design and implementation process, I led internal demos and testing sessions to calibrate requirements and enhance usability.
                </div>
                <div id="section-description">
                    <h4>Version 1</h4>
                    Defining the requirements was a long, iterative process that relied on several stakeholders and their immediate customer needs. My initial design was basic and experimental, but it helped us understand, visualize, and clarify the user flow. This is my draft for package creation.
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
                    We faced a lot of challenges with semantics; aside from renaming a couple terms, we also discussed the distinctions between authoring and deployment. This topic is reflected in the Version 2 improvements.
                    <div className="two-column-container">
                        <div className="column">
                            Problem #1: Users cannot view or access the packages they created or onboarded.
                            <span id="space" />
                            Solution: Display a list of packages and their corresponding actions in ‘Authoring.’
                            <span id="space" />
                            Thought process: Originally, I planned separate tabs for the authoring workflow and authored packages, but later decided to combine them into a single page for improved consistency. The package creation process was simplified to three steps, eliminating the need for a separate tab. In addition, the team preferred to distinguish authored and onboarded packages from those in the 'Marketplace' (now named 'Global Library'). When users access the 'Authoring' section, they immediately see a list of packages available to them, which can be edited, deployed, or published to the 'Marketplace.' At the top right, users can create a package by clicking 'Create a use case.' This approach consolidates package management into a unified and user-friendly interface.
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
                            Problem #2: Users cannot monitor more complex steps of the authoring workflow.
                            <span id="space" />
                            Solution: Separate the deployment steps of the workflow into their own UI component.
                            <span id="space" />
                            Thought process: As noted earlier, addressing this problem required further clarification of the distinctions between authoring and deployment. Given that deployment triggers the testing and validation steps, it made sense to enable users to start and monitor this process manually. In the current design, users deploy the package from the actions dropdown and see deployment results by clicking ‘View details.’ Meanwhile, 'Upload files' and 'Configure settings' were streamlined into a single form accessible via the 'Create a use case' button.
                            <img key="ceem-problem-2-2" src={P22.src} alt="ceem-problem-2-2" />
                            <img key="ceem-problem-2-3" src={P23.src} alt="ceem-problem-2-3" />
                        </div>
                    </div>
                </div>
                <div id="section-description">
                    <div className="column">
                    Problem #3: The ‘Validation Results’ section does not scale to the amount of data in deployment.
                    <span id="space" />
                    Solution: Separate each deployment step into its own tab or page. 
                    <span id="space" />
                    Thought process: Deployment triggers several processes, including the health check, testing as a service, and web hook events. Each process generates a large amount of data that is pertinent to the user. In Version 1, all these steps were consolidated on a single page, requiring users to scroll through it painstakingly to review results. In Version 2, I introduced separate tabs for each step and an overview panel at the top displaying the start date and duration of the process (this was vague since ‘Webhooks’ does not have a definitive end). In the current design, I opted to represent these steps as individual buttons, each providing key information relevant to its process. Clicking on a button reveals the detailed data for that specific step to the user.
                    </div>
                    <div className="two-column-container">
                        <div className="column">
                            <i>Version 1</i>
                            <img key="ceem-problem-3-1" src={P31.src} alt="ceem-problem-3-1" />
                        </div>
                        <div className="column">
                            <i>Version 2</i>
                            <img key="ceem-problem-3-2" src={P32.src} alt="ceem-problem-3-2" />
                        </div>
                    </div>
                    <i>Improved design</i>
                    <img key="ceem-problem-3-3" src={P33.src} alt="ceem-problem-3-3" />
                </div>
                <h4>Current Design</h4>
                <div id="image-gallery-with-text-overlay">
                    {finalImageList.map((image, index) => (
                        <div className="image-1 item">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>

                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

"use client"
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect, useState} from "react";
import Footer from "../components/footer";

const v1images = [
    {
        src: 'https://i.postimg.cc/RFRRGnDt/sketch1.jpg',
        alt: 'Sketch 1',
    },
    {
        src: 'https://i.postimg.cc/prcBMMxX/sketch3.jpg',
        alt: 'Sketch 2',
    },
    {
        src: 'https://i.postimg.cc/zGgF6QQ8/initial-design.png',
        alt: 'Initial design',
    },
    {
        src: 'https://i.postimg.cc/FKv3qHcV/dependency.png',
        alt: 'Dependency tree',
    },
]
const images = [
    {
        src: 'https://i.postimg.cc/brQfJgCn/Screen-Shot-2023-06-02-at-5-55-12-PM.png',
        alt: 'Figma',
    },
    {
        src: 'https://i.postimg.cc/GmDMpMT1/Screen-Shot-2023-06-02-at-11-57-11-PM.png',
        alt: 'Improv 1',
    },
    {
        src: 'https://i.postimg.cc/DzMKKj93/Screen-Shot-2023-06-02-at-11-43-34-PM.png',
        alt: 'Improv 2',
    },
    {
        src: 'https://i.postimg.cc/xTNM3Ynn/Screen-Shot-2023-06-05-at-11-06-18-PM.png',
        alt: 'Sync',
    },
    {
        src: 'https://i.postimg.cc/HkfWmDyW/Screen-Shot-2023-06-05-at-11-07-24-PM.png',
        alt: 'Revert',
    },
    {
        src: 'https://i.postimg.cc/yYdr1qVR/Screen-Shot-2023-06-05-at-10-51-38-PM.png',
        alt: 'Cross IMS',
    },
    {
        src: 'https://i.postimg.cc/1tMBTX4W/Screen-Shot-2023-06-03-at-12-41-29-AM.png',
        alt: 'Audit Log',
    }
]
const uxdesignimages = [
    {
        src: 'https://i.postimg.cc/L6CBNnFY/selectsource.png',
        alt: 'Step 1',
    },
    {
        src: 'https://i.postimg.cc/Z56n0MHb/selectsandboxes.png',
        alt: 'Step 2',
    },
    {
        src: 'https://i.postimg.cc/yNPNy322/selectdestsandbox.png',
        alt: 'Step 3',
    },
    {
        src: 'https://i.postimg.cc/fRy5NYff/sandboxcopy.png',
        alt: 'Step 4',
    },
    {
        src: 'https://i.postimg.cc/B62sc5zW/Screen-Shot-2023-06-02-at-11-54-57-PM.png',
        alt: 'Step 5',
    },
]

const campaignion = [
    {
        src: 'https://i.ibb.co/2jvmk6c/Screen-Shot-2023-08-23-at-4-38-49-PM.png',
        alt: 'Title image'
    },
    {
        src: 'https://i.ibb.co/bBvybNr/Screen-Shot-2023-08-23-at-4-40-05-PM.png',
        alt: 'Version 2 Image 1'
    },
    {
        src: 'https://i.ibb.co/wppK9PQ/Screen-Shot-2023-08-23-at-4-19-52-PM.png',
        alt: 'Version 2 Image 2'
    },
    {
        src: '',
        alt: 'Version 2 Image 3'
    },
    {
        src: 'https://i.ibb.co/kQhW8Vf/camp7.png',
        alt: 'Version 2 Image 3'
    },
]

const campaignion_v1 = [
    {
        src: 'https://i.ibb.co/qNKrRrm/image001.png',
        alt: '1'
    },
    {
        src: 'https://i.ibb.co/G0WnX2R/image002.png',
        alt: '2'
    },
    {
        src: 'https://i.ibb.co/4WGD3wK/image003.png',
        alt: '3'
    },
    {
        src: 'https://i.ibb.co/fqwPJJb/image004.png',
        alt: '4'
    },
    {
        src: 'https://i.ibb.co/pP3yvDW/image005.png',
        alt: '5'
    },
]

const campaignion_final = [
    {
        src: 'https://i.ibb.co/RvnfbWY/camp1.png',
        alt: '1'
    },
    {
        src: 'https://i.ibb.co/4ZQdFC8/camp2.png',
        alt: '2'
    },
    {
        src: 'https://i.ibb.co/93jys0n/camp3.png',
        alt: '3'
    },
    {
        src: 'https://i.ibb.co/3W7KhcL/camp4.png',
        alt: '4'
    },
    {
        src: 'https://i.ibb.co/1KBFHqs/camp5.png',
        alt: '5'
    },
    {
        src: 'https://i.ibb.co/dbbbyrF/camp6.png',
        alt: '6'
    },
]

export default function UXDesign() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const toggle1 = () => {
        setOpen1(!open1);
    };
    const toggle2 = () => {
        setOpen2(!open2);
    };

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <h2>UX Design</h2>
            <div>
                <h3>Adobe Experience Platform Artifact Copy App</h3>
                <br/>
                <img
                    key={uxdesignimages[1].alt}
                    src={uxdesignimages[1].src}
                    alt={uxdesignimages[1].alt}
                /><br/>
                <p><b>Technologies:</b> React Spectrum, Javascript, Unified Shell</p>
                <button onClick={toggle1}>Read more &raquo;</button>
                {open1 && (
                    <div className="toggle1">
                        <hr/>
                        <br/>
                        <h4>Glossary</h4>
                        <p><span className="glossary-term"><b>Artifact</b></span>: An object that holds customer data in Experience Platform<br/>
                        <span className="glossary-term"><b>Sandbox</b></span>: Virtual partitions within a single instance of Experience
                        Platform that enable customers to manage and monitor artifacts<br/>
                        </p>
                        <div className="md:grid md:grid-cols-2">
                            <div className="left-col">
                                <h4>Problem</h4>
                                <p>
                                    Transferring artifacts between sandboxes in Adobe Experience Platform is
                                    time-consuming and
                                    error
                                    prone.
                                </p>
                            </div>
                            <div className="right-col">
                                <h4>Objective</h4>
                                <p>
                                    Build a tool that simplifies and streamlines sandbox management.
                                </p>
                            </div>
                        </div>
                        <h4>Solution</h4>
                        <p>Create an internal Unified Shell application that uses Adobe Experience Platform's API to
                            handle all facets of sandbox management.<br/><br/>
                            With our app, the user can:<br/>
                            <ul className="list">
                                <li>  • Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                                    first level dependencies from one sandbox to another sandbox</li>
                                <li>• Review dependencies before copying</li>
                                <li>• Sync artifacts between the source and destination sandboxes</li>
                                <li>• Revert artifacts (once) after syncing</li>
                                <li>• Log actions for documentation and troubleshooting</li>
                            </ul>
                        </p>
                        <h4>Role</h4>
                        <p>
                            I led design and front-end development on a five person team.
                        </p>
                        <h4>Research</h4>
                        <p>
                            All team members participated in the research process. We gathered requirements from
                            internal
                            consultants and solution architects whose customers needed to efficiently manage
                            multi-sandbox
                            environments.<br/><br/>
                            We identified the following pain points across all customers:<br/>
                            <ul className="list">
                                <li>
                                    • Painful and time-consuming to copy complex artifacts between sandboxes
                                </li>
                                <li>
                                    • Need to easily kickstart new business implementations between environments
                                </li>
                                <li>
                                    • Need to deploy sandboxes with a baseline configuration, support
                                    customers that
                                    wish to benefit from faster sandbox deployments that include tested AEP
                                    configurations
                                </li>
                                <li>
                                    • Need a separate set of APIs for AEP versus AJO for migrating development work to higher sandboxes
                                </li>
                            </ul>
                            <br/>
                            A competitive analysis of other sandbox management apps:<br/><br/>
                            <img
                                key={"competitive analysis"}
                                className='w-full rounded'
                                src={'https://i.ibb.co/0Jm8Pkx/Screen-Shot-2023-07-09-at-4-20-10-PM.png'}
                                alt={"competitive analysis"}
                            /><br/>
                            Throughout our design and implementation process, I led internal demos and testing sessions
                            to debug the
                            app, improve its usability, and fine-tune requirements.
                        </p>
                        <h4>Version One</h4><br/>
                        <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                            {v1images.map((image) => (
                                <img
                                    key={image.src}
                                    className='w-full rounded'
                                    src={image.src}
                                    alt={image.alt}
                                />
                            ))}
                        </SlideshowLightbox><br/>
                        <p>
                            Our initial design lacked scalability and helpful reporting.
                            More specifically, it lacked a consolidated view of all dependencies for
                            large copy operations, an organized audit log for troubleshooting, and a
                            modularized/scalable
                            UI to easily incorporate additional features.
                        </p>
                        <h4>Version Two</h4>
                        <p>
                            Based on existing design patterns in AEP, I drafted a re-design in<span> </span>
                            <u><a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137">Figma</a></u>.<br/><br/>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #1</b>: Users cannot view more than one artifact's dependencies at a time.<br/><br/>
                                    <b>Solution</b>: List all artifacts and their dependencies in a separate window.<br/><br/>
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: Previously, the user could only view one artifact's
                                    dependencies at a time
                                    in a tree diagram, which was a useful but buggy feature. During the testing
                                    sessions, we
                                    agreed that a separate window was necessary to have an organized view of all
                                    selected artifacts and their
                                    dependencies. I decided to follow the AJO Object Copy UI and display them in a list.
                                </div>
                            </div>
                            <br/>
                            <img
                                key={"improv1"}
                                className='w-full rounded'
                                src={images[1].src}
                                alt={images[1].alt}
                            /><br/>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #2</b>: Lack of modularization makes it hard to incorporate new features.<br/><br/>
                                    <b>Solution</b>: Separate the artifacts into their own tabs.<br/><br/>
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: We received two additional requests to sync and revert
                                    artifacts between sandboxes.
                                    Incorporating these features (each requiring multiple UI components) would've
                                    been
                                    time-consuming and unreliable in our single-page UI. Given
                                    that our highest
                                    priority was to implement these features for schemas and we already faced issues
                                    running asynchronous calls
                                    across different artifact types, we decided to move each artifact type to its own
                                    tab.
                                </div>
                            </div>
                            <br/>
                            <img
                                key={"improv2"}
                                className='w-full rounded'
                                src={images[2].src}
                                alt={images[2].alt}
                            /><br/>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #3</b>: The audit log is hard to follow and unhelpful for troubleshooting.<br/><br/>
                                    <b>Solution</b>: Turn the audit log into a table and put it on another tab.<br/><br/>
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: The audit log outputted asynchronous calls across all copy
                                    operations, which made it hard to trace what was actually happening for each copy
                                    workflow. Since we
                                    already
                                    created tabs for each artifact type, we decided to extend this to the audit log and
                                    put it
                                    on a separate
                                    tab. We also narrowed down the information to main actions taken in the app
                                    and organized it into a table.
                                </div>
                            </div>
                            <br/>
                            <img
                                key={"improv3"}
                                className='w-full rounded'
                                src={images[6].src}
                                alt={images[6].alt}
                            /><br/>
                            <h4>Final Design</h4><br/>
                            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                                {uxdesignimages.map((image) => (
                                    <img
                                        key={image.src}
                                        className='w-full rounded'
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                ))}
                            </SlideshowLightbox>
                        </p>
                        <h4>Feedback</h4>
                        <p>
                            From the audit log, we've tracked over 100 internal consultants and solution architects
                            using our app. We've also added an additional capability to copy artifacts across IMS orgs.
                            Overall, we've received positive feedback on the usefulness of this tool to
                            facilitate and streamline sandbox management in AEP.
                        </p>
                    </div>
                )}
            </div>
            <br/>
            <hr/>
            <br/>
            <div>
                <h3>Campaignion</h3>
                <br/>
                <img
                    key={campaignion[0].alt}
                    src={campaignion[0].src}
                    alt={campaignion[0].alt}
                /><br/>
                <p><b>Technologies:</b> React Spectrum, Javascript, Unified Shell</p>
                <button onClick={toggle2}>Read more &raquo;</button>
                {open2 && (
                    <div className="toggle2">
                        <hr/>
                        <br/>
                        <div className="md:grid md:grid-cols-2">
                            <div className="left-col">
                                <h4>Problem</h4>
                                <p>
                                    Documentation of workflows in Adobe Campaign Standard (ACS) is manual and unstructured.
                                </p>
                            </div>
                            <div className="right-col">
                                <h4>Objective</h4>
                                <p>
                                    Reduce documentation time and therefore time to value for Campaign Standard implementations.
                                </p>
                            </div>
                        </div>
                        <h4>Solution</h4>
                        <p>
                            Create a tool that ingests workflow data and automates Campaign documentation. Users should
                            be able to
                            access and export the documentation via a Unified Shell UI.
                        </p>
                        <h4>Role</h4>
                        <p>
                            I independently conceptualized, designed, and coded this project.
                        </p>
                        <h4>Research</h4>
                        <p>
                            I reviewed existing documentation spread across customer SharePoint sites and Wiki pages. I
                            also
                            researched image detection methods to label workflow images, but realized I could access
                            the workflow
                            HTML from the Developer Console. No internal tools existed in automating documentation.<br/><br/>
                            From conversations across the team, I identified the following pain points:<br/>
                            <ul className="list">
                                <li>• There is no template or established structure for existing documentation (e.g. some
                                    documentation is
                                    all text, others are a mix of pictures and text)</li>
                                <li>• Documentation is a manual and tedious process and can take hours to complete for large
                                    workflows.</li>
                                <li>• This often leads to poor documentation (not updated, missing comprehensive explanations,
                                    etc.), which leads
                                    to slower hand-off and difficulty troubleshooting future issues.</li>
                            </ul>
                            <br/>
                            Throughout the development process, I led internal demos and testing sessions to improve
                            the app's usability on a variety of workflows.
                        </p>
                        <h4>Version One</h4>
                        <p>
                            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                                {campaignion_v1.map((image) => (
                                    <img
                                        key={image.src}
                                        className='w-full rounded'
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                ))}
                            </SlideshowLightbox><br/>
                            In this single page UI, the user copies the workflow HTML from the Developer Console and
                            pastes it in the
                            input field. Once the user hits Process, the tool outputs a re-drawn workflow with numbered
                            activities
                            and a description table.<br/><br/>
                            The main accomplishment of the first version was that it could accurately parse and re-draw
                            workflows, however,
                            the activity sequencing and documentation structure needed to be scaled for larger workflows
                            containing
                            more than 10 activities, for example.
                        </p>
                        <h4>Version Two</h4>
                        <p>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #1</b>: The current documentation is too dense and hard to follow for large
                                    workflows.<br/><br/>
                                    <b>Solution</b>: Enable the user to split the workflow into groups of x activities and
                                    provide a table under each group.<br/><br/>
                                    <img
                                        id="blurry-image"
                                        key={"campaignion_problem1"}
                                        className='w-full rounded'
                                        src={campaignion[1].src}
                                        alt={campaignion[1].alt}
                                    />
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: Originally I had a zoom in/out feature on the re-drawn
                                    workflow, however, larger workflows would be inconvenient to navigate in the UI.
                                    I decided to split the workflow into activity groups. The number of activities in each group
                                    would not be
                                    hard-coded since this could result in an awkward documentation of one or two remaining
                                    activities. I decided to add a number dropdown
                                    for the user to specify how many activities they wanted to see at a time. This way they
                                    could have the option
                                    to view all activities at once in a large table or split the documentation into digestible
                                    bits.
                                </div>
                            </div><br/>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #2</b>: The current documentation does not explain the activities in a logical
                                    way.<br/><br/>
                                    <b>Solution</b>: Use the breadth-first search algorithm to sequence activities.<br/><br/>
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: I originally used the depth-first search algorithm to sequence
                                    activities. This
                                    meant the tool would document one complete branch of the workflow before moving to another
                                    branch, which did not comprehensively describe the workflow. For example, the workflow below
                                    targets an
                                    audience to receive an email campaign, then segments that audience to receive different
                                    versions of it.
                                    By using breadth-first search, the tool can document starting from the root and explore all
                                    activities
                                    at the present depth prior to moving on to the activities at the next depth level.
                                </div>
                            </div><br/>
                            <img
                                key={"improv2"}
                                className='w-full rounded'
                                src={campaignion[2].src}
                                alt={campaignion[2].alt}
                            /><br/>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #3</b>: Users cannot share the documentation.<br/><br/>
                                    <b>Solution</b>: Enable the output to be exported to Word.<br/><br/>
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: The major feedback I got from testing sessions was to add a way to
                                    export or share
                                    the outputted documentation. The user could drag their mouse to copy and paste the output,
                                    but the images
                                    could not be imported to another location like a Word document. Thus, I added a button to
                                    parse the output
                                    and successfully download it into a Word document.
                                </div>
                            </div><br/>
                            <img
                                key={"improv3"}
                                className='w-full rounded'
                                src={campaignion_final[5].src}
                                alt={campaignion_final[5].alt}
                            /><br/>
                            <div className="md:grid md:grid-cols-2">
                                <div className="left-col">
                                    <b>Problem #4</b>: Users still need to fill out the purpose and notes columns in the
                                    table.<br/><br/>
                                    <b>Solution</b>: Partially auto-fill the table with placeholder language.<br/><br/>
                                </div>
                                <div className="right-col">
                                    <b>Thought Process</b>: Unfortunately, I was unable to find an API that, given the page url,
                                    would provide
                                    all data in the workflow, including richer data in the activities such as deduplication
                                    criteria,
                                    segmentation conditions, and target audience queries. There were also concerns with exposing
                                    sensitive
                                    customer data. Thus, I decided to establish a standard, placeholder language for each
                                    activity type. This
                                    way the table would be partially auto-filled and the user would simply need to fill in the
                                    blanks.
                                </div>
                            </div><br/>
                            <img
                                key={"improv3"}
                                className='w-full rounded'
                                src={campaignion[4].src}
                                alt={campaignion[4].alt}
                            /><br/>
                            <h4>Final Design</h4><br/>
                            <SlideshowLightbox className='container grid grid-cols-3 gap-2'>
                                {campaignion_final.map((image) => (
                                    <img
                                        key={image.src}
                                        className='w-full rounded'
                                        src={image.src}
                                        alt={image.alt}
                                    />
                                ))}
                            </SlideshowLightbox>
                        </p>
                        <h4>Feedback</h4>
                        <p>
                            Problems to explore:<br/>
                            • Using an API to grab workflow data given the page url<br/>
                            • QA testing - ensure a workflow aligns with requirements<br/><br/>
                            This tool semi-automates and significantly reduces workflow documentation time in ACS. With
                            this prototype, I was able to document a 56-activity workflow in just 15 minutes instead of
                            45
                            minutes. Overall, I received positive feedback on this tool, which has been published
                            in Adobe's Shared Center of Excellence, an internal site for consulting assets, and the
                            Campaign Design Club.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

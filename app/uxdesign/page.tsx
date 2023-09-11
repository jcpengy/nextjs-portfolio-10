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
                <p>Technologies: React Spectrum, Javascript, Unified Shell, Figma</p>
                <button onClick={toggle1}>Read more &raquo;</button>
                {open1 && (
                    <div className="toggle1">
                        <hr/>
                        <br/>
                        <h4>Problem</h4>
                        <p>
                            Transferring artifacts between sandboxes in Adobe Experience Platform is time-consuming and
                            error
                            prone.
                        </p>
                        <h4>Objective</h4>
                        <p>
                            Build a tool that simplifies and streamlines sandbox management.
                        </p>
                        <h4>Solution</h4>
                        <p>
                            Create an internal Unified Shell application that uses Adobe Experience Platform's API to
                            handle all
                            facets of sandbox management. With our app, the user can:<br/><br/>
                            • Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                            first level dependencies from one sandbox to another sandbox<br/>
                            • Review dependencies before copying<br/>
                            • Sync artifacts between the source and destination sandboxes<br/>
                            • Revert artifacts (once) after syncing<br/>
                            • Log actions for documentation and troubleshooting
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
                            We identified the following pain points across all customers:
                            <ul>
                                <li>
                                    Painful and time-consuming to copy complex artifacts from Production to Development
                                    sandboxes
                                </li>
                                <li>
                                    Need to easily kickstart new business implementations from Development to QA or Production
                                </li>
                                <li>
                                    Deploy market or regional sandboxes with a baseline configuration, support customers that
                                    wish to benefit from faster sandbox deployments that include tested AEP configurations
                                </li>
                                <li>
                                    Development work migrated to higher sandboxes from the UI without
                                    having separate set of APIs for AEP versus AJO
                                </li>
                            </ul>
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
                        <h4>Version One</h4>
                        <p>
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
                            From the testing sessions, we concluded our initial design lacked scalability and helpful
                            reporting.
                            Users did not have a consolidated view of all dependencies for
                            large copy operations. The audit log did not provide an organized documentation of calls
                            occurring on
                            the backend. Finally, having all copy workflows on a single page made it difficult to
                            organize the code
                            and add additional features like sync and revert.
                        </p>
                        <h4>Version Two</h4>
                        <p>
                            Based on existing design patterns in AEP, I drafted a re-design in
                            <u><a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137">Figma</a></u>.<br/><br/>
                            <u>Problem #1</u>: Users cannot view dependencies of all artifacts in one place.<br/>
                            <u>Solution</u>: Create a separate dialog window and use a list to show all selected
                            artifacts and their
                            dependencies.<br/>
                            <u>Thought Process</u>: There were two issues to this problem. The first was how to display
                            the dependency
                            itself and the second was how to display multiple dependencies. The tree diagram we had
                            previously
                            lagged
                            sometimes on artifact selection and was generally buggy. During the testing sessions, we
                            agreed that a
                            separate window was crucial for viewing all dependencies in one place. As for displaying the
                            dependency
                            itself, I decided to look toward AJO Copy for inspiration instead of reinventing the wheel.
                            In this
                            design, all selected artifacts and their dependencies are organized in a simple list. This
                            way, the user
                            can review all information before starting the copy process.<br/><br/>
                            <img
                                key={"improv1"}
                                className='w-full rounded'
                                src={images[1].src}
                                alt={images[1].alt}
                            /><br/>
                            <u>Problem #2</u>: A single page UI makes it hard to incorporate more complex features.<br/>
                            <u>Solution</u>: Put each artifact type on its own tab.<br/>
                            <u>Thought Process</u>: We needed to add two more features to our app: 1) the ability to
                            sync artifacts between
                            source and destination sandboxes and 2) the ability to revert the artifact to its original
                            state (once)
                            after syncing. The UI for each of these features would require a button and a status
                            message. Adding
                            these two features to the previous design would've crowded it. Since we wanted to implement
                            sync and revert for schemas only and we already faced issues running calls for all artifact
                            types at
                            once,
                            we decided to move each artifact type to its own tab. Each tab would follow the same copy
                            workflow, but it'd be much easier now to incorporate new features per artifact
                            type.<br/><br/>
                            <img
                                key={"improv2"}
                                className='w-full rounded'
                                src={images[2].src}
                                alt={images[2].alt}
                            /><br/>
                            <u>Problem #3</u>: The audit log is too confusing to read and doesn't help with
                            troubleshooting.<br/>
                            <u>Solution</u>: Turn the audit log into a table and put it on another tab.<br/>
                            <u>Thought Process</u>: Previously, the audit log outputted all calls that were executed on
                            the backend in no
                            particular order. This made troubleshooting extremely difficult and time-consuming. Since we
                            already
                            created tabs for each artifact type, we decided to extend this to the audit log and put it
                            on a separate
                            tab as well. In addition, we only needed to show key information of main actions taken in
                            the app. We decided
                            to organize the log into a table with columns showing the artifact type, status, action,
                            etc. for
                            copy, sync, and revert.<br/><br/>
                            <img
                                key={"improv3"}
                                className='w-full rounded'
                                src={images[6].src}
                                alt={images[6].alt}
                            /><br/>
                            <h4>Final Design</h4>
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
            <br/><br/>
            <div>
                <h3>Campaignion</h3>
                <br/>
                <img
                    key={campaignion[0].alt}
                    src={campaignion[0].src}
                    alt={campaignion[0].alt}
                /><br/>
                <p>Technologies: React Spectrum, Javascript, Unified Shell</p>
                <button onClick={toggle2}>Read more &raquo;</button>
                {open2 && (
                    <div className="toggle2">
                        <hr/>
                        <br/>
                        <h4>Problem</h4>
                        <p>
                            Documentation of workflows in Adobe Campaign Standard (ACS) is manual and unstructured.
                        </p>
                        <h4>Objective</h4>
                        <p>
                            Reduce documentation time and therefore time to value for Campaign Standard implementations.
                        </p>
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
                            researched image detection methods to label workflow images, but discovered I could access
                            the workflow
                            HTML from the Developer Console. I did not find any internal tools that assisted in
                            documentation and from
                            conversations across the team, I identified the following pain points:<br/>
                            • There is no template or established structure for existing documentation (e.g. some
                            documentation is
                            all text, others are a mix of pictures and text)<br/>
                            • Documentation is a manual and tedious process and can take hours to complete for large
                            workflows.<br/>
                            • This often leads to poor documentation (not updated, missing comprehensive explanations,
                            etc.), which leads
                            to slower hand-off and difficulty troubleshooting future issues.<br/><br/>
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
                            and a description table.<br/>
                            The main accomplishment of the first version was that it could accurately parse and re-draw
                            workflows, however,
                            the activity sequencing and documentation structure needed to be scaled for larger workflows
                            containing
                            more than 10 activities, for example.
                        </p>
                        <h4>Version Two</h4>
                        <p>
                            <u>Problem #1</u>: The current documentation is too dense and hard to follow for large
                            workflows.<br/>
                            <u>Solution</u>: Enable the user to split the workflow into groups of x activities and
                            provide a
                            table under each group.<br/>
                            <u>Thought Process</u>: Originally I had a zoom in/out feature on the re-drawn
                            workflow, however, larger workflows would be inconvenient to navigate in the UI.
                            I decided to split the workflow into activity groups. The number of activities in each group
                            would not be
                            hard-coded since this could result in an awkward documentation of one or two remaining
                            activities. I decided to add a number dropdown
                            for the user to specify how many activities they wanted to see at a time. This way they
                            could have the option
                            to view all activities at once in a large table or split the documentation into digestible
                            bits.<br/><br/>
                            <img
                                key={"campaignion_problem1"}
                                className='w-full rounded'
                                src={campaignion[1].src}
                                alt={campaignion[1].alt}
                            /><br/>
                            <u>Problem #2</u>: The current documentation does not explain the activities in a logical
                            way.<br/>
                            <u>Solution</u>: Use the breadth-first search algorithm to sequence activities.<br/>
                            <u>Thought Process</u>: I originally used the depth-first search algorithm to sequence
                            activities. This
                            meant the tool would document one complete branch of the workflow before moving to another
                            branch, which did not comprehensively describe the workflow. For example, the workflow below
                            targets an
                            audience to receive an email campaign, then segments that audience to receive different
                            versions of it.
                            By using breadth-first search, the tool can document starting from the root and explore all
                            activities
                            at the present depth prior to moving on to the activities at the next depth level.<br/><br/>
                            <img
                                key={"improv2"}
                                className='w-full rounded'
                                src={campaignion[2].src}
                                alt={campaignion[2].alt}
                            /><br/>
                            <u>Problem #3</u>: Users cannot share the documentation.<br/>
                            <u>Solution</u>: Enable the output to be exported to Word.<br/>
                            <u>Thought Process</u>: The major feedback I got from testing sessions was to add a way to
                            export or share
                            the outputted documentation. The user could drag their mouse to copy and paste the output,
                            but the images
                            could not be imported to another location like a Word document. Thus, I added a button to
                            parse the output
                            and successfully download it into a Word document. <br/><br/>
                            <img
                                key={"improv3"}
                                className='w-full rounded'
                                src={campaignion_final[5].src}
                                alt={campaignion_final[5].alt}
                            /><br/>
                            <u>Problem #4</u>: Users still need to fill out the purpose and notes columns in the
                            table.<br/>
                            <u>Solution</u>: Partially auto-fill the table with placeholder language.<br/>
                            <u>Thought Process</u>: Unfortunately, I was unable to find an API that, given the page url,
                            would provide
                            all data in the workflow, including richer data in the activities such as deduplication
                            criteria,
                            segmentation conditions, and target audience queries. There were also concerns with exposing
                            sensitive
                            customer data. Thus, I decided to establish a standard, placeholder language for each
                            activity type. This
                            way the table would be partially auto-filled and the user would simply need to fill in the
                            blanks.<br/><br/>
                            <img
                                key={"improv3"}
                                className='w-full rounded'
                                src={campaignion[4].src}
                                alt={campaignion[4].alt}
                            /><br/>
                            <h4>Final Design</h4>
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

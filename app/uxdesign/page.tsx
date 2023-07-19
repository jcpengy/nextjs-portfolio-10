"use client"
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import {useEffect} from "react";
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

export const revalidate = 60;

export default function UXDesignPage() {

    useEffect(() => {
        initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
    });

    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">AEP Artifact Copy App</h1>
            <hr/>
            <br/>
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Problem</h3>
            <p className="my-5">
                Transferring artifacts between sandboxes in Adobe Experience Platform is time-consuming and error
                prone.
            </p>
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Objective</h3>
            <p className="my-5">
                Build a tool that simplifies and streamlines sandbox management.
            </p>
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Solution</h3>
            <p className="my-5">
                Create an internal Unified Shell application that uses Adobe Experience Platform's API to handle all
                facets of sandbox management. With our app, the user can:<br/><br/>
                • Copy all foundation artifacts (schemas, datasets, segments, sources, destinations) and
                first level dependencies from one sandbox to another sandbox<br/>
                • Review dependencies before copying<br/>
                • Sync artifacts between the source and destination sandboxes<br/>
                • Revert artifacts (once) after syncing<br/>
                • Log actions for documentation and troubleshooting
            </p>
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Research</h3>
            <p className="my-5">
                All five members of my team participated in the research process. We gathered requirements from internal
                consultants and solution architects whose customers needed to efficiently manage multi-sandbox
                environments.<br/><br/>
                We identified the following pain points across all customers:<br/>
                • Painful and time-consuming to copy complex artifacts from Production to Development sandboxes<br/>
                • Need to easily kickstart new business implementations from Development to QA or Production<br/>
                • Deploy market or regional sandboxes with a baseline configuration, support customers that
                wish to benefit from faster sandbox deployments that include tested AEP configurations<br/>
                • Development work migrated to higher sandboxes from the UI without
                having separate set of APIs for AEP versus AJO<br/><br/>
                A competitive analysis of other sandbox management apps:<br/><br/>
                <img
                    key={"competitive analysis"}
                    className='w-full rounded'
                    src={'https://i.ibb.co/0Jm8Pkx/Screen-Shot-2023-07-09-at-4-20-10-PM.png'}
                    alt={"competitive analysis"}
                /><br/>
                Throughout our design and implementation process, I led internal demos and testing sessions to debug the
                app, improve its usability, and fine-tune requirements.
            </p>
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Version One</h3>
            <p className="my-5">
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
                From the testing sessions, we concluded our initial design lacked scalability and helpful reporting.
                Users did not have a consolidated view of all dependencies for
                large copy operations. The audit log did not provide an organized documentation of calls occurring on
                the backend. Finally, having all copy workflows on a single page made it difficult to organize the code
                and add additional features like sync and revert.
            </p>
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Version Two</h3>
            <p className="my-5">
                Based on existing design patterns in AEP, I drafted a re-design in
                <u><a href="https://www.figma.com/proto/TIHIYPfyhvmQiSWxfzz5i1/Untitled?node-id=1-400&scaling=
                            min-zoom&page-id=0%3A1&starting-point-node-id=1%3A137">Figma</a></u>.<br/><br/>
                <u>Problem #1</u>: Users cannot view dependencies of all artifacts in one place.<br/>
                <u>Solution</u>: Create a separate dialog window and use a list to show all selected artifacts and their
                dependencies.<br/>
                <u>Thought Process</u>: There were two issues to this problem. The first was how to display the dependency
                itself and the second was how to display multiple dependencies. The tree diagram we had previously
                lagged
                sometimes on artifact selection and was generally buggy. During the testing sessions, we agreed that a
                separate window was crucial for viewing all dependencies in one place. As for displaying the dependency
                itself, I decided to look toward AJO Copy for inspiration instead of reinventing the wheel. In this
                design, all selected artifacts and their dependencies are organized in a simple list. This way, the user
                can review all information before starting the copy process.<br/><br/>
                <img
                    key={"improv1"}
                    className='w-full rounded'
                    src={images[1].src}
                    alt={images[1].alt}
                /><br/>
                <u>Problem #2</u>: A single page UI makes it hard to incorporate more complex features.<br/>
                <u>Solution</u>: Put each artifact type on its own tab.<br/>
                <u>Thought Process</u>: We needed to add two more features to our app: 1) the ability to sync artifacts between
                source and destination sandboxes and 2) the ability to revert the artifact to its original state (once)
                after syncing. The UI for each of these features would require a button and a status message. Adding
                these two features to the previous design would've crowded it. Since we wanted to implement
                sync and revert for schemas only and we already faced issues running calls for all artifact types at
                once,
                we decided to move each artifact type to its own tab. Each tab would follow the same copy
                workflow, but it'd be much easier now to incorporate new features per artifact type.<br/><br/>
                <img
                    key={"improv2"}
                    className='w-full rounded'
                    src={images[2].src}
                    alt={images[2].alt}
                /><br/>
                <u>Problem #3</u>: The audit log is too confusing to read and doesn't help with troubleshooting.<br/>
                <u>Solution</u>: Turn the audit log into a table and put it on another tab.<br/>
                <u>Thought Process</u>: Previously, the audit log outputted all calls that were executed on the backend in no
                particular order. This made troubleshooting extremely difficult and time-consuming. Since we already
                created tabs for each artifact type, we decided to extend this to the audit log and put it on a separate
                tab as well. In addition, we only needed to show key information of main actions taken in the app. We decided
                to organize the log into a table with columns showing the artifact type, status, action, etc. for
                copy, sync, and revert.<br/><br/>
                <img
                    key={"improv3"}
                    className='w-full rounded'
                    src={images[6].src}
                    alt={images[6].alt}
                /><br/>
                <h3 className="font-bold text-2xl mb-8 tracking-tighter">Final Design</h3>
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
            <h3 className="font-bold text-2xl mb-8 tracking-tighter">Feedback</h3>
            <p className="my-5">
                From the audit log, we've tracked over 100 internal consultants and solution architects
                using our app. We've also added an additional capability to copy artifacts across IMS orgs.
                Overall, we've received positive feedback on the usefulness of this tool to
                facilitate and streamline sandbox management in AEP.
            </p>
            <Footer/>
        </section>
    );
}

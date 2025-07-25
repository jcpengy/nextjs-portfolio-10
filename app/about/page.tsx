'use client';
import ProfilePic1 from "../../public/images/collage.png";
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";

export default function About() {
    return (
        <>
            <DesktopNavbar />
            <section id="about">
                <div className="two-column-container">
                    <div className="column">
                        <div className="bio-pic-container">
                            <img id="about-pics" key="profile-pic-1" src={ProfilePic1.src} alt="profile-pic-1" />
                        </div>
                    </div>
                    <div className="column">
                        <div id="about-blurb">
                            <h2>Hi, I'm Jess.</h2>
                            <br/>
                            I'm an SF-based front-end engineer and UX designer with diverse experience in UI/UX design
                            and development,
                            graphic design, motion design, and fine art. I graduated from the University of Pennsylvania
                            in 2019 with a B.S.E. in <u><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Computer
                            Graphics</a></u> and a minor in Fine Arts.
                            <br/><br/>
                            At Adobe, I own the end-to-end design and experience of Customer Engineering’s
                            workflow-optimizing products—from early concepts and high-fidelity mockups to interactive
                            web prototypes—focusing on clarity, impact, and adherence to design systems. Beyond Adobe,
                            I’ve developed graphics and immersive content in the journalism and manufacturing spaces, in
                            addition to branding, signage, and merchandise for hundreds of small businesses. My design
                            work has been featured in The New York Times and recognized as a finalist in the
                            annual <u><a href="https://disneyimaginations.com/" target="_blank">Disney Imaginations</a></u> competition.
                            <br/><br/>
                            When I'm not working, I enjoy playing tennis, painting or taking on a new creative project,
                            and playing with my giant Yorkie, Butters.
                            <br/><br/>
                            <u><a
                              href="https://acrobat.adobe.com/id/urn:aaid:sc:US:2c008436-8d21-41c3-b6da-b38c733fa498"
                              target="_blank">View my resume.</a></u>
                            <hr/>
                            <br/>
                            <i>If you have any questions, please reach out by emailing me at pengjess2@gmail.com. Thanks
                                for stopping by!</i>
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

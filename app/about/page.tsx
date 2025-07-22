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
                            <br />
                            I'm an SF-based senior front-end engineer at Adobe with a background in UI/UX design and development,
                            graphic design, and fine art. I graduated from the University of Pennsylvania in 2019 with a B.S.E. in <u><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Computer Graphics</a></u> and a minor in Fine Arts.
                            <br /><br />
                            Currently, I lead the design and front-end development of solutions for Adobe Experience Platform's Customer Engineering team. I'm passionate about creating applications that are simple, accessible, and user-friendly. Outside of work, I'm a self-taught graphic designer, supporting small businesses with branding and marketing through a successful Etsy design shop. My design work has been featured in The New York Times and recognized as a finalist in the Disney Imaginations competition.
                            <br /><br />
                            When I'm not working, I enjoy playing tennis, painting or taking on a new creative project, and playing with my giant Yorkie Butters.
                            <br/><br/>
                            <hr/>
                            <br/>
                            <i>If you have any questions, please reach out by emailing me at pengjess2@gmail.com. Thanks for stopping by!</i>
                            <br/><br/>
                            <u><a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:a512b3f4-1242-4bbd-a82b-35e9b378fc8f" target="_blank">View my resume.</a></u>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

'use client';
import ProfilePic1 from "../../public/images/bio.png";
import ProfilePic2 from "../../public/images/bio-bottom.png";
// import ProfilePic1 from "../../public/images/me_butters.jpg";
const finalImages = require.context('../../public/images/fineart', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
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
                        {/* <img id="about-pics" key="profile-pic-2" src={ProfilePic2.src} alt="profile-pic-2" /> */}
                    </div>
                    <div className="column">
                        <div id="about-blurb">
                            <h2>Hello, I'm Jess.</h2>
                            <br />
                            I'm a senior front-end engineer at Adobe in San Francisco with a background in UI/UX design and development,
                            graphic design, and fine art. I graduated from the University of Pennsylvania in 2019 with a B.S.E. in <u><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Computer Graphics</a></u> and a minor in Fine Arts.
                            <br /><br />
                            Currently, I lead the design and front-end implementation of Customer Engineering's internal tools and applications.
                            Outside of work, I'm a self-taught graphic designer who's worked with non-profits and a variety of small businesses via a thriving Etsy design shop. My work has been featured in The New York Times and was a finalist in Disney Imaginations.
                            <br /><br />
                            My design style is clean, informed, and rooted in storytelling. I'm inspired by the worldbuilding in my favorite animated movies, and hope to grow my design skills in the
                            storytelling and/or children's entertainment space.
                            <br /><br />
                            When I'm not working, I like taking my nine-pound, giant Yorkie Butters to Duboce Park (sometimes with his Cavapoo cousin Beignet), playing tennis, and going to the beaches and coffee shops around San Francisco. I also love painting and drawing cartoons.
                            <br/><br/>
                            <hr/>
                            <br/>
                            <i>If you have any questions, please reach out by emailing me at pengjess2@gmail.com. Thanks for visiting!</i>
                            <br/><br/>
                            <u><a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:d95711aa-c25b-4d6f-a5e3-7a633f4ea593" target="_blank">View my resume here.</a></u>
                        </div>
                    </div>
                </div>
                {/* <div id="section-description">
                <h4>CEO JESS Comics</h4>
            </div>
            <div id="section-description">
                <h2>Personal Art</h2>
            </div>
            <div id="image-gallery-with-text-overlay">
                {finalImageList.map((image, index) => (
                    <div className="image-1 item">
                        <img key={index} src={image.default.src} alt={`image-${index}`} />
                        <p>Image Caption</p>
                    </div>

                ))}
            </div> */}
            </section>
            <Footer />
        </>
    );
}

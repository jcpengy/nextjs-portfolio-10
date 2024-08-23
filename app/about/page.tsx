'use client';
// import ProfilePic1 from "../../public/images/me_butters_bw.jpg";
import ProfilePic1 from "../../public/images/me_butters.jpg";
// import ProfilePic2 from "../../public/images/butters.jpg";
const finalImages = require.context('../../public/images/fineart', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
export default function About() {
    return (
        <section id="about">
            <h2>ABOUT</h2>
            <div className="two-column-container">
                <div className="column">
                    <img id="about-pics" key="profile-pic-1" src={ProfilePic1.src} alt="profile-pic-1" />
                    {/* <img id="about-pics" key="profile-pic-2" src={ProfilePic2.src} alt="profile-pic-2" /> */}
                </div>
                <div className="column">
                    I'm a software engineer based in San Francisco with a background in UI/UX design and development,
                    graphic design, and fine art. I graduated from the University of Pennsylvania in 2019 with a B.S.E. in Computer Graphics and a minor in Fine Arts.
                    <span id="space" />
                    I'm passionate about projects that involve creative problem solving and visual storytelling. As a senior front-end engineer
                    at Adobe, I incorporate storytelling into the design and implementation of Customer Engineering's internal tools and applications. Although I enjoy building user-friendly, functional, and accessible tools, 
                    I'm ready to pursue design on creative, story-driven projects. 
                    <span id="space" />
                    Outside of work, graphic design has been a skill and hobby that I've grown through projects for real clients and friends/family. I first started learning it to supplement my 3D modeling and fine art skills in college.
                    Since then, I've done volunteer graphic design work for a variety of organizations and also
                    ran an Etsy shop where I designed logos, branding, marketing collateral, and family event signage and merchandise.
                    Overall, I strive to create clean, cohesive, and informed designs that tell a story. My design work has been featured in the New York Times and as a finalist in Disney Imaginations.
                    <span id="space" />
                    When I'm not working, I love enjoying sunny weather by taking my nine-pound, giant Yorkie to run around Duboce Park, playing tennis, or going to the beaches around SF. I also like to do other creative things --- you can check those out below:) Thanks for visiting!
                </div>
            </div>
            <div id="section-description">
                <h4>CEO JESS Comics</h4>
            </div>
            <div id="section-description">
                <h4>Personal Art Gallery</h4>
            </div>
            <div id="image-gallery-with-text-overlay">
                    {finalImageList.map((image, index) => (
                        <div className="image-1 item">
                            <img key={index} src={image.default.src} alt={`image-${index}`} />
                            <p>Image Caption</p>
                        </div>

                    ))}
                </div>
        </section>
    );
}

'use client';
// import ProfilePic1 from "../../public/images/me_butters_bw.jpg";
// import ProfilePic1 from "../../public/images/me_butters.jpg";
// import ProfilePic2 from "../../public/images/butters.jpg";
const finalImages = require.context('../../public/images/fineart', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
export default function About() {
    return (
        <section id="about">
            <h2>About</h2>
            <div className="two-column-container">
                <div className="column">
                    {/* <img id="about-pics" key="profile-pic-1" src={ProfilePic1.src} alt="profile-pic-1" /> */}
                    {/* <img id="about-pics" key="profile-pic-2" src={ProfilePic2.src} alt="profile-pic-2" /> */}
                </div>
                <div className="column" id="about-blurb">
                    I'm a software engineer based in San Francisco with a background in UI/UX design and development,
                    graphic design, and fine art. I graduated from the University of Pennsylvania in 2019 with a B.S.E. in Computer Graphics and a minor in Fine Arts.
                    <span id="space" />
                    As a senior front-end engineer at Adobe, I lead the design and front-end implementation of Customer Engineering's internal tools and applications.
                    Outside of work, I'm a self-taught graphic designer who's volunteered with social activist organizations and designed for a variety of small businesses through a thriving Etsy shop. My work has been in the New York Times and was a finalist in Disney Imaginations.
                    <span id="space" />
                    Overall, I like to create clean, cohesive, and informed designs that tell a story.
                    My passion for visual storytelling stems from an interest in the world building found in my favorite animated movies. I aspire to do graphic design in the
                    children's entertainment space where I can take part in creating unique, stylized worlds.
                    <span id="space" />
                    When I'm not working, I enjoy taking my nine-pound, giant Yorkie Butters to Duboce Park, playing tennis, and going to the beaches around San Francisco. I also love painting and drawing cartoons.
                    <span id="space" />
                    If you have any questions, please reach out!
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
    );
}

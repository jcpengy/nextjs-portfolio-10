'use client';
// import ProfilePic1 from "../../public/images/me_butters_bw.jpg";
import ProfilePic1 from "../../public/images/me_butters.jpg";
import ProfilePic2 from "../../public/images/butters.jpg";
export default function About() {
    return (
        <section id="about">
            <h2>ABOUT</h2>
            <div className="two-column-container">
                <div className="column">
                    <img id="about-pics" key="profile-pic-1" src={ProfilePic1.src} alt="profile-pic-1" />
                    <img id="about-pics" key="profile-pic-2" src={ProfilePic2.src} alt="profile-pic-2" />
                </div>
                <div className="column">
                    I'm a San Francisco-based software engineer with a diverse background in UI/UX design, front-end development,
                    graphic design, and fine art. I graduated from the University of Pennsylvania in 2019 with a B.S.E. in Computer Graphics and a minor in Fine Arts.
                    <span id="space" />
                    My interests include creative problem solving and visual storytelling, the latter attributed to my passion for world-building in animation. As a senior front-end engineer
                    at Adobe, I incorporate storytelling into the design and implementation of Customer Engineering's internal tools and applications. Although I enjoy building user-friendly and 
                    accessible tools that solve problems for internal stakeholders, I'm ready to pursue design on creative, story-driven projects. 
                    <span id="space" />
                    Outside of work, graphic design has served as mostly a hobby that has since grown into a passion. On top of the 3D modeling and fine arts classes I took in college, I also taught myself graphic design to supplement my creative technical skills.
                    Since then, I've done volunteer graphic design work for a variety of organizations and also
                    ran an Etsy shop where I designed logos, branding, marketing collateral, and family event signage and merchandise.
                    Overall, I strive to create clean, cohesive, and informed designs with a positive and slightly-aged look. My design work has been featured in the New York Times and as a finalist in Disney Imaginations.
                    <span id="space" />
                    My interest in storytelling and world-building through design can be attributed to my passion for animation, specifically the animated movies of the 2000's. I vividly remember the logos and visuals that helped create the unique, stylized worlds seen in Monster's Inc, The Incredibles, and A Bug's Life. I hope to eventually design in the children's entertainment space and create worlds that
                    made a such positive and lasting impression on me.
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
        </section>
    );
}

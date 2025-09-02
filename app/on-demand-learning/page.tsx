'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Hero from "../../public/images/ODL/hero-image.png";
import p00 from "../../public/images/ODL/p00.png";
import p01 from "../../public/images/ODL/p01.png";
import learninggaps from "../../public/images/ODL/learninggaps.png";
import learninggaps2 from "../../public/images/ODL/learninggaps2.png";
import platform from "../../public/images/ODL/platform.png";
import p11 from "../../public/images/ODL/ordered_modules2.png";
import p12 from "../../public/images/ODL/ordered_modules.png";
import p22 from "../../public/images/ODL/p21.png";
import p21 from "../../public/images/ODL/p22.png";
import p31 from "../../public/images/ODL/p31.png";
import p32 from "../../public/images/ODL/p32.png";
import row from "../../public/images/ODL/row.png";
import SoftwareDependencies from "../../public/images/ODL/SoftwareDependencies.png";
import UserFlow from "../../public/images/ODL/UserFlow.png";
const finalImages = require.context('../../public/images/ODL/current', false);
const finalImageList = finalImages.keys().map(image => finalImages(image));
const v1Images = require.context('../../public/images/ODL/v1', false);
const v1ImageList = v1Images.keys().map(image => v1Images(image));
const v2Images = require.context('../../public/images/ODL/v2', false);
const v2ImageList = v2Images.keys().map(image => v2Images(image));
const sketches = require.context('../../public/images/ODL/Sketches', false);
const sketchesList = sketches.keys().map(image => sketches(image));
const alm = require.context('../../public/images/ODL/ALM', false);
const almList = alm.keys().map(image => alm(image));
const adu = require.context('../../public/images/ODL/ADU', false);
const aduList = adu.keys().map(image => adu(image));

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// core version + navigation, pagination modules:
import { Pagination, Navigation } from 'swiper/modules';

export default function OnDemandLearning() {
  return (
    <>
      <DesktopNavbar />
      <section>
        <br/>
        {/*Hero section*/}
        <div id="center-text">
          <h2>On-Demand Learning</h2>
          <h4>A hands-on learning solution for Adobe Experience Platform.</h4>
          <br/>
          <img className="hero-image" key="hero" src={Hero.src} alt="hero"/>
        </div>
        <br/>
        {/*Project overview*/}
        <div className="section">
          <div className="two-column-container">
            <div className="column">
              <h6>Overview</h6>
              Adobe Experience Platform customers and partners are trained through the
              Developer Enablement Program, which involves deploying learning content across multiple sandboxes
              and conducting in-person sessions to facilitate the training.
              <br/>
              <br/>
              On-Demand Learning provides this training in a virtual and scalable manner. Equipped with their own
              learning environment (an Experience Platform sandbox), customers can go through hands-on exercises and
              lectures
              at their own pace.
              <h6>Goals</h6>
              <ul>
                <li>
                  Provide Experience Platform training from the Developer Enablement Program in a virtual and scalable
                  manner to
                  reduce cost and time to value
                </li>
                <li>
                  Deliver a user-friendly, interactive learning experience that improves customers' understanding of
                  Experience Platform features and functionality
                </li>
              </ul>
            </div>
            <div className="column">
              <h6>Role</h6>
              UX Designer and Developer | Wireframes, Prototyping, UI/UX Research, Front-End Development and API
              Optimization
              <h6>Scope</h6>
              August 2024 - Current
              <h6>Tools</h6>
              React, TypeScript, React Spectrum (React implementation of Adobe’s design system), Unified Shell (Adobe’s
              UI framework for internal apps),
              HTML/CSS
            </div>
          </div>
        </div>
        <br/>
        <br/>
        {/*Exploration/Discovery*/}
        <div className="section">
          <h4>Exploration</h4>
          <div className="two-column-container">
            <div className="column">
              <h6>Personas</h6>
              <ul>
                <li>Author (Course) - creates lecture content</li>
                <li>Author (Lab pack) - creates assets that will be deployed to the learning environment</li>
                <li>Learner - consumes on-demand course</li>
                <ul>
                  <li>Data Architect</li>
                  <li>Data Engineer</li>
                  <li>Business Practitioner</li>
                  <li>Administrator</li>
                  <li>Web/Mobile Developer</li>
                </ul>
              </ul>
              <br/>
              <i>* The Learner experience will be the focus since it's farther along in development and customer
                adoption.</i>
            </div>
            <div className="column">
              <h6>Software Dependencies</h6>
              <img key="software-dependencies" src={SoftwareDependencies.src} alt="software-dependencies"/>
            </div>
          </div>
          <h6>Competitive Analysis</h6>
          We explored similar learning experiences within Adobe such as Adobe Learning Manager, Experience League, and
          Adobe
          Digital University. On-Demand Learning is differentiated from these other offerings as it provides hands-on
          learning environments that are unique to each individual developer/architect.
          <br/>
          <br/>
          However, we drew inspiration from these learnings tools for our experience. Ultimately, we decided to take a
          mixed approach of
          using ALM APIs to manage both learner and author functionalities and building a headless UI to support
          learning environments.
          <br/>
          <br/>
          <div id="section-image">
            <img key="platform-comp" src={platform.src} alt="platform-comp"/>
          </div>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {almList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="image-caption">
            <i>Adobe Learning Manager experience</i>
          </div>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {aduList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="image-caption">
            <i>Adobe Digital University experience</i>
          </div>
          <div id="section-image">
            <img key="learning-gaps" src={learninggaps.src} alt="learning-gaps"/>
            <br/>
          </div>
          <div id="section-image">
            <img key="learning-gaps-2" src={learninggaps2.src} alt="learning-gaps"/>
            <br/>
          </div>
        </div>
        {/*Design process*/}
        <br/>
        <br/>
        <div className="section">
          <h4>Design Process</h4>
          <div id="section-image">
            <img key="user-flow" src={UserFlow.src} alt="user-flow"/>
            <br/>
            <i>User flow from logging into the application to requesting/terminating a lab
              environment</i>
          </div>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {sketchesList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="center-text">
            <i></i>
          </div>
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Version 1</h4>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {v1ImageList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <table className="improvements-table">
            <thead>
            <tr>
              <th id="improvement-column">Improvement</th>
              <th id="before-column">Before</th>
              <th id="after-column">After</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <h6>Problem</h6>
                Not enough course material to divide across course categories.
                <h6>Solution</h6>
                Remove course categories, add tags to courses instead.
                <h6>Thought Process</h6>
                Our initial idea was to divide courses into categories, modeled after learning paths in Adobe Learning
                Manager.
                In a learning path, learners do not have to complete all courses to achieve a skill. However, to achieve
                this
                on the ALM backend, we needed to create a catalog for each category and we lacked sufficient course
                material/authors
                to create the content. We ultimately decided to get rid of categories and just add relevant skills and
                tags to each course.
              </td>
              <td>
                <img src={p00.src} alt="Before"/>
              </td>
              <td>
                <img src={p01.src} alt="After"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Version 2</h4>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {v2ImageList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <table className="improvements-table">
            <thead>
            <tr>
              <th id="improvement-column">Improvement</th>
              <th id="before-column">Before</th>
              <th id="after-column">After</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <h6>Problem</h6>
                User has no indication that modules must be taken in order for some courses.
                <h6>Solution</h6>
                Disable user from selecting a module until they have completed the previous one.
                <h6>Thought Process</h6>
                In some courses, module order is enforced. Previously, users would encounter a warning dialog if they
                attempted to select a module without completing the prior ones. To create a clearer and more proactive
                experience, I decided to enable and disable module selection accordingly. Instead, users are now
                informed upfront that modules must be completed in sequence, based on what modules are available to
                select.
              </td>
              <td>
                <img src={p11.src} alt="Before"/>
              </td>
              <td>
                <img src={p12.src} alt="After"/>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Problem</h6>
                The Home page is redundant and uninformative.
                <h6>Solution</h6>
                Condense information across the Home and My Learning page.
                <h6>Thought Process</h6>
                Since learners are limited to one assigned learning environment at a time, I felt it would be helpful to
                display its activity and key details directly on the Home page. To support first-time learners, I also
                added a discovery module to introduce the concept of a learning environment. Additionally, a calendar
                provides learners with a clear overview of their environment timeline at a glance.
              </td>
              <td>
                <img src={p21.src} alt="Before"/>
              </td>
              <td>
                <img src={p22.src} alt="After"/>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Problem</h6>
                Concept of a learning environment's duration is confusing.
                <h6>Solution</h6>
                Change the duration field to estimated wait time.
                <h6>Thought Process</h6>
                The concept of a learning environment’s duration was unclear—did it refer to the time needed to complete
                the lab exercise or how long the environment would be available? To avoid confusion, I revised it to
                represent the estimated wait time after requesting a new learning environment, which provides clearer
                and more relevant information for learners.
              </td>
              <td>
                <img src={p31.src} alt="Before"/>
              </td>
              <td>
                <img src={p32.src} alt="After"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Current Design</h4>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {finalImageList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Development Process</h4>
          Once we finalized the general design, I started mapping out React components and API calls needed for the UI.
          Our approach was to develop a custom headless experience and use Adobe Learning Manager as our content management system to house and serve the course and learner info.
          <div id="section-image">
            <img key="row-example" src={row.src} alt="row-example"/>
            <br/>
          </div>
          A major challenge we faced was integrating Unified Shell with Adobe Learning Manager (ALM), which had never been done before. Early obstacles included retrieving the access token required for ALM APIs, embedding the Fluidic Player for video and PDF content, and making sense of the APIs themselves. Initially, our API usage was inefficient, but through trial and error we discovered that certain calls could return more information by leveraging multiple parameters, significantly reducing the number of requests needed. As for the other challenges, we overcame them by collaborating closely with the Unified Shell team, consulting our ALM resource, and sifting through public documentation, which ultimately allowed us to establish a clear development process and successfully complete the integration.
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Impact & Next Steps</h4>
          On-Demand Learning has been successfully adopted by three pilot customers, all of whom shared positive feedback on its ability to deliver learning content in a condensed, self-served, and organized format. Beyond its immediate value, the application has become a critical building block for the team's current initiative: an in-product experience where environments are managed externally. Looking ahead, On-Demand Learning will still serve as the delivery hub for courses and lab guides that enable hands-on exercises in these environments, with ongoing UI refinements to align with this evolving model.
        </div>
      </section>
      <Footer/>
    </>
  );
}

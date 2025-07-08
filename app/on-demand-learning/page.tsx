'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import Hero from "../../public/images/ODL/hero-image.png";
import p00 from "../../public/images/ODL/p00.png";
import p01 from "../../public/images/ODL/p01.png";
import p02 from "../../public/images/ODL/p02.png";
import p03 from "../../public/images/ODL/p03.png";
import p11 from "../../public/images/ODL/ordered_modules2.png";
import p12 from "../../public/images/ODL/ordered_modules.png";
import p22 from "../../public/images/ODL/p21.png";
import p21 from "../../public/images/ODL/p22.png";
import p31 from "../../public/images/ODL/p31.png";
import p32 from "../../public/images/ODL/p32.png";
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
        {/*Hero section*/}
        <div id="center-text">
          <h2>On-Demand Learning</h2>
          <h4>A hands-on learning application for Adobe Experience Platform.</h4>
          <br />
          <img className="hero-image" key="hero" src={Hero.src} alt="hero"/>
        </div>
        {/*Project overview*/}
        <div className="section">
          <div className="two-column-container">
            <div className="column">
              <h6>Overview</h6>
              Adobe Experience Platform customers and partners are trained through the
              Developer Enablement Program, which involves deploying learning content across multiple sandboxes
              and conducting in-person sessions to facilitate the training.
              <br />
              <br/>
              On-Demand Learning provides this training in a virtual and scalable manner. Equipped with their own
              learning environment (an Experience Platform sandbox), customers can go through hands-on exercises and lectures
              at their own pace.
              <h6>Goals</h6>
              <ul>
                <li>
                  Provide Experience Platform training from the Developer Enablement Program in a virtual and scalable manner to
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
              UX Designer and Developer | Wireframes, Prototyping, UI/UX Research, Front-End Development and API Optimization
              <h6>Scope</h6>
              August 2024 - Current
              <h6>Tools</h6>
              React, TypeScript, React Spectrum (React implementation of Adobe’s design system), Unified Shell (Adobe’s UI framework for internal apps),
              HTML/CSS
            </div>
          </div>
        </div>
        <br />
        <br />
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
          Since Adobe Digital University is built on Adobe Learning Manager APIs, we decided to use Adobe
          Learning Manager
          as the basis for both our back-end and front-end design, integrating learning environments as the add-on.
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
        </div>
        {/*Design process*/}
        <br/>
        <br/>
        <div className="section">
          <h4>Design Process</h4>
          <div id="section-image">
            <img key="user-flow" src={UserFlow.src} alt="user-flow"/>
            <br />
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
        <br />
        <br />
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
                <h6>Solution</h6>
                <h6>Thought Process</h6>
              </td>
              <td>
                <img src={p00.src} alt="Before"/>
              </td>
              <td>
                <img src={p01.src} alt="After"/>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Problem</h6>
                <h6>Solution</h6>
                <h6>Thought Process</h6>
              </td>
              <td>
                <img src={p02.src} alt="Before"/>
              </td>
              <td>
                <img src={p03.src} alt="After"/>
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
                <h6>Solution</h6>
                <h6>Thought Process</h6>
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
                <h6>Solution</h6>
                <h6>Thought Process</h6>
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
                <h6>Solution</h6>
                <h6>Thought Process</h6>
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
          <h4>Future Improvements</h4>
          <ul>
            <li>Change My Learning to Bookmarked</li>
          </ul>
        </div>
      </section>
      <Footer/>
    </>
  );
}

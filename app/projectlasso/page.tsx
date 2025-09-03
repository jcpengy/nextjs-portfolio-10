'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import workstreams from "../../public/images/ProjectLasso/workstreams.jpg";
import userflow1 from "../../public/images/ProjectLasso/userflow/flow.jpg";
import userflow2 from "../../public/images/ProjectLasso/userflow/lucid.png";
const m1mocks = require.context('../../public/images/ProjectLasso/m1/mocks', false);
const m1mocksList = m1mocks.keys().map(image => m1mocks(image));
import adminRequirements from "../../public/images/ProjectLasso/m1/requirements/1.png";
const m1ui = require.context('../../public/images/ProjectLasso/m1/UI', false);
const m1uiList = m1ui.keys().map(image => m1ui(image));
import Hero from "../../public/images/ProjectLasso/m1/UI/1.png";
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
          <h2>Project Lasso</h2>
          <h4>A productized, self-paced implementation of the Developer Enablement Program.</h4>
          <br/>
          <img className="hero-image" key="hero" src={Hero.src} alt="hero"/>
        </div>
        <br/>
        {/*Project overview*/}
        <div className="section">
          <h6>Overview</h6>
          Adobe Experience Platform customers and partners are trained through the Developer Enablement Program,
          which involves deploying learning content across multiple sandboxes and conducting in-person training.
          <br/>
          <br/>
          Project Lasso aims to provide this training in a virtual and scalable manner. Equipped with their own
          learning environment (an Experience Platform sandbox), customers are encouraged to explore the product and
          complete self-paced enablement in a no-risk environment with step-by-step guidance, templates, and
          practice files to accelerate action and learning.
          <div className="two-column-container">
            <div className="column">
              <h6>Goals</h6>
              <ul>
                <li>
                  Provide a scalable, digitized DEP offering with consistent customer experience (impact/feedback,
                  rating, NPS) in lieu of in-person sessions
                </li>
                <li>
                  Provide training to technical roles (developer, architect)
                </li>
              </ul>
              <i>Success metrics</i>
              <ul>
                <li>
                  150 users granted access to learning environments per quarter
                </li>
                <li>
                  Percentage of lab environments requested and not used is less than 20%
                </li>
              </ul>
            </div>
            <div className="column">
              <h6>Scope</h6>
              June 2025 - Current
              <h6>Tools</h6>
              React, TypeScript, React Spectrum (React implementation of Adobe’s design system), Unified Shell (Adobe’s
              UI framework for internal apps),
              HTML/CSS
            </div>
          </div>
          <h6>Role</h6>
          UX Designer and Developer | Wireframes, Prototyping, UI/UX Research, Front-End Development and API
          Optimization
          <br/>
          <br/>
          I served as the sole UX designer and developer on a 13-person team that included Product Management,
          Engineering, Technical Marketing, Customer Onboarding, and other Sponsors. The Customer Engineering team
          primarily managed the ‘Environment & Data’ section, which involved developing the environment
          creation/deployment and learner experience.
          <br/>
          <br/>
          <div id="section-image">
            <img key="workstreams" src={workstreams.src} alt="workstreams"/>
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
                <li>Admin - manages sandbox for a learner</li>
                <li>Learner - AEP customers with a technical background (developers, architects, etc.)</li>
                <li>Author</li>
                <ul>
                  <li>Course content - creates lecture materials</li>
                  <li>Lab guide - creates hands-on exercise that will be completed in the learner's environment</li>
                  <li>Lab pack - creates assets that will be deployed to the learning environment</li>
                </ul>
              </ul>
              <h6>Past Bootcamps</h6>
              I watched recordings of past bootcamps to better understand how attendees learned content, asked for help, and got feedback.
            </div>
            <div className="column">
              <h6>Learning Gaps/Questions</h6>
              <ul>
                <li>How do we track if a learner has completed the lab guide?</li>
                <li>How do we know if a learner completed the steps of the lab guide correctly?</li>
              </ul>
              <h6>Technology Stack</h6>
              <ul>
                <li>AEP - User-specific sandbox in a Learner IMS org</li>
                <li>Adobe Learning Manager (ALM) - used to house and serve course content/learner progress</li>
                <li>Unified Shell - Experience Platform's UI framework</li>
              </ul>
            </div>
          </div>
          <h6>Competitive Analysis</h6>
          We explored similar learning experiences within Adobe such as Adobe Learning Manager, Experience League, and
          Adobe
          Digital University. Project Lasso is differentiated from these other offerings as it provides hands-on
          learning environments that are unique to each individual developer/architect.
          <br/>
          <br/>
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
          <h4>Design Process: Version 1</h4>
          <br />
          <br />
          <div id="section-image">
            <img key="user-flow" src={userflow1.src} alt="user-flow"/>
            <br/>
            <i>General user flow from Product</i>
          </div>
          <br />
          <br />
          <div id="section-image">
            <img key="user-flow" src={userflow2.src} alt="user-flow"/>
            <br/>
            <i>Detailed user flow from user registration to environment de-activation</i>
          </div>
          <br />
          <br />
          <div id="section-image">
            <img key="adminRequirements" src={adminRequirements.src} alt="adminRequirements"/>
            <br/>
            <i>Admin UI requirements for M1</i>
          </div>
          <br/>
          <div id="image-gallery-with-text-overlay">
            {m1mocksList.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
          <div id="center-text">
            <i>Based on the Admin UI requirements for the first milestone, I drew out a rough wireframe using AI.</i>
          </div>
          </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Implementation: Version 1</h4>
          <br />
          I re-purposed an existing application we had already deployed in Unified Shell, which helped save time given
          the tight timeline and uncertainty around future requirements. With only two weeks for planning and
          development, I jumped straight into building the UI skeleton for the Admin dashboard using React Spectrum
          components. Throughout the process, I collaborated closely with the backend team to define the API contracts
          and data models needed to support the environment fields.
          <br />
          <br />
          <div id="image-gallery-with-text-overlay">
            {m1uiList.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
      </section>
      <Footer/>
    </>
  );
}

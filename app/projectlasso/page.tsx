'use client';
import DesktopNavbar from "app/components/desktopNavbar";
import Footer from "app/components/footer";
import workstreams from "../../public/images/ProjectLasso/workstreams.jpg";
import userflow2 from "../../public/images/ProjectLasso/userflow/lucid.png";
const m1mocks = require.context('../../public/images/ProjectLasso/m1/mocks', false);
const m1mocksList = m1mocks.keys().map(image => m1mocks(image));
const m2mocks1 = require.context('../../public/images/ProjectLasso/m2/mocks1', false);
const m2mocks1List = m2mocks1.keys().map(image => m2mocks1(image));
const odlmocks = require.context('../../public/images/ProjectLasso/m1/odlmocks', false);
const odlmocksList = odlmocks.keys().map(image => odlmocks(image));
import adminRequirements from "../../public/images/ProjectLasso/m1/requirements/1.png";
const m1ui = require.context('../../public/images/ProjectLasso/m1/UI', false);
const m1uiList = m1ui.keys().map(image => m1ui(image));
const m1admin2 = require.context('../../public/images/ProjectLasso/m1/admindashboard-2', false);
const m1admin2List = m1admin2.keys().map(image => m1admin2(image));
const odlui = require.context('../../public/images/ProjectLasso/m1/odl', false);
const odluiList = odlui.keys().map(image => odlui(image));
import Hero from "../../public/images/ProjectLasso/m1/odl/a.png";
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
          <h2>On-Demand Learning 2.0</h2>
          <h4>Productized, self-paced learning for Adobe Experience Platform.</h4>
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
          On-Demand Learning (2.0) provides users a centralized learning hub powered by Adobe Learning Manager (ALM).
          Through this hub, users can access structured coursework alongside a pre-configured Personal Learning Environment (PLE), allowing them to safely experiment and learn core AEP concepts.
          <div className="two-column-container">
            <div className="column">
              <h6>Goals</h6>
              <ul>
                <li>
                  Deliver a scalable experience that matches (and eventually exceeds) the impact of the expert-led
                  bootcamps
                </li>
                <li>
                  Onboard users faster and more confidently
                </li>
                <li>
                  Reduce dependency on high-touch, resource-intensive learning formats
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
              I watched recordings of past bootcamps to better understand how attendees learned content, asked for help,
              and got feedback.
            </div>
            <div className="column">
              <h6>Learning Gaps/Questions</h6>
              <ul>
                <li>How do we track if a learner has completed the lab guide?</li>
                <li>How do we know if a learner completed the steps of the lab guide correctly?</li>
                <li>How do we structure the learning content for the bootcamp?</li>
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
          {/*<br />*/}
          {/*<br />*/}
          {/*<div id="section-image">*/}
          {/*  <img key="user-flow" src={userflow1.src} alt="user-flow"/>*/}
          {/*  <br/>*/}
          {/*  <i>General user flow from Product</i>*/}
          {/*</div>*/}
          <br/>
          <br/>
          <div id="section-image">
            <img key="user-flow" src={userflow2.src} alt="user-flow"/>
            <br/>
            <i>Detailed user flow from user registration to environment de-activation</i>
          </div>
          <br/>
          <br/>
          <div id="center-text">
            <u>For milestone 1, the focus was to design and build an Admin Dashboard for the Product team to create and
              extend sandboxes (packaged with AEP Foundations objects) across
              two Learner IMS orgs. Lab guides and lecture videos would be hosted on a previous app we built called
              On-Demand Learning, which will be modified to exclude self-service environment requests.</u>
          </div>
          <br/>
          <br/>
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
            <i>Wireframe for the Admin UI</i>
          </div>
          <br/>
          <div id="image-gallery-with-text-overlay">
            {odlmocksList.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
          <div id="center-text">
            <i>Mocks for the revised On-Demand Learning experience</i>
          </div>
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Implementation</h4>
          <br/>
          <h4>Version 1: Admin Dashboard</h4>
          <br/>
          I saved time and re-purposed an existing application in Unified Shell, which is built using React Spectrum and
          Quarry components. <b>The biggest change between Version 1 and Version 2 was the creation of new sandboxes via
          a csv file
          instead of an individual request form. This would allow bulk sandbox requests.</b>
          <br/>
          <br/>
          <div id="image-gallery-with-text-overlay">
            {m1uiList.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
          <br/>
          <div id="center-text">
            <i>Admin Dashboard Version 1 implementation</i>
          </div>
          <br/>
          <br/>
          <div id="image-gallery-with-text-overlay">
            {m1admin2List.map((image, index) => (
              <div className="image-1 item">
                <img key={index} src={image.default.src} alt={`image-${index}`}/>
                <p>Image Caption</p>
              </div>
            ))}
          </div>
          <br/>
          <div id="center-text">
            <i>Admin Dashboard Version 2 implementation</i>
          </div>
          <br/>
          <h4>Version 1: On-Demand Learning 2.0</h4>
          <br/>
          The beta features the Adobe Experience Platform Foundations curriculum used in the DEP bootcamps—developed &
          delivered by Customer Engineering and Enterprise Architecture—in an on-demand format. It includes 25+ lectures and 12+ lab guides.
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
            {odluiList.map((image, index) => (
              <SwiperSlide>
                <img key={index} src={image.default.src} alt={`Image ${index}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="center-text">
            <i>On-Demand Learning revised implementation</i>
          </div>
        </div>
        <br />
        <br />
        <div className="section">
          <h4>Impact</h4>
          <br/>
          We’ve already seen strong demand: 200+ current AEP users have applied to participate in the beta.
          Feedback and team discussions have focused on the need to define a stronger support workflow for handling incoming JIRA tickets.
          From a group of ten internal testers, we've received positive feedback on the seamless creation of a personal sandbox and the intuitive learning platform.
          They also noted a general desire for shorter course content.
        </div>
        <br/>
        <br/>
        <div className="section">
          <h4>Improvements</h4>
          <br/>
          The team is working to automate the operational aspects of the program and define long-term resourcing requirements to support broad, enterprise-scale rollout. In addition, we plan to expand ODL content beyond data foundations to include marketer-focused learning paths. Below is a summary of problems we'd like to solve:
          <br />
          <br />
          <ul>
            Authoring workflow
            <li>Authors are currently using an external document editing software to write the lab guides. Each time an
              edit is made, the document
              must be re-exported and imported as a PDF into the course in ALM.
            </li>
            <li>Authors are required to purchase a license to use the software.</li>
          </ul>
          <ul>
            Learner workflow
            <li>Learners must switch between the On-Demand Learning UI and their sandbox in Adobe Experience Platform as
              they're going through the lab guide.
            </li>
            <li>Learners cannot check if they've completed a lab guide correctly.
            </li>
          </ul>
          <ul>
            Admin
            <li>Admin cannot track the progress of a learner going through the lab guide.
            </li>
            <li>Currently, there is no workflow for addressing and notifying users of submitted feedback/issues.
            </li>
            <li>How do we ensure users set up Postman correctly for any lab guide that requires making API calls?
            </li>
          </ul>
        </div>
        <br/>
        <br/>
      </section>
      <Footer/>
    </>
  );
}

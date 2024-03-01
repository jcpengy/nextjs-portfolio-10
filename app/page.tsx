'use client';
import {initLightboxJS, SlideshowLightbox} from "lightbox.js-react";
import React, {useEffect} from "react";

class Page extends React.Component<any, any>  {
    render() {
        // useEffect(() => {
        //     initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
        // });
        return (
            <section id="portfolio-page">
                <div className="md:grid md:grid-cols-2">
                    <img
            id='profile-image'
            key='website-header-pic'
            src='https://i.ibb.co/HV5xtqt/Cam-Scanner-02-28-2024-17-46-1.jpg'
            alt='Jess Peng'
           />
                    {/* <div id="profile-image">
                        <img id="circular--square"
                             key='profile-picture'
                             src='https://i.ibb.co/7pHw7wY/IMG-9588.jpg'
                             alt='Profile picture'
                        />
                    </div> */}
                    <div>
                        <h2>Hi, I'm Jess.</h2><br/>
                        <p>
                            I'm an SF-based Front-End Engineer at Adobe. I'm also an amateur cartoonist (see my daily doodles on <a className="link" target="_blank" href="https://www.instagram.com/officialceojess/">@officialceojess</a>) 
                            and freelance graphic designer.<br/><br/>For collaborations or commissions, please email me at pengjess2@gmail.com.<br/><br/>
                            <a className="link" target="_blank" href="https://i.ibb.co/WkBrpdF/Jessica-Peng-Resume.jpg"><u>Resume</u></a> / <a
                            className="link" target="_blank" href="mailto:pengjess2@gmail.com"><u>Email</u></a> / <a
                            className="link" target="_blank" href="https://www.linkedin.com/in/jess-peng/"><u>LinkedIn</u></a><br/><br/>
                            <span id="dots">.........</span>
                        </p>
                    </div>
                </div><br/><br/>
                <h4>My Background</h4>
                <p>
                    At the University of Pennsylvania, I majored in <a className="link" target="_blank" href="http://cg.cis.upenn.edu/dmd.html"><u>Digital
                    Media Design</u></a> and minored in Fine Arts with a focus in 3D modeling.<br/><br/>
                    <img
                        key={'3dmodel'}
                        className='w-full rounded'
                        src={'https://i.ibb.co/nmXmXp3/IMG-2655-Original.jpg'}
                        alt={'3dmodel'}
                    />
                    <i>3D model of my college apartment</i><br/><br/>
                    As a Front-End Developer at Adobe, I design and build internal applications that bridge product gaps within Experience Cloud. While my
                    current focus is in development, I'm excited to pursue design-focused projects in the future.<br/><br/>
                    Right now, I live in San Francisco with my baby Yorkie Butters (after the South Park character) and dwarf hamster Abrahammy Lincoln (Hammy for short). My hobbies include drawing pet portraits, dog grooming, 
                    playing tennis, scrolling through Yorkie Reddit threads, and watching classy reality TV with some chamomile tea.<br/><br/>
                    <img className='w-full rounded'
                     key='pets'
                     src='https://i.ibb.co/GCg3Qbt/784bce54-3d78-4161-8d7b-c2c8cc1630f3.jpg'
                     alt='pets'></img>
                {/* <div className="md:grid md:grid-cols-2">
                <div>
                <h3>My Pets</h3>
                <p>I have a Yorkie named Butters (after the South Park character) and a Roborovski hamster named Abrahammy Lincoln (Hammy for short).</p><br/>
                
                </div>
                <div>
                    <h3>My Hobbies</h3>
                    <ul>
                        <li>Drawing pet portraits</li>
                        <li>Word-search puzzles</li>
                        <li>Dog grooming</li>
                        <li>Tennis</li>
                        <li>Yorkie Reddit threads</li>
                        <li>Reality TV</li>
                    </ul>
                </div>
            </div> */}
                <br/>
                <br/>
                <p>Thanks for stopping by!</p><br/>
                .........
                <br/>
                <i>© Jessica Peng 2023</i><br/><br/>
                </p>
            </section>
        )
    }
}

export default Page;

// "use client"
// import React, {Component, useEffect} from "react";
// import body from '../app/assets/body.png';
// import mouth from '../app/assets/mouth.png';
// import {initLightboxJS, SlideshowLightbox} from "lightbox.js-react";
//
// const SplitText = ({copy, role}) => {
//     return (
//         // add animation to each character of text
//         <span aria-label={copy} role={role}>
//                 {copy.split("").map(function (char, index) {
//                     let style = {"animation-delay": (index / 20) + "s"}
//                     return <span
//                         aria-hidden="true"
//                         key={index}>
//                         {char}
//                         </span>;
//                 })}
//             </span>
//     )
// }
//
// class Page extends React.Component<any, any>  {
//
//     constructor(props) {
//         super(props);
//
//         // on page load
//         this.state = {
//             droidX: 0,
//             mouseX: 0,
//             toTheRight: true,
//             speed: 1,
//             accelMod: 2
//         }
//     }
//
//     // Keep track of the mouse position.
//     handleMouseMove(event) {
//         this.setState({
//             mouseX: event.pageX
//         })
//     }
//
//     movement() {
//         let {droidX, mouseX, speed, accelMod} = this.state;
//
//         if (Math.abs(Math.round(droidX) - mouseX) !== 1) {
//
//             let distance = mouseX - droidX;
//             let acceleration = Math.abs(distance * accelMod) / 150;
//
//             // Move to the right
//             if (droidX < mouseX) {
//                 this.setState({
//                     droidX: droidX + (speed * acceleration),
//                     toTheRight: true
//                 });
//             }
//
//             // Move to the left
//             else {
//                 this.setState({
//                     droidX: droidX - (speed * acceleration),
//                     toTheRight: false
//                 });
//             }
//         }
//     }
//
//     // Get some initial movement on first mount.
//     componentWillMount() {
//         this.setState({
//             mouseX: 300
//         });
//     }
//
//     // Set up the mouse event listener and fire up the movement function.
//     componentDidMount() {
//         document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
//         setInterval(this.movement.bind(this), 1);
//     }
//
//     // Clean up.
//     componentWillUnmount() {
//         document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
//     }
//
//     render() {
//         let {speed, accelMod, droidX, mouseX, toTheRight} = this.state;
//         useEffect(() => {
//             initLightboxJS("9F1C-4A63-970C-2B0D", "individual");
//         });
//         return (
//             {/*<div id="homepage">*/}
//                 {/*title*/}
//                 {/*<h1 className="home"><SplitText copy="Jess Peng" role="heading"/></h1><br/>*/}
//                 {/*<div id="home-subtitle">Graphic Designer and Developer</div>*/}
//                 {/*cursor animation*/}
//                 <div id="cursor">
//                     <img src="https://i.ibb.co/bgjpvXF/cursor.png" alt="cursor" width="50px" height="auto"/>
//                 </div>
//                 {/*lil jess*/}
//                 <div className="liljess" style={{WebkitTransform: `translateX(${droidX}px)`}}>
//                     <div className="body"
//                          style={{WebkitTransform: `translateX(${(mouseX - droidX) / 35}px) rotateZ(${(mouseX - droidX) / 75}deg)`}}>
//                         <div className={'eyes ' + (toTheRight ? 'right' : '')}>
//                             <div className="eye one"></div>
//                             <div className="eye two"></div>
//                             <div className="mouth">
//                                 <img className="img-mouth" src="https://i.ibb.co/HN5QFD5/mouth.png" alt="mouth"/>
//                             </div>
//                         </div>
//                         <div className={'pupils ' + (toTheRight ? 'right' : '')}>
//                             <div className="pupil one"></div>
//                             <div className="pupil two"></div>
//                         </div>
//
//                         <div className={'eyebrows ' + (toTheRight ? 'right' : '')}>
//                             <div className="eyebrow one"></div>
//                             <div className="eyebrow two"></div>
//                         </div>
//                     </div>
//                     <div className="scooter">
//                         <img className="img-scooter" src="https://i.ibb.co/9GHh4vy/scooter.png" alt="scooter"/>
//                     </div>
//                     <div className="ball-left" style={{WebkitTransform: `rotateZ(${droidX}deg)`}}>
//                         {/*<div className="ring one"></div>*/}
//                     </div>
//                     <div className="ball-right" style={{WebkitTransform: `rotateZ(${droidX}deg)`}}>
//                         {/*<div className="ring one"></div>*/}
//                     </div>
//                 </div>
//                 <div className="instructions">
//                     <p>tap anywhere.</p>
//                 </div>
//             {/*</div>*/}
//         )
//     }
// }
//
// export default Page;

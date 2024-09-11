'use client';
import React from "react";
import SocialMediaLinks from "app/components/socialMediaLinks";
import Ceojess from "../../public/images/ceojess.svg";
import Wave1 from "../../public/images/wave1.png";
import Austin from "../../public/images/austin.gif";
import mouth from "../../app/assets/mouth.png";
import body from "../../app/assets/body.png";
import scooter from "../../app/assets/scooter.png";
import ceojess from "../../public/images/ceojess-scooter.svg";
import close from "../../public/images/close.svg";

import { useState, useEffect } from "react";
import { SetOperationNode } from "kysely";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";

// const SplitText = ({ copy, role }) => {
//     return (
//         // add animation to each character of text
//         <span aria-label={copy} role={role}>
//             {copy.split("").map(function (char, index) {
//                 let style = { "animation-delay": (index / 20) + "s" }
//                 return <span
//                     aria-hidden="true"
//                     key={index}>
//                     {/* // style={style}> */}
//                     {char}
//                 </span>;
//             })}
//         </span>
//     )
// }

class Header extends React.Component<any, any>  {

    constructor(props) {
        super(props);

        // on page load
        this.state = {
            droidX: 0,
            mouseX: 0,
            toTheRight: true,
            speed: 1,
            accelMod: 2,
            openInstructions: true
        }
    }

    // Keep track of the mouse position.
    handleMouseMove(event) {
        this.setState({
            mouseX: event.pageX
        })
    }

    movement() {
        let { droidX, mouseX, speed, accelMod } = this.state;
        const rightBound = document.getElementById("header")?.getBoundingClientRect().right;

        if (Math.abs(Math.round(droidX) - mouseX) !== 1) {

            let distance = mouseX - droidX;
            let acceleration = Math.abs(distance * accelMod) / 150;

            // Move to the right
            if (droidX < mouseX) {
                this.setState({
                    droidX: droidX + (speed * acceleration),
                    toTheRight: true
                });
            }

            // Move to the left
            else {
                this.setState({
                    droidX: droidX - (speed * acceleration),
                    toTheRight: false
                });
            }
        }
    }

    // Get some initial movement on first mount.
    componentWillMount() {
        this.setState({
            mouseX: 300
        });
    }

    // Set up the mouse event listener and fire up the movement function.
    componentDidMount() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        setInterval(this.movement.bind(this), 1);
    }

    // Clean up.
    componentWillUnmount() {
        document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    render() {
        let { speed, accelMod, droidX, mouseX, toTheRight } = this.state;

        return (
            <section id="header">
                {
                    this.state.openInstructions &&
                    <div id="instructions-container">
                        <div id="instructions">
                            <div id="close-container">
                                <button id="close" onClick={() => this.setState({ openInstructions: false })}>
                                    <img className="close-link" src={close.src} alt="close" />
                                </button>
                            </div>
                            <div id="instructions-desktop">
                                Move mouse anywhere to move
                                <img id="ceojess-scooter" src={ceojess.src} />
                            </div>
                            <div id="instructions-mobile">
                                Press anywhere to move
                                <img id="ceojess-scooter" src={ceojess.src} />
                            </div>
                        </div>
                    </div>
                }
                <div id="header-front-content">
                    <div id="section-description">
                        <h2>Hello, I'm Jess.</h2>
                        <div id="section-description">
                            I'm a senior front-end engineer at Adobe and a design generalist with a background in UI/UX design and development, graphic design, and fine art. <br /><u><a href="/about">Full bio</a></u> / <u><a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:d95711aa-c25b-4d6f-a5e3-7a633f4ea593" target="_blank">Resume</a></u>
                        </div>
                    </div>
                </div>
                <div id="ceojess-container">
                    <div className="liljess" style={{ WebkitTransform: `translateX(${droidX}px)` }}>
                        <div className="body"
                            style={{ WebkitTransform: `translateX(${(mouseX - droidX) / 35}px) rotateZ(${(mouseX - droidX) / 75}deg)` }}>
                            <div className={'eyes ' + (toTheRight ? 'right' : '')}>
                                <div className="eye one"></div>
                                <div className="eye two"></div>
                                <div className="mouth">
                                    <img className="img-mouth" src={mouth.src} alt="mouth" />
                                </div>
                            </div>
                            <div className={'pupils ' + (toTheRight ? 'right' : '')}>
                                <div className="pupil one"></div>
                                <div className="pupil two"></div>
                            </div>

                            <div className={'eyebrows ' + (toTheRight ? 'right' : '')}>
                                <div className="eyebrow one"></div>
                                <div className="eyebrow two"></div>
                            </div>
                        </div>
                        <div className="scooter">
                            <img className="img-scooter" src={scooter.src} alt="scooter" />
                        </div>
                        <div className="ball-left" style={{ WebkitTransform: `rotateZ(${droidX}deg)` }}>
                            <div className="ring one"></div>
                        </div>
                        <div className="ball-right" style={{ WebkitTransform: `rotateZ(${droidX}deg)` }}>
                            <div className="ring one"></div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Header;

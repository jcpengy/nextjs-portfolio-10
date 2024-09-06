'use client';
import SocialMediaLinks from "app/components/socialMediaLinks";
import Ceojess from "../../public/images/ceojess.png";
import Wave1 from "../../public/images/wave1.png";
import Austin from "../../public/images/austin.gif";

import { useState, useEffect } from "react";

// site header and background
export default function Header() {

    // make droid follow mouse movement 
    useEffect(() => {
        const move = document.getElementById("move");
        const headerDiv = document.getElementById("header");
        // let rect = headerDiv.getBoundingClientRect();
        // console.log(JSON.stringify(rect));
        document.body.onpointermove = event => {
            const { clientX } = event;
            // only move if mouse event is in header block
            // if (clientY < rect.bottom) {
            move?.animate({
                left: `${clientX}px`,

            }, { duration: 1000, fill: "forwards" })
            // }

        }
    }, []);

    const SplitText = ({ copy, role }) => {
        return (
            // add animation to each character of text
            <span aria-label={copy} role={role}>
                {copy.split("").map(function (char, index) {
                    let style = { "animation-delay": (index / 20) + "s" }
                    return <span
                        aria-hidden="true"
                        key={index}>
                        {/* // style={style}> */}
                        {char}
                    </span>;
                })}
            </span>
        )
    }
    return (
        <section id="header">
            <div id="waves">
            <img id="austin" src={Austin.src}/>
            <img id="bottom-wave" src={Wave1.src}/>
            </div>
            <div id="header-front-content">
            <img id="ceo-jess" key="ceo-jess" src={Ceojess.src} alt="ceo-jess" />
            <div id="Jessica-Peng-div">
                <h1>Jessica Peng</h1>
                <h3>Front-End Engineer, Designer, and Artist</h3>
            </div>
            </div>
           
           
            {/* <div id="header-text">
                <h1 id="Jessica Peng"><SplitText copy="Jessica Peng" role="heading" /></h1>
                <h3 id="website-subheader">Front-End Engineer, Visual Designer, and Artist</h3>
                <SocialMediaLinks />
            </div> */}
            {/* <img className="" src={Cloud1.src} width="300px" height="200px" /> */}
        </section>
    );
}

'use client';
import SocialMediaLinks from "app/components/socialMediaLinks";
import Cloud1 from "../../public/images/cloud1.png";
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
            const { clientX, clientY } = event;
            // only move if mouse event is in header block
            // if (clientY < rect.bottom) {
                move?.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`

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
            <div id="move"></div>
            <div id="header-text">
                <h1 id="Jessica Peng"><SplitText copy="Jessica Peng" role="heading" /></h1>
                <SocialMediaLinks />
            </div>
            {/* <img className="" src={Cloud1.src} width="300px" height="200px" /> */}
        </section>
    );
}

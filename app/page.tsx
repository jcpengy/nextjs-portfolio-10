"use client"
import React, {Component} from "react";
import body from '../app/assets/body.png';
import mouth from '../app/assets/mouth.png';

const SplitText = ({copy, role}) => {
    return (
        // add animation to each character of text
        <span aria-label={copy} role={role}>
                {copy.split("").map(function (char, index) {
                    let style = {"animation-delay": (index / 20) + "s"}
                    return <span
                        aria-hidden="true"
                        key={index}>
                        {char}
                        </span>;
                })}
            </span>
    )
}

class Page extends React.Component<any, any>  {

    constructor(props) {
        super(props);

        // on page load
        this.state = {
            droidX: 0,
            mouseX: 0,
            toTheRight: true,
            speed: 1,
            accelMod: 2
        }
    }

    // Keep track of the mouse position.
    handleMouseMove(event) {
        this.setState({
            mouseX: event.pageX
        })
    }

    movement() {
        let {droidX, mouseX, speed, accelMod} = this.state;

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
        let {speed, accelMod, droidX, mouseX, toTheRight} = this.state;

        return (
            <div id="homepage">
                {/*title*/}
                <h1 className="home"><SplitText copy="Jess Peng" role="heading"/></h1><br/>
                <div id="home-subtitle">Graphic Designer and Developer</div>
                {/*cursor animation*/}
                <div id="cursor">
                    <img src="https://i.ibb.co/bgjpvXF/cursor.png" alt="cursor" width="50px" height="auto"/>
                </div>
                {/*lil jess*/}
                <div className="liljess" style={{WebkitTransform: `translateX(${droidX}px)`}}>
                    <div className="body"
                         style={{WebkitTransform: `translateX(${(mouseX - droidX) / 35}px) rotateZ(${(mouseX - droidX) / 75}deg)`}}>
                        <div className={'eyes ' + (toTheRight ? 'right' : '')}>
                            <div className="eye one"></div>
                            <div className="eye two"></div>
                            <div className="mouth">
                                <img className="img-mouth" src="https://i.ibb.co/HN5QFD5/mouth.png" alt="mouth"/>
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
                        <img className="img-scooter" src="https://i.ibb.co/9GHh4vy/scooter.png" alt="scooter"/>
                    </div>
                    <div className="ball-left" style={{WebkitTransform: `rotateZ(${droidX}deg)`}}>
                        {/*<div className="ring one"></div>*/}
                    </div>
                    <div className="ball-right" style={{WebkitTransform: `rotateZ(${droidX}deg)`}}>
                        {/*<div className="ring one"></div>*/}
                    </div>
                </div>
                <div className="instructions">
                    <p>tap anywhere.</p>
                </div>
            </div>
        )
    }
}

export default Page;

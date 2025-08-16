'use client';
import React from "react";
import mouth from "../../app/assets/mouth.png";
import scooter from "../../app/assets/scooter.png";

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
              <div id="header-front-content">
                  <h2>Hi, I'm Jess.</h2>
                  <div id="header-subtitle"><i>Leading design and front-end dev @Adobe</i></div>
                  <br />
                  <div id="header-bio">
                      I’m a designer and developer based in San Francisco. I'm passionate about visual storytelling
                      and creating impactful, user-centered solutions that bridge design and engineering. View
                      my <u><a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:2af92903-92c3-4b0b-9ed5-e434d3af0dae"
                                 target="_blank">resume</a></u> to learn more.
                  </div>
              </div>
              <div id="ceojess-container">
                  <div className="liljess" style={{WebkitTransform: `translateX(${droidX}px)`}}>
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
                          {/*<div className="ring one"></div>*/}
                      </div>
                      <div className="ball-right" style={{ WebkitTransform: `rotateZ(${droidX}deg)` }}>
                          {/*<div className="ring one"></div>*/}
                      </div>
                  </div>
              </div>
          </section>
        );
    }
}

export default Header;

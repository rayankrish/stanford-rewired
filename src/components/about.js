import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import "../styles/about.scss"

const About = () => {
  return (
    <div id="about-graphics">
      {/* <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 /> */}
    </div>
  )
}


function draw(id, elem, options={}) {
  return (
    <div id={id} className="svgContainer">
      <ScrollAnimation
        animateIn="draw"
        initiallyVisible={true}
        animateOnce={true}
        duration={options.duration || 2.5}
        delay={options.delay || 0}
      >
        {elem}
      </ScrollAnimation>
    </div>
  )
}

export default About

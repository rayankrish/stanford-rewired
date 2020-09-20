import React from "react";
import ScrollAnimation from "react-animate-on-scroll"

export function fadeInUp(elem: JSX.Element, delay=0, offset=200): JSX.Element {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      duration={0.5}
      animateOnce={true}
      offset={offset}
      delay={delay}
    >
      {elem}
    </ScrollAnimation>
  )
}

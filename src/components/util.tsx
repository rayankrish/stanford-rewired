import React from "react";
import ScrollAnimation from "react-animate-on-scroll"

export function fadeInUp(elem: JSX.Element, key=undefined, delay=0, offset=200): JSX.Element {
  return (
    <ScrollAnimation
      key={key}
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

// This function does a best-attempt to ellipsis the text content with an element,
// given a heuristic of how many characters of the expected font-style can fit into one line.
export function ellipsis(el, charInOneLine=40, lineHeight=30) {
  const charLines =  Math.floor((el.offsetHeight) / lineHeight)
  const charCount = charInOneLine * charLines;

  if (el.innerHTML.length > charCount) {
    el.innerHTML = el.innerHTML.slice(0, charCount).trim() + "..."
  }
}

export function stripHTML(htmlString: string): string {
  return htmlString.replace(/(&nbsp;|<([^>]+)>)/ig, "") 
}
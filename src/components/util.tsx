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
// 
// NOTE: THIS FUNCTION IS DESTRUCTIVE and will alter the element directly.
export function ellipsis(el, charInOneLine=46, lineHeight=30) {
  if (typeof window !== 'undefined' && window.innerWidth < 850) { // We don't ellipsize on mobile
    return
  }

  const charLines =  Math.floor(el.clientHeight / lineHeight)
  const charCount = charInOneLine * charLines;
  const originalText = el.innerHTML

  if (el.innerHTML.length > charCount) {
    el.innerHTML = el.innerHTML.trim().slice(0, charCount - 3).trim()
  }

  // Incremental cutting, if still overflowing.
  while (el.scrollHeight > (el.clientHeight + 4)) {
    el.innerHTML = el.innerHTML.slice(0, charCount - charInOneLine / 2).trim()
  }

  if (el.innerHTML.length != originalText.length && el.innerHTML.length) {
    el.innerHTML += "..."
  }
}

export function stripHTML(htmlString: string): string {
  return htmlString.replace(/(&nbsp;|<([^>]+)>)/ig, "") 
}
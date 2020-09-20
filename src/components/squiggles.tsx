import { number } from "prop-types";
import React, { useEffect } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import "../styles/squiggles.scss"

/**
 * This component will randomly generate squiggles for the entire height of the document.
 * We alternate between the left and right sides, and the cadence for squiggles appearing
 * is once per window-height.
 */
const Squiggles = (props: { dark?: boolean, offset?: number }) => {
  const [numSquiggles, setNumSquiggles] = React.useState(0);
  const [offset, setOffset] = React.useState(props.offset || 0)

  useEffect(() => {
    !props.offset && setOffset(window.innerHeight / 10)
    setNumSquiggles(Math.floor((document.body.clientHeight - offset) / window.innerHeight))
  }, [window.innerHeight, document.body.clientHeight])

  const leftCol = []
  const rightCol = []
  for (let i = 0; i < numSquiggles; i++) {
    const style = {
      top: `${i * window.innerHeight + offset}px`,
      stroke: props.dark ? "#434343" : "#FF4908",
    }

    const [sourceColumn, renderedColumn] = (i % 2) ? [RIGHT_COLUMN_SQUIGGLES, rightCol] : [LEFT_COLUMN_SQUIGGLES, leftCol]
    const randomElement = sourceColumn[Math.floor(Math.random() * sourceColumn.length)]
    renderedColumn.push(<div className='svgPositioner' key={i} style={style}>{randomElement()}</div>)
  }

  return (
    <div id="squiggle-container">
      <div id="left">{leftCol}</div>
      <div id="right">{rightCol}</div>
    </div>
  )
}

function draw(id, elem, options: { duration?: number, delay?: number } = {}) {
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


// SQUIGGLES BELOW
// 2x2 "x"
export function BoxX() {
  return (
    <svg className="svgContainer" id="boxX" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="61.8092" y1="44.839" x2="44.8386" y2="61.8095"/>
      <line x1="44.8385" y1="44.1317" x2="61.8091" y2="61.1023"/>
      <line x1="25.8092" y1="44.839" x2="8.83862" y2="61.8095"/>
      <line x1="8.83849" y1="44.1317" x2="25.8091" y2="61.1023"/>
      <line x1="61.8092" y1="8.83898" x2="44.8386" y2="25.8095"/>
      <line x1="44.8385" y1="8.13172" x2="61.8091" y2="25.1023"/>
      <line x1="25.8092" y1="8.83898" x2="8.83862" y2="25.8095"/>
      <line x1="8.83849" y1="8.13172" x2="25.8091" y2="25.1023"/>
    </svg>
  )
}

// Right column squiggles
function Squiggle1() {
  return <div>
    {draw("squiggle1_1",
      <svg className="svgContainer" width="224" height="858" viewBox="0 0 224 858" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.99998 2.99999L99.6995 3C112.016 3 122 12.9843 122 25.3005V25.3005C122 37.6167 112.016 47.601 99.6995 47.601L25.9974 47.601C13.2963 47.601 2.99998 57.8973 2.99998 70.5984V70.5984C2.99998 83.2995 13.2963 93.5958 25.9974 93.5958L100.425 93.5958C111.971 93.5958 121.331 102.956 121.331 114.503V114.503C121.331 126.049 111.971 135.409 100.425 135.409L28.088 135.409C14.2323 135.409 2.99998 146.642 2.99998 160.497V160.497C2.99998 174.353 14.2323 185.585 28.0881 185.585L99.7278 185.585C111.659 185.585 121.331 195.258 121.331 207.189V207.189C121.331 219.12 111.659 228.793 99.7278 228.793L24.6036 228.793C12.6722 228.793 2.99997 238.465 2.99997 250.396V250.396C2.99997 262.328 12.6723 272 24.6036 272L121.331 272"/>
      </svg>,
      { duration: 2.5 }
    )}
    {draw("squiggle1_2",
      <svg className="svgContainer" width="224" height="858" viewBox="0 0 224 858" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.99998 335L99.6995 335C112.016 335 122 344.984 122 357.301V357.301C122 369.617 112.016 379.601 99.6995 379.601L25.9974 379.601C13.2963 379.601 2.99998 389.897 2.99998 402.598V402.598C2.99998 415.3 13.2963 425.596 25.9974 425.596L100.425 425.596C111.971 425.596 121.331 434.956 121.331 446.503V446.503C121.331 458.049 111.971 467.409 100.425 467.409L2.99998 467.409"/>
      </svg>,
      { delay: 2200, duration: 1.5 }
    )}
  </div>
}

function Squiggle2() {
  return draw("squiggle2",
    <>
    <svg className="svgContainer" width="224" height="858" viewBox="0 0 224 858" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="215.81" y1="760.841" x2="198.839" y2="777.812"/>
      <line x1="198.839" y1="760.134" x2="215.81" y2="777.104"/>
      <line x1="179.81" y1="760.841" x2="162.839" y2="777.812"/>
      <line x1="162.839" y1="760.134" x2="179.81" y2="777.104"/>
      <line x1="215.81" y1="690.842" x2="198.839" y2="707.812"/>
      <line x1="198.839" y1="690.135" x2="215.81" y2="707.105"/>
      <line x1="179.81" y1="690.842" x2="162.839" y2="707.812"/>
      <line x1="162.839" y1="690.135" x2="179.81" y2="707.105"/>
      <line x1="215.81" y1="724.841" x2="198.839" y2="741.812"/>
      <line x1="198.839" y1="724.134" x2="215.81" y2="741.104"/>
      <line x1="179.81" y1="724.841" x2="162.839" y2="741.812"/>
      <line x1="162.839" y1="724.134" x2="179.81" y2="741.104"/>
      <line x1="215.81" y1="654.842" x2="198.839" y2="671.812"/>
      <line x1="198.839" y1="654.135" x2="215.81" y2="671.105"/>
      <line x1="179.81" y1="654.842" x2="162.839" y2="671.812"/>
      <line x1="162.839" y1="654.135" x2="179.81" y2="671.105"/>
      <line x1="214.81" y1="832.839" x2="197.839" y2="849.81"/>
      <line x1="197.839" y1="832.132" x2="214.81" y2="849.102"/>
      <line x1="178.81" y1="832.839" x2="161.839" y2="849.81"/>
      <line x1="161.839" y1="832.132" x2="178.81" y2="849.102"/>
      <line x1="215.81" y1="618.842" x2="198.839" y2="635.812"/>
      <line x1="198.839" y1="618.135" x2="215.81" y2="635.105"/>
      <line x1="179.81" y1="618.842" x2="162.839" y2="635.812"/>
      <line x1="162.839" y1="618.135" x2="179.81" y2="635.105"/>
      <line x1="214.81" y1="796.839" x2="197.839" y2="813.81"/>
      <line x1="197.839" y1="796.132" x2="214.81" y2="813.102"/>
      <line x1="178.81" y1="796.839" x2="161.839" y2="813.81"/>
      <line x1="161.839" y1="796.132" x2="178.81" y2="813.102"/>
      <line x1="215.81" y1="582.842" x2="198.839" y2="599.812"/>
      <line x1="198.839" y1="582.135" x2="215.81" y2="599.105"/>
      <line x1="179.81" y1="582.842" x2="162.839" y2="599.812"/>
      <line x1="162.839" y1="582.135" x2="179.81" y2="599.105"/>
      <line x1="215.81" y1="546.842" x2="198.839" y2="563.812"/>
      <line x1="198.839" y1="546.135" x2="215.81" y2="563.105"/>
      <line x1="179.81" y1="546.842" x2="162.839" y2="563.812"/>
      <line x1="162.839" y1="546.135" x2="179.81" y2="563.105"/>
      <line x1="215.81" y1="510.841" x2="198.839" y2="527.812"/>
      <line x1="198.839" y1="510.134" x2="215.81" y2="527.105"/>
      <line x1="179.81" y1="510.841" x2="162.839" y2="527.812"/>
      <line x1="162.839" y1="510.134" x2="179.81" y2="527.105"/>
      <line x1="215.81" y1="474.841" x2="198.839" y2="491.812"/>
      <line x1="198.839" y1="474.134" x2="215.81" y2="491.105"/>
      <line x1="179.81" y1="474.841" x2="162.839" y2="491.812"/>
      <line x1="162.839" y1="474.134" x2="179.81" y2="491.105"/>
      <line x1="215.81" y1="438.841" x2="198.839" y2="455.812"/>
      <line x1="198.839" y1="438.134" x2="215.81" y2="455.105"/>
      <line x1="179.81" y1="438.841" x2="162.839" y2="455.812"/>
      <line x1="162.839" y1="438.134" x2="179.81" y2="455.105"/>
      <line x1="215.81" y1="402.841" x2="198.839" y2="419.812"/>
      <line x1="198.839" y1="402.134" x2="215.81" y2="419.105"/>
      <line x1="179.81" y1="402.841" x2="162.839" y2="419.812"/>
      <line x1="162.839" y1="402.134" x2="179.81" y2="419.105"/>
      <line x1="215.81" y1="366.841" x2="198.839" y2="383.812"/>
      <line x1="198.839" y1="366.134" x2="215.81" y2="383.105"/>
      <line x1="179.81" y1="366.841" x2="162.839" y2="383.812"/>
      <line x1="162.839" y1="366.134" x2="179.81" y2="383.105"/>
      <line x1="215.81" y1="330.84" x2="198.839" y2="347.811"/>
      <line x1="198.839" y1="330.133" x2="215.81" y2="347.103"/>
      <line x1="179.81" y1="330.84" x2="162.839" y2="347.811"/>
      <line x1="162.839" y1="330.133" x2="179.81" y2="347.103"/>
      <line x1="215.81" y1="294.84" x2="198.839" y2="311.811"/>
      <line x1="198.839" y1="294.133" x2="215.81" y2="311.103"/>
      <line x1="179.81" y1="294.84" x2="162.839" y2="311.811"/>
      <line x1="162.839" y1="294.133" x2="179.81" y2="311.103"/>
      <line x1="215.81" y1="258.839" x2="198.839" y2="275.81"/>
      <line x1="198.839" y1="258.132" x2="215.81" y2="275.102"/>
      <line x1="179.81" y1="258.839" x2="162.839" y2="275.81"/>
      <line x1="162.839" y1="258.132" x2="179.81" y2="275.102"/>
      <line x1="215.81" y1="222.839" x2="198.839" y2="239.81"/>
      <line x1="198.839" y1="222.132" x2="215.81" y2="239.102"/>
      <line x1="179.81" y1="222.839" x2="162.839" y2="239.81"/>
      <line x1="162.839" y1="222.132" x2="179.81" y2="239.102"/>
    </svg>
    <Squiggle1 />
    </>
  )}

function Squiggle3() {
  return draw("squiggle3",
    <svg className="svgContainer" width="81" height="646" viewBox="0 0 81 646" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78 3L24.375 2.99999C12.5699 2.99999 3 12.5699 3 24.375V24.375C3 36.1801 12.5699 45.75 24.375 45.75L57.293 45.75C68.7291 45.75 78 55.0209 78 66.457V66.457C78 77.8932 68.7291 87.1641 57.293 87.1641L25.043 87.1641C12.869 87.1641 2.99999 97.033 2.99999 109.207V109.207C2.99999 121.381 12.869 131.25 25.043 131.25L57.293 131.25C68.7291 131.25 78 140.521 78 151.957V151.957C78 163.393 68.7291 172.664 57.293 172.664L25.043 172.664C12.869 172.664 2.99998 182.533 2.99998 194.707V194.707C2.99998 206.881 12.869 216.75 25.0429 216.75L56.625 216.75C68.4301 216.75 78 226.32 78 238.125V238.125C78 249.93 68.4301 259.5 56.625 259.5L25.0429 259.5C12.869 259.5 2.99998 269.369 2.99997 281.543V281.543C2.99997 293.717 12.8689 303.586 25.0429 303.586L57.5396 303.586C68.6068 303.586 77.5786 312.558 77.5786 323.625V323.625C77.5786 334.692 68.6068 343.664 57.5396 343.664L27.0469 343.664C13.7661 343.664 2.99997 354.43 2.99997 367.711V367.711C2.99996 380.992 13.7661 391.758 27.0468 391.758L56.8716 391.758C68.3078 391.758 77.5786 401.029 77.5786 412.465V412.465C77.5786 423.901 68.3078 433.172 56.8716 433.172L23.707 433.172C12.2708 433.172 2.99996 442.443 2.99996 453.879V453.879C2.99996 465.315 12.2708 474.586 23.707 474.586L56.8716 474.586C68.3077 474.586 77.5786 483.857 77.5786 495.293V495.293C77.5786 506.729 68.3077 516 56.8716 516L2.99995 516"/>
      <g id="boxX" width="81" height="81">
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 63.7485 619.778)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 46.7778 621.192)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 27.7485 619.778)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 10.7778 621.192)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 63.7485 583.778)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 46.7778 585.192)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 27.7485 583.778)"/>
        <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 10.7778 585.192)"/>
      </g>
    </svg>,
    { duration: 3 }
  )
}

function Squiggle4() {
  return draw("squiggle4",
    <svg className="svgContainer" width="243" height="519" viewBox="0 0 243 519" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.00001 247L217.699 247C230.016 247 240 256.984 240 269.301V269.301C240 281.617 230.016 291.601 217.699 291.601L25.9974 291.601C13.2963 291.601 3 301.897 3 314.598V314.598C3 327.3 13.2963 337.596 25.9974 337.596L217.762 337.596C229.308 337.596 238.669 346.956 238.669 358.503V358.503C238.669 370.049 229.308 379.409 217.762 379.409L28.0881 379.409C14.2323 379.409 3 390.642 3 404.497V404.497C3 418.353 14.2323 429.585 28.0881 429.585L217.065 429.585C228.996 429.585 238.669 439.258 238.669 451.189V451.189C238.669 463.12 228.996 472.793 217.065 472.793L24.6036 472.793C12.6723 472.793 3 482.465 3 494.396V494.396C3 506.328 12.6723 516 24.6036 516L238.669 516"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 91.7485 331.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 74.7778 333.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 55.7485 331.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 38.7778 333.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 91.7485 295.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 74.7778 297.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 55.7485 295.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 38.7778 297.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 91.7485 259.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 74.7778 261.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 55.7485 259.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 38.7778 261.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 91.7485 223.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 74.7778 225.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 55.7485 223.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 38.7778 225.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 91.7485 187.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 74.7778 189.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 55.7485 187.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 38.7778 189.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 91.7485 151.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 74.7778 153.195)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707111 0.707103 -0.707111 -0.707103 55.7485 151.781)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707111 0.707103 -0.707111 0.707103 38.7778 153.195)"/>
      <line x1="92.8092" y1="116.84" x2="75.8386" y2="133.811"/>
      <line x1="75.8385" y1="116.133" x2="92.8091" y2="133.103"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 55.7485 115.779)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 38.7778 117.193)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 91.7485 79.7793)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 74.7778 81.1934)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 55.7485 79.7793)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 38.7778 81.1934)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 91.7485 43.7783)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 74.7778 45.1924)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 55.7485 43.7783)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 38.7778 45.1924)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 91.7485 7.77832)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 74.7778 9.19238)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(-0.707106 0.707108 -0.707106 -0.707108 55.7485 7.77832)"/>
      <line y1="-1.5" x2="24" y2="-1.5" transform="matrix(0.707106 0.707108 -0.707106 0.707108 38.7778 9.19238)"/>
    </svg>,
    { duration: 4 }
  )
}

const LEFT_COLUMN_SQUIGGLES = [Squiggle1, Squiggle2, Squiggle3, BoxX]
const RIGHT_COLUMN_SQUIGGLES = [Squiggle3, Squiggle4]

export default Squiggles

import React from "react"

import "../styles/landing.scss"

const Landing = () => {
  return (
    <div id="graphics">
      <Dots1 />
      <Dots3 />
      <Squiggles1 />
      <Squiggles2 />
      <Dots2 />
      <Dots4 />
      <Dots5 />
      <Squiggles3 />
      <Squiggles4 />
    </div>
  )
}

//all dots and squiggles are listed in order from top to bottom, left to right
function Dots1() {
  return (
    <svg id="dots1" width="482" height="201" viewBox="0 0 482 201" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="186" cy="184.451" r="16"/>
    <circle cx="16" cy="184.451" r="16"/>
    <circle cx="298" cy="184.451" r="16"/>
    <circle cx="128" cy="184.451" r="16"/>
    <circle cx="410" cy="184.451" r="16"/>
    <circle cx="186" cy="128.451" r="16"/>
    <circle cx="16" cy="128.451" r="16"/>
    <circle cx="298" cy="128.451" r="16"/>
    <circle cx="128" cy="128.451" r="16"/>
    <circle cx="410" cy="128.451" r="16"/>
    <circle cx="242" cy="184.451" r="16"/>
    <circle cx="72" cy="184.451" r="16"/>
    <circle cx="354" cy="184.451" r="16"/>
    <circle cx="466" cy="184.451" r="16"/>
    <circle cx="242" cy="128.451" r="16"/>
    <circle cx="72" cy="128.451" r="16"/>
    <circle cx="354" cy="128.451" r="16"/>
    <circle cx="466" cy="128.451" r="16"/>
    <circle cx="186" cy="72.4507" r="16"/>
    <circle cx="16" cy="72.4507" r="16"/>
    <circle cx="298" cy="72.4507" r="16"/>
    <circle cx="128" cy="72.4507" r="16"/>
    <circle cx="410" cy="72.4507" r="16"/>
    <circle cx="186" cy="16.4507" r="16"/>
    <circle cx="16" cy="16.4507" r="16"/>
    <circle cx="298" cy="16.4507" r="16"/>
    <circle cx="128" cy="16.4507" r="16"/>
    <circle cx="410" cy="16.4507" r="16"/>
    <circle cx="242" cy="72.4507" r="16"/>
    <circle cx="72" cy="72.4507" r="16"/>
    <circle cx="354" cy="72.4507" r="16"/>
    <circle cx="466" cy="72.4507" r="16"/>
    <circle cx="242" cy="16.4507" r="16"/>
    <circle cx="72" cy="16.4507" r="16"/>
    <circle cx="354" cy="16.4507" r="16"/>
    <circle cx="466" cy="16.4507" r="16"/>
    </svg>
  )
}

function Dots2() {
  return (
    <svg id="dots2" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16"/>
    <circle cx="72" cy="16" r="16"/>
    <circle cx="16" cy="72" r="16"/>
    <circle cx="72" cy="72" r="16"/>
    </svg>
  )
}

function Dots3() {
  return (
    <svg id="dots3" width="88" height="643" viewBox="0 0 88 643" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="72" cy="296" r="16"/>
    <circle cx="72" cy="184" r="16"/>
    <circle cx="72" cy="72" r="16"/>
    <circle cx="16" cy="296" r="16"/>
    <circle cx="16" cy="184" r="16"/>
    <circle cx="16" cy="72" r="16"/>
    <circle cx="72" cy="240" r="16"/>
    <circle cx="72" cy="128" r="16"/>
    <circle cx="72" cy="16" r="16"/>
    <circle cx="16" cy="240" r="16"/>
    <circle cx="16" cy="128" r="16"/>
    <circle cx="16" cy="16" r="16"/>
    <circle cx="72" cy="627" r="16"/>
    <circle cx="72" cy="515" r="16"/>
    <circle cx="72" cy="403" r="16"/>
    <circle cx="16" cy="627" r="16"/>
    <circle cx="16" cy="515" r="16"/>
    <circle cx="16" cy="403" r="16"/>
    <circle cx="72" cy="571" r="16"/>
    <circle cx="72" cy="459" r="16"/>
    <circle cx="72" cy="347" r="16"/>
    <circle cx="16" cy="571" r="16"/>
    <circle cx="16" cy="459" r="16"/>
    <circle cx="16" cy="347" r="16"/>
    </svg>
  )
}

function Dots4() {
  return (
    <svg id="dots4" width="88" height="312" viewBox="0 0 88 312" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="72" cy="296" r="16"/>
      <circle cx="72" cy="184" r="16"/>
      <circle cx="72" cy="72" r="16"/>
      <circle cx="16" cy="296" r="16"/>
      <circle cx="16" cy="184" r="16"/>
      <circle cx="16" cy="72" r="16"/>
      <circle cx="72" cy="240" r="16"/>
      <circle cx="72" cy="128" r="16"/>
      <circle cx="72" cy="16" r="16"/>
      <circle cx="16" cy="240" r="16"/>
      <circle cx="16" cy="128" r="16"/>
      <circle cx="16" cy="16" r="16"/>
    </svg>
  )
}

function Dots5() {
  return (
    <svg id="dots5" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16"/>
    <circle cx="72" cy="16" r="16"/>
    <circle cx="16" cy="72" r="16"/>
    <circle cx="72" cy="72" r="16"/>
    </svg>
  )
}

function Squiggles1() {
  return (
    <svg id="squiggles1" width="143" height="293" viewBox="0 0 143 293" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L108.699 12C121.016 12 131 21.9843 131 34.3005V34.3005C131 46.6167 121.016 56.601 108.699 56.601L34.9974 56.601C22.2963 56.601 12 66.8973 12 79.5984V79.5984C12 92.2995 22.2963 102.596 34.9974 102.596L109.425 102.596C120.971 102.596 130.331 111.956 130.331 123.503V123.503C130.331 135.049 120.971 144.409 109.425 144.409L37.088 144.409C23.2323 144.409 12 155.642 12 169.497V169.497C12 183.353 23.2323 194.585 37.0881 194.585L108.728 194.585C120.659 194.585 130.331 204.258 130.331 216.189V216.189C130.331 228.12 120.659 237.793 108.728 237.793L33.6036 237.793C21.6722 237.793 12 247.465 12 259.396V259.396C12 271.328 21.6723 281 33.6036 281L130.331 281" stroke="#FF4908" strokeWidth="24" strokeLinecap="round"/>
    </svg>
  )
}

function Squiggles2() {
  return (
    <svg id="squiggles2" width="143" height="157" viewBox="0 0 143 157" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L108.699 12C121.016 12 131 21.9843 131 34.3005V34.3005C131 46.6167 121.016 56.601 108.699 56.601L34.9974 56.601C22.2963 56.601 12 66.8973 12 79.5984V79.5984C12 92.2995 22.2963 102.596 34.9974 102.596L109.425 102.596C120.971 102.596 130.331 111.956 130.331 123.503V123.503C130.331 135.049 120.971 144.409 109.425 144.409L12 144.409" stroke="#FF4908" strokeWidth="24" strokeLinecap="round"/>
    </svg>
  )
}

function Squiggles3() {
  return (
    <svg id="squiggles3" width="99" height="537" viewBox="0 0 99 537" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M87 12L33.375 12C21.5699 12 12 21.5699 12 33.375V33.375C12 45.1801 21.5699 54.75 33.375 54.75L66.293 54.75C77.7291 54.75 87 64.0209 87 75.457V75.457C87 86.8932 77.7291 96.1641 66.293 96.1641L34.043 96.1641C21.869 96.1641 12 106.033 12 118.207V118.207C12 130.381 21.869 140.25 34.043 140.25L66.293 140.25C77.7291 140.25 87 149.521 87 160.957V160.957C87 172.393 77.7291 181.664 66.293 181.664L34.043 181.664C21.869 181.664 12 191.533 12 203.707V203.707C12 215.881 21.869 225.75 34.0429 225.75L65.625 225.75C77.4301 225.75 87 235.32 87 247.125V247.125C87 258.93 77.4301 268.5 65.625 268.5L34.0429 268.5C21.869 268.5 12 278.369 12 290.543V290.543C12 302.717 21.8689 312.586 34.0429 312.586L66.5396 312.586C77.6068 312.586 86.5786 321.558 86.5786 332.625V332.625C86.5786 343.692 77.6068 352.664 66.5396 352.664L36.0469 352.664C22.7661 352.664 12 363.43 12 376.711V376.711C12 389.992 22.7661 400.758 36.0468 400.758L65.8716 400.758C77.3078 400.758 86.5786 410.029 86.5786 421.465V421.465C86.5786 432.901 77.3078 442.172 65.8716 442.172L32.707 442.172C21.2708 442.172 12 451.443 12 462.879V462.879C12 474.315 21.2708 483.586 32.707 483.586L65.8716 483.586C77.3077 483.586 86.5786 492.857 86.5786 504.293V504.293C86.5786 515.729 77.3077 525 65.8716 525L12 525" stroke="#FF4908" strokeWidth="24" strokeLinecap="round"/>
    </svg>
  )
}

function Squiggles4() {
  return (
    <svg id="squiggles4" width="261" height="293" viewBox="0 0 261 293" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L226.699 12C239.016 12 249 21.9843 249 34.3005V34.3005C249 46.6167 239.016 56.601 226.699 56.601L34.9974 56.601C22.2963 56.601 12 66.8973 12 79.5984V79.5984C12 92.2995 22.2963 102.596 34.9974 102.596L226.762 102.596C238.308 102.596 247.669 111.956 247.669 123.503V123.503C247.669 135.049 238.308 144.409 226.762 144.409L37.0881 144.409C23.2323 144.409 12 155.642 12 169.497V169.497C12 183.353 23.2323 194.585 37.0881 194.585L226.065 194.585C237.996 194.585 247.669 204.258 247.669 216.189V216.189C247.669 228.12 237.996 237.793 226.065 237.793L33.6036 237.793C21.6723 237.793 12 247.465 12 259.396V259.396C12 271.328 21.6723 281 33.6036 281L247.669 281" stroke="#FF4908" strokeWidth="24" strokeLinecap="round"/>
    </svg>
  )
}

export default Landing

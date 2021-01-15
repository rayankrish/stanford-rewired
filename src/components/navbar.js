import React from "react"
import { Link } from "gatsby"

import "../styles/navbar.scss"

function Navlink(props) {
  return (
    <Link
      to={props.to}
      className={"navbar-link"}
      activeClassName={"navbar-link active"}
    >
      {props.children.toLowerCase()}
    </Link>
  )
}

function navbar() {
  /*
                    <div id="navbar-brand-stanford">
                        Stanford
                    </div>
    */
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-brand">
          <div id="navbar-brand-rewired">Rewired</div>
        </div>
      </Link>
      <div className="navbar-element-wrap">
        <div className="navbar-elements">
          <Navlink bold to="/issue/governance">
            Issue One
          </Navlink>
          <Navlink bold to="/issue/viral">
            Issue Two
          </Navlink>
          <Navlink to="/about">About</Navlink>
        </div>
      </div>
    </div>
  )
}

export default navbar

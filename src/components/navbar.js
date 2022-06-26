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

function NavlinkSub(props) {
  return (
    <Link
      to={props.to}
      className={"navbar-link-sub"}
      activeClassName={"navbar-link-sub active"}
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
          <Navlink bold to="/issue/connection">
            Issue Five
          </Navlink>

	  <div className="dropdown">
          <a className="navbar-link">Past Issues</a>
	  <div className="dropdown-content">
            <NavlinkSub bold to="/issue/governance">
              Issue One
            </NavlinkSub>
            <NavlinkSub bold to="/issue/viral">
              Issue Two 
            </NavlinkSub>
            <NavlinkSub bold to="/issue/antitrust">
              Issue Three
            </NavlinkSub>
            <NavlinkSub bold to="/issue/refresh">
              Issue Four
            </NavlinkSub>
          </div>
          </div>

          <Navlink to="/about">About</Navlink>
        </div>
      </div>
    </div>
  )
}

export default navbar

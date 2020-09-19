import React from "react";
import { Link } from "gatsby";

import "../styles/navbar.scss";

const navbarLinkBold = {
  marginRight: '2rem',
  fontFamily: '$sans',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '29px',
  lineHeight: '36px',
  fontVariant: 'small-caps',

  color: '#434343',

  /* Inside Auto Layout */

  flex: 'none',
  order: '0',
  alignSelf: 'center'
}

const navbarLinkRegular = {
  /* sans serif caps */
  marginRight: '2rem',
  fontFamily: 'sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '29px',
  lineHeight: '36px',
  fontVariant: 'small-caps',

  /* Black */

  color: '#434343',

  /* Inside Auto Layout */

  flex: 'none',
  order: '0',
  alignSelf: 'center'
}

function Navlink(props) {
    return (
        //<Link to={props.to} className={"navbar-link-" + (props.bold ? "bold" : "regular")}>
        <Link to={props.to} style={navbarLinkRegular} activeStyle={navbarLinkBold}>
        {props.children.toLowerCase()}</Link>
    )
}

function navbar(props) {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar-brand">
                    <div id="navbar-brand-stanford">
                        Stanford
                    </div>
                    <div id="navbar-brand-rewired">
                        Rewired
                    </div>
                </div>
            </Link>
            <div className="navbar-element-wrap">
                <div className="navbar-elements">
                    <Navlink bold to="/issue/governance">Issue One: Governance</Navlink>
                    <Navlink to="/about">About</Navlink>
                </div>
            </div>
        </div>
    )
}

export default navbar;

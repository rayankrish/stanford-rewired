import React from "react";
import { Link } from "gatsby";

import "../styles/navbar.scss";

function Navlink(props) {
    return (
        <Link to={props.to} className={"navbar-link-" + (props.bold ? "bold" : "regular")}>{props.children.toLowerCase()}</Link>
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
                    <Navlink to="/issue/governance" bold>Issue One: Governance</Navlink>
                    <Navlink to="/about">About</Navlink>
                </div>
            </div>
        </div>
    )
}

export default navbar;

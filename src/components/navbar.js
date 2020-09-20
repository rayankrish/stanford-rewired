import React from "react";
import { Link } from "gatsby";

import "../styles/navbar.scss";

function Navlink(props) {
    return (
        <Link to={props.to} className={"navbar-link"} activeClassName={"navbar-link active"}>
        {props.children.toLowerCase()}</Link>
    )
}

function navbar() {
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
                    <Navlink bold to="/issue/governance">Issue One - Governance</Navlink>
                    <Navlink to="/about">About</Navlink>
                </div>
            </div>
        </div>
    )
}

export default navbar;

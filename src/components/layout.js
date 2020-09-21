/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "../styles/main.scss"
import Squiggles from "./squiggles"

const Layout = ({ children, noSquiggles, useDarkSquiggles, squiggleTopOffset, squiggleCadence }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/
  return (
    <div className="container">
      { !noSquiggles && <Squiggles
        dark={useDarkSquiggles}
        offsetMultiplier={squiggleTopOffset}
        cadenceMultiplier={squiggleCadence}
      />}
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

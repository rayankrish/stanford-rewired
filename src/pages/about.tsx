import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { fadeInUp } from "../components/util";

import Team from "../components/team"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/about.scss"
import Navbar from "../components/navbar"
import SubmitForm from "../components/submitform"

const AboutPage = () => {
  const data = useStaticQuery(pageQuery) // graphql query, see below

  return (
    <>
      <Navbar />
      <Layout>
        <SEO title="Home" />
        <Description />
        <Team />
        <GetInvolved />
        <Sponsors />
        <SubmitForm includeLinks={false} scss="">
          <div className="about-submit">
            <h1>Keep In Touch</h1>
            <p className="about-email">You can reach us by email at &nbsp;
              <a href="mailto:hello@stanfordrewired.com">hello@stanfordrewired.com</a>.</p>
            <p>
              Sign up to receive updates about upcoming issues and submission
              openings via email.
            </p>
          </div>
        </SubmitForm>
      </Layout>
    </>
  )
}

function Description() {
  return (
    <div className="about-section">
      {fadeInUp(<h1>About</h1>, undefined, 0, 0)}
      {fadeInUp(
        <p>
          Rewired is a digital magazine where technology and society meet. We’re committed to curating stories that amplify diverse perspectives and bridge disciplines.
        </p>
      )}
      {fadeInUp(
        <p>
          We’re a community of Stanford undergrads and postdocs in fields
          ranging from philosophy to anthropology to political science.
          Together, we’re leading a cultural shift in the way Stanford thinks
          about technology.
        </p>
      )}
      {fadeInUp(
        <p>
          Challenging the dichotomy between unbounded optimism and cynical
          pessimism, we invite readers to thoughtful conversations that
          transcend the echo chambers of today’s attention economy. We’re
          committed to amplifying marginalized voices, challenging unjust power
          structures, and re-enchanting technology as a force for civic
          progress.
        </p>
      )}
      {fadeInUp(
        <p>
          Ultimately, we strive to engender a more conscious stance towards
          technology and instill a sense of agency in shaping its future.
        </p>
      )}
    </div>
  )
}

function GetInvolved() {
  return (
    <div className="about-section">
      {fadeInUp(<h1>Get Involved</h1>)}
      <div className="columns">
        {fadeInUp(
          <div className="col">
            <a
              href="http://stanfordrewired.com/apply"
              target="_blank"
            >
              <h2 className="monospace">join us &rarr;</h2>
            </a>
            <p>
              We’re currently looking for designers, developers, writers,
              and operations gurus to join our team.{" "}
              <a
                href="http://stanfordrewired.com/apply"
                target="_blank"
              >
                 Learn more about each role and apply here.
              </a>
            </p>
          </div>
      , 250)}
      {fadeInUp(
        <div className="col">
          <a href="http://stanfordrewired.com/rsvp" target="_blank">
            <h2 className="monospace">learn about us &rarr;</h2>
          </a>
          <p>
            Have more questions? Email <a href="mailto:hello@stanfordrewired.com">hello@stanfordrewired.com</a> to learn
            how you can get involved, submit an article, or how to partner with Rewired!
          </p>
        </div>
      , 500)}
      </div>
    </div>
  )
}

function Sponsors() {
  return (
    <div className="about-section">
      {fadeInUp(<h1>Our Sponsors</h1>)}
      {fadeInUp(
        <p>
          Rewired is a digital magazine where technology and society meet. We’re committed to curating stories that amplify diverse perspectives and bridge disciplines.
        </p>
      )}
      <div className="columns">
        {fadeInUp(
          <div className="col">
            <p>
              <a
                href="https://ethicsinsociety.stanford.edu"
                target="_blank"
              >
                McCoy Family Center for Ethics in Society &rarr;
              </a>
            </p>
          </div>
      , 250)}
      {fadeInUp(
        <div className="col">
          <p>
            <a
              href="https://ethicsinsociety.stanford.edu/ethics-society-technology-hub/current-projects/undergraduate-collaborative-projects"
              target="_blank"
            >
              EST &rarr;
            </a>
          </p>
        </div>
      , 500)}
      </div>
      {fadeInUp(
        <p>
        If you’re interested in becoming a sponsor, send us an email at <a href="mailto:business@stanfordrewired.com">business@stanfordrewired.com</a>.
        </p>
      )}
    </div>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

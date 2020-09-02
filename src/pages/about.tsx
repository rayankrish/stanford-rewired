import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import addToMailchimp from "gatsby-plugin-mailchimp"

import About from "../components/about"
import Team from "../components/team"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/about.scss"

const AboutPage = () => {
  const data = useStaticQuery(pageQuery) // graphql query, see below

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <About />
        <Description />
        <Team />
        <GetInvolved />
        <Sponsors />
        <SubmitForm />
      </Layout>
    </>
  )
}

function fadeInUp(elem: JSX.Element, delay=0, offset=200): JSX.Element {
  return (
    <ScrollAnimation
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

function Description() {
  return (
    <div>
      {fadeInUp(<h1>About</h1>, 0, 0)}
      {fadeInUp(
        <p>
          Stanford Rewired is a digital magazine where technology and society meet. We’re committed to curating stories that amplify diverse perspectives and bridge disciplines.
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
    <div>
      {fadeInUp(<h1>Get Involved</h1>)}
      <div className="columns">
        {fadeInUp(
          <div className="col">
            <a
              href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
              target="_blank"
            >
              <h2 className="monospace">submit writing &rarr;</h2>
            </a>
            <p>
              We’re currently accepting submissions for our Fall 2020 issue. The
              theme is Governance.{" "}
              <a
                href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
                target="_blank"
              >
                You can learn more about our submission process here.
              </a>
            </p>
          </div>
      , 250)}
      {fadeInUp(
        <div className="col">
          <a href="https://bit.ly/rewired-design" target="_blank">
            <h2 className="monospace">design with us &rarr;</h2>
          </a>
          <p>
            We’re looking for a graphic and/or product designer to join our
            team.{" "}
            <a href="https://bit.ly/rewired-design" target="_blank">
              You can learn more details about the position here.
            </a>
          </p>
        </div>
      , 500)}
      </div>
    </div>
  )
}

function Sponsors() {
  return (
    <div>
      {fadeInUp(<h1>Our Sponsors</h1>)}
      {fadeInUp(
        <p>
          Stanford Rewired is a digital magazine where technology and society meet. We’re committed to curating stories that amplify diverse perspectives and bridge disciplines.
        </p>
      )}
      <div className="columns">
        {fadeInUp(
          <div className="col">
            <p>
              <a
                href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
                target="_blank"
              >
                McCoy Center &rarr;
              </a>
            </p>
            <p>
              <a
                href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
                target="_blank"
              >
                EST &rarr;
              </a>
            </p>
            <p>
              <a
                href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
                target="_blank"
              >
                Google &rarr;
              </a>
            </p>
          </div>
      , 250)}
      {fadeInUp(
        <div className="col">
          <p>
            <a
              href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
              target="_blank"
            >
              Project Include &rarr;
            </a>
          </p>
          <p>
            <a
              href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
              target="_blank"
            >
              Oski's Coalition &rarr;
            </a>
          </p>
        </div>
      , 500)}
      </div>
      {fadeInUp(
        <p>
        If you’re interested in becoming a sponsor, send us an email at business@stanfordrewired.
        </p>
      )}
    </div>
  )
}

class SubmitForm extends React.Component<{}, { isSubmitted: boolean; email: string; err_msg: string }> {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.state = { isSubmitted: false, email: "", err_msg: "" }
  }

  submitForm(e) {
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)
        if (result !== "success") {
          this.setState({ err_msg: msg })
          throw msg
        }
        this.setState({ isSubmitted: true })
      })
      .catch(() => {
        // throw err
      })
    e.preventDefault()
  }

  updateEmail(e) {
    this.setState({ email: e.target.value })
  }

  render() {
    if (!this.state.isSubmitted) {
      return fadeInUp(
        <div>
          <h1>Keep In Touch</h1>
          <p>You can reach us by email at hello@stanfordrewired.com.</p>
          <p>
            Sign up to receive updates about upcoming issues and submission
            openings via email.
          </p>
          <form
            onSubmit={e => {
              e.preventDefault()
              return false
            }}
          >
            <a type="warning" dangerouslySetInnerHTML={{ __html: this.state.err_msg }} />
            <input type="text" name="email" onChange={this.updateEmail} />
            <input type="submit" value="Sign Up" onClick={this.submitForm} />
          </form>
        </div>
      )
    } else {
      return fadeInUp(
        <div>
          <h1>&#10004; Thanks for signing up</h1>
          <p>
            We’re excited for news about our publication to hit your inbox soon.
            In the meantime, check out more ways to get involved:
          </p>
          <a
            href="https://www.notion.so/stanfordrewired/Stanford-Rewired-Open-Submission-932ab29333e34525b2a775e5a0a9fe5a"
            target="_blank"
          >
            <h2>submit writing &rarr;</h2>
          </a>
          <a href="https://bit.ly/rewired-design" target="_blank">
            <h2>design with us &rarr;</h2>
          </a>
        </div>
      )
    }
  }
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

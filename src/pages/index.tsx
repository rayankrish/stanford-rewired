import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Landing from "../components/landing"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/landing.scss"

const IndexPage = () => {

  const data = useStaticQuery(pageQuery); // graphql query, see below

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Landing />
        <Title />
        <Subtitle />
        <Description />
        <GetInvolved />
        <SubmitForm />
      </Layout>
    </>
  )
}

function Title() {
  return (
    <div>
      <h1 id="title">Stanford<span>Rewired</span></h1>
    </div>
  )
}

function Subtitle() {
  return (
    <div>
      <p id="subtitle">Stanford Rewired is a digital magazine where <strong>technology and society meet</strong>. We’re committed to curating stories that amplify diverse perspectives and bridge disciplines.</p>
    </div>
  )
}

function Description() {
  return (
    <div>
      <p>We’re a community of Stanford undergrads and postdocs in fields ranging from philosophy, to anthropology, to political science. Together, we’re leading a cultural shift in the way Stanford thinks about technology.</p>
      <p>Challenging the dichotomy between unbounded optimism and cynical pessimism, we invite readers to thoughtful conversations that transcend the echo chambers of today’s attention economy. We’re committed to amplifying marginalized voices, challenging unjust power structures, and re-enchanting technology as a force for civic progress. Ultimately, we strive to engender a more conscious stance towards technology and instill a sense of agency in shaping its future.</p>
    </div>
  )
}

function GetInvolved() {
  return (
    <div>
      <h1>Get Involved</h1>
      <div className="columns">
        <div className="col">
          <a href="https://docs.google.com/document/d/17q2w7iXs8aO_L1t4pogcmfjsytSWxGzwW3rP0l8zjsg/edit?usp=sharing" target="_blank">
            <h2>submit writing &rarr;</h2>
          </a>
          <p>We’re currently accepting submissions for our Fall 2020 issue. The theme is Governance. <a href="https://docs.google.com/document/d/17q2w7iXs8aO_L1t4pogcmfjsytSWxGzwW3rP0l8zjsg/edit?usp=sharing" target="_blank">You can learn more about our submission process here.</a></p>
        </div>
        <div className="col">
          <a href="https://bit.ly/rewired-design" target="_blank">
            <h2>design with us &rarr;</h2>
          </a>
          <p>We’re looking for a graphic and/or product designer to join our team. <a href="https://bit.ly/rewired-design" target="_blank">You can learn more details about the position here.</a></p>
        </div>
      </div>
    </div>
  )
}

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {isSubmitted: false};
  }

  submitForm(e) {
    this.setState({isSubmitted: true});
    return false;
  }

  render() {
    if (!this.state.isSubmitted) {
      return (
        <div>
          <h1>Keep In Touch</h1>
          <p>Sign up to receive updates about upcoming issues and submission openings via email.</p>
          <form>
            <input type="text" name="email" />
            <input type="submit" value="Sign Up" onSubmit={this.submitForm} />
          </form>
        </div>
      )
    }
    else {
      return (
        <div>
          <h1>&#10004; Thanks for signing up</h1>
          <p>We’re excited for news about our publication to hit your inbox soon. In the meantime, check out more ways to get involved:</p>
          <a href="https://docs.google.com/document/d/17q2w7iXs8aO_L1t4pogcmfjsytSWxGzwW3rP0l8zjsg/edit?usp=sharing" target="_blank">
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

export default IndexPage

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

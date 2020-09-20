import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "../styles/submitform.scss"

function fadeInUp(elem: JSX.Element, delay = 0): JSX.Element {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      duration={0.5}
      animateOnce={true}
      offset={200}
      delay={delay}
    >
      {elem}
    </ScrollAnimation>
  )
}

export default class SubmitForm extends React.Component<
  {},
  { isSubmitted: boolean; email: string; err_msg: string }
> {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.state = { isSubmitted: false, email: "", err_msg: "" }
  }

  submitForm(e) {
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
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
        <div className="submitform-body">
          <div>
            Stanford Rewired is a digital magazine where technology and society
            meet. We’re committed to curating stories that amplify diverse
            perspectives and bridge disciplines.
          </div>
          <div>
            Sign up to receive updates about upcoming issues and submission
            openings via email.
          </div>
          <form
            onSubmit={e => {
              e.preventDefault()
              return false
            }}
          >
            <a
              type="warning"
              dangerouslySetInnerHTML={{ __html: this.state.err_msg }}
            />
            <input type="text" name="email" onChange={this.updateEmail} />
            <input
              type="submit"
              value="Sign Up"
              className="submitform-button"
              onClick={this.submitForm}
            />
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

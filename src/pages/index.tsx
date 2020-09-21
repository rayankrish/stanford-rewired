import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// eventually use gatsby-image
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Image from "../components/image"
import SEO from "../components/seo"
import temp_article_thumbnail from '../images/temp_article_thumbnail.png'
import temp_issue_cover from '../images/temp_issue_cover.jpg'
import "../styles/landingV2.scss"
import { useLandingQuery } from "../hooks/landing_top_query"
import { BoxX } from "../components/squiggles"
import { ellipsis, fadeInUp, stripHTML } from "../components/util"

const LandingPage = () => {
    return (
        <div className="landing">
            <Navbar />
            <Layout squiggleTopOffset={1/3}>
                <SEO title="Stanford Rewired" />
                <Title/>
                <Articles />
                <div className="boxX-divider"><BoxX /></div>
                <SubmitForm />
            </Layout>
        </div>
    )
}

const TwitterMetas = () => {
  return (
    <div>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@stanfordrewired" />
      <meta name="twitter:title" content="Stanford Rewired" />
      <meta name="twitter:description" content="Rewired is a digital magazine where technology and society meet. We're committed to curating stories that amplify diverse perspectives and bridge disciplines." />
      <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
    </div>
  )
}

const Title = () => {
    const selected_articles = useLandingQuery()
    const [index, setIndex] = React.useState(0)

    useEffect(() => {
      const num_articles = selected_articles.allWpPost.edges.length
      setIndex(Math.floor(Math.random()*num_articles))
    }, [selected_articles])

    const selected_article = selected_articles.allWpPost.edges[index].node
    const selected_article_name = selected_article.title
    const selected_article_slug = "/post/" + selected_article.slug
    const selected_article_img = selected_article.featuredImage.node.localFile.childImageSharp.fixed.src
    var issue_name = selected_articles.allWpPost.edges[index].node.categories.nodes[0].name
    var other_articles = []
    for (let i = 0; i <= 3; i++) {
      if (i != index) {
        other_articles.push(selected_articles.allWpPost.edges[i].node.title)
      }
    }
    var title_variation = Math.floor(Math.random()*2)

    return fadeInUp(
        <div>
          <div className="landing-image-container">
            <div className="landing-image-decoration"><BoxX /></div>
              <Link to={selected_article_slug}>
                <img id="landing-image" src={selected_article_img} alt="article image" />
              </Link>
            </div>
            {/* {title_variation == 0 && */}
              <h1 id="landing-title">
                  Read <Link to={selected_article_slug} style={{textDecoration: "underline"}}>{selected_article_name}</Link> in our {issue_name} issue
              </h1>
            {/* }
            {title_variation == 1 &&
              <h1 id="landing-title">
                  <Link to={selected_article_slug} style={{textDecoration: "underline"}}>{selected_article_name}</Link> is a story in our {issue_name} issue
              </h1>
            } */}
            <p id="landing-description">
                Our latest issue, <i>{issue_name}</i>,
                includes article such as "{other_articles[0]}," "{other_articles[1]}," and "{other_articles[2]}." <Link to={"/issue/"+issue_name.toLowerCase()}>Read the issue &rarr;</Link>
            </p>
        </div>
    )
}

// TODO: combine article tiles into one component that can take on various layouts
// (See article tile in issue.tsx)
export const ArticleTile = ({ node, img }) => {
  const descriptionRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
      if (descriptionRef?.current) {
          ellipsis(descriptionRef.current, 50)
      }
  }, [descriptionRef?.current?.clientHeight])

  return fadeInUp(
    <div className="small-article-tile" key={node.slug}>
      <Link to={"/post/"+node.slug}>
        <div className="landing-columns">
            <div className="landing-col-a">
                <img id="landing-article-thumbnail" src={img || node.featuredImage?.node.localFile.childImageSharp.fixed.src || temp_article_thumbnail} alt="article image" />
            </div>
            <div className="landing-col-b">
                <h1 id="article-title">
                    {node.title}
                </h1>
                {node.excerpt?.length > 0 && <div className="landing-article-excerpt" ref={descriptionRef}>{stripHTML(node.excerpt)}</div>}
            </div>
        </div>
      </Link>
    </div>
  )
}

function Articles() {
    const data = useStaticQuery(pageQuery); // graphql query, see below
     //                                dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
    return (
          <div>
               {fadeInUp(<div className="landing-columns landing-recent-stories-header">
                    <h1 id="float-left">Recent Stories</h1>
                    <p id="float-right"><Link to="/all">See all &rarr;</Link></p>
                </div>)}
              {data.allWpPost.edges.map(({ node, i }) => (
                  <ArticleTile key={i} node={node} />
              ))}
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
        <div className="landing-form">
          <p id="first-info-text">
          Rewired is a digital magazine where technology and society meet.
          We're committed to curating stories that amplify diverse perspectives
          and bridge disciplines. <Link to="/about">Learn more about us &rarr;</Link>
          </p>
          <p>You can reach us by email at &nbsp;
            <a href="mailto:hello@stanfordrewired.com">hello@stanfordrewired.com</a>.</p>
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

export default LandingPage

// Query to get list of articles - random recently published articles not necessarily by issue
export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: date, order: DESC}, limit: 4) {
        edges {
          node {
            title
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fixed {
                      src
                    }
                  }
                }
                date
              }
            }
            excerpt
            article_fields {
              articleSubtitle
              articleAuthors
            }
            slug
          }
        }
      }
    }
`

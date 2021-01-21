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
import addToMailchimp from "gatsby-plugin-mailchimp"
import SubmitForm from "../components/submitform"

const LandingPage = () => {
    return (
        <div className="landing">
            <Navbar />
            <Layout squiggleTopOffset={1/3}>
                <SEO title="Stanford Rewired" />
                <TwitterMetas />
                <Title/>
                <Articles />
                <div className="boxX-divider"><BoxX /></div>
                <SubmitForm includeLinks={false} scss="">
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
                  </div>
                </SubmitForm>
            </Layout>
        </div>
    )
}

const TwitterMetas = () => {
  return (
    <div>
      <meta name="twitter:image" content="http://52.12.8.45/wp-content/uploads/2020/09/Facebook-Profile-Pic.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@stanfordrewired" />
      <meta name="twitter:title" content="Stanford Rewired" />
      <meta name="twitter:description" content="Rewired is a digital magazine where technology and society meet. We're committed to curating stories that amplify diverse perspectives and bridge disciplines." />
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
    const selected_article_img = selected_article.featuredImage.node.sourceUrl
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
                includes articles such as "{other_articles[0]}," "{other_articles[1]}," and "{other_articles[2]}." <Link to={"/issue/"+issue_name.toLowerCase()}>Read the issue &rarr;</Link>
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
                <img id="landing-article-thumbnail" src={img || node.featuredImage?.node.sourceUrl || temp_article_thumbnail} alt="article image" />
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
		sourceUrl
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

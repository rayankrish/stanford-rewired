import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// eventually use gatsby-image
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import temp_article_thumbnail from '../images/temp_article_thumbnail.png'
import temp_issue_cover from '../images/temp_issue_cover.jpg'
import "../styles/landingV2.scss"
import { useLandingQuery } from "../hooks/landing_top_query"

const IssuePage = () => {
    return (
        <>
            <Layout>
                <SEO title="Landing" />
                <Title />
                <Articles />
            </Layout>
        </>
    )
}

function Title() {
    const selected_article = useLandingQuery()
    var num_articles = selected_article.allWpPost.edges.length
    var index = Math.floor(Math.random()*num_articles)
    var selected_article_name = selected_article.allWpPost.edges[index].node.title
    var selected_article_slug = "/post/" + selected_article.allWpPost.edges[index].node.slug
    var issue_name = selected_article.allWpPost.edges[index].node.categories.nodes[0].name
    var other_articles = []
    for (let i = 0; i <= 3; i++) {
      if (i != index) {
        other_articles.push(selected_article.allWpPost.edges[i].node.title)
      }
    }
    var title_variation = Math.floor(Math.random()*2)

    return (
        <div>
            <img id="landing-image" src={temp_issue_cover} alt="issue cover image" />
            {title_variation == 0 &&
              <h1 id="landing-title">
                  Read about <Link to={selected_article_slug} style={{textDecoration: "underline"}}>{selected_article_name}</Link> in our {issue_name} issue
              </h1>
            }
            {title_variation == 1 &&
              <h1 id="landing-title">
                  <Link to={selected_article_slug} style={{textDecoration: "underline"}}>{selected_article_name}</Link> is a story in our {issue_name} issue
              </h1>
            }
            <p id="landing-description">
                Our latest issue, <i>{issue_name}</i>, is released on our website now,
                and includes article such as {other_articles[0]}, {other_articles[1]}, and {other_articles[2]}.
                Read the editor's note here &rarr;
            </p>
        </div>
    )
}

function Articles() {
    const data = useStaticQuery(pageQuery); // graphql query, see below
    return (
        <Layout>
            <div>
                <div>
                    <h1>Recent Stories</h1>
                </div>
                {data.allWpPost.edges.map(({ node }) => (
                    <div key={node.slug}>

                        <div className="columns">
                            <div className="col-a">
                                <img id="article-thumbnail" src={temp_article_thumbnail} alt="article image" />
                            </div>
                            <div className="col-b">
                                <h1 id="article-title">
                                    {node.title}
                                </h1>
                                <div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default IssuePage

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
            slug
          }
        }
      }
    }
`

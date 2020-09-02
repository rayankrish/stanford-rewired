import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// eventually use gatsby-image
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import temp_article_thumbnail from '../images/temp_article_thumbnail.png'
import temp_issue_cover from '../images/temp_issue_cover.jpg'
import "../styles/landingV2.scss"

const IssuePage = () => {


    return (
        <>
            <Layout>
                <SEO title="Isue" />
                <Title />
                <Articles />
            </Layout>
        </>
    )
}

function Title() {
    const data = useStaticQuery(pageQuery); // graphql query, see below
    var index = Math.floor(Math.random()*4)
    return (
        <div>
            <img id="issue-image" src={temp_issue_cover} alt="issue cover image" />
            <h1 id="issue-title">
                {data.allWpPost.edges[index].node.title}
            </h1>
            <p id="description">
                {data.allWpPost.edges[index].node.excerpt}
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
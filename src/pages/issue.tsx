import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// eventually use gatsby-image
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import temp_article_thumbnail from '..\\images\\temp_article_thumbnail.png'
import temp_issue_cover from '..\\images\\temp_issue_cover.jpg'
import "../styles/issue.scss"

const IssuePage = () => {


    return (
        <>
            <Layout>
                <SEO title="Issue" />
                <Title />
                <Articles />
            </Layout>
        </>
    )
}

function Title() {
    const data = useStaticQuery(pageQuery); // graphql query, see below
    return (
        <div>
            <img id="issue-image" src={temp_issue_cover} alt="issue cover image" />
            <h1 id="issue-title">
                {data.allWordpressPost.edges[0].node.categories[0].name}
            </h1>
            <h1 id="issue-subtitle">
                Issue One &#9679; July 1, 2020
            </h1>
            <p id="description">
                {data.allWordpressPost.edges[0].node.categories[0].description}
            </p>
            <p id="description">
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
                {data.allWordpressPost.edges.map(({ node }) => (
                    <div key={node.slug}>

                        <div className="columns">
                            <div className="col-a">
                                <img id="article-thumbnail" src={temp_article_thumbnail} alt="article image" />
                            </div>
                            <div className="col-b">
                                <h1 id="article-title">
                                    {node.title}
                                </h1>
                                <a id="tag">tag one</a>
                                <a id="tag">tag two</a>
                                <p id="article-description">{node.excerpt}></p>
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
    allWordpressPost (filter: {categories: {elemMatch: {wordpress_id: {eq:2}}}}) {
      edges {
        node {
          title
          excerpt
          date
          slug
          categories {
            name
            slug
            description
          }
        }
      }
    }
  }
`

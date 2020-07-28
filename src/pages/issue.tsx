import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IssuePage = () => {

    const data = useStaticQuery(pageQuery); // graphql query, see below

    return (
        <Layout>
            <SEO title="Home" />

            <h2 style={{ marginTop: "12px" }}> Wordpress Posts </h2>
            <div>
                {data.allWordpressPost.edges.map(({ node }) => (
                    <div key={node.slug}>
                        <h2>Issue Name - {node.categories[0].name}</h2>
                        <h2>Issue Desc - {node.categories[0].description}</h2>
                        <Link to={node.slug}>
                            <h2>Title - {node.title}</h2>
                            <h2>Date - {node.date}</h2>
                            <h2>Excerpt - {node.excerpt}</h2>
                        </Link>
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

import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export const useLandingQuery = () => {
  const selected_article = useStaticQuery (
    graphql`
      query {
          allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Refresh"}}}}}) {
            edges {
              node {
                slug
                title
                excerpt
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fixed {
                          src
                        }
                      }
                    }
		    sourceUrl
                  }
                }
                date
                categories {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
    `
  )
  return selected_article
}

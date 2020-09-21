import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export const useLandingQuery = () => {
  const selected_article = useStaticQuery (
    graphql`
      query {
          allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Governance"}}}}}) {
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

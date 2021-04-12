import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export const useLandingQuery = () => {
  const selected_article = useStaticQuery (
    graphql`
      query {
          allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "(Anti)Trust"}}}}}) {
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

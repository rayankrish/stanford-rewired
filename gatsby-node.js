const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Create pages from wordpress API
// From: https://www.gatsbyjs.org/docs/sourcing-from-wordpress/
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // hard coded the "Issue Heading" as category applied for Issue Pages
  const issue_result = await graphql(`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Issue Heading"}}}}}) {
        edges {
          node {
            id
            slug
            title
            excerpt
            date
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
          }
        }
      }
    }
  `)
  console.log(issue_result)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWpPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `/post/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })

  const issueTemplate = path.resolve(`./src/templates/issue.tsx`)
  issue_result.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: `/issue-page/${edge.node.slug}`,
      component: slash(issueTemplate),
      context: {
        id: edge.node.id,
        title: edge.node.title,
        excerpt: edge.node.excerpt,
        date: edge.node.date,
        featuredImage: edge.node.featuredImage
      }
    })
  })
}
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
}

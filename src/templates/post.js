import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout";
import Navbar from "../components/navbar"

import "../styles/post.scss";

// VERY BASIC WP POST example
// TODO: make it better in every way
// TODO: include SEO 

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <>
        <Navbar/>
        <Layout>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-byline">by {post.author.name.toLowerCase()} • in <Link className="post-category" to="/">{post.categories[0].name.toLowerCase()}</Link></div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      author {
        first_name
      }
      categories {
        name
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
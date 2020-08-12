import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SubmitForm from "../components/submitform"

import "../styles/post.scss"

// VERY BASIC WP POST example
// TODO: make it better in every way
// TODO: include SEO

class Post extends Component {
  render() {
    const post = this.props.data.wpPost
    let author = {}
    author.firstName = this.props.data.wpPost?.author?.node?.firstName
      ? this.props.data.wpPost?.author?.node?.firstName
      : ""
    author.lastName = this.props.data.wpPost?.author?.node?.lastName
      ? this.props.data.wpPost?.author?.node?.lastName
      : ""

    const category = this.props.data.wpPost?.categories?.nodes?.length
      ? this.props.data.wpPost?.categories?.nodes[0].name
      : "uncategorized"
    const featuredImage = post?.featuredImage?.node?.sourceUrl

    console.log(post)
    console.log(author)

    return (
      <>
        <Navbar />
        <Layout>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-byline">
            by {`${author.firstName} ${author.lastName}`.toLowerCase()} • in{" "}
            <Link className="post-category" to="/">
              {category.toLowerCase()}
            </Link>
          </div>
          {featuredImage && <img src={featuredImage}></img>}
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>
          <hr />
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <SubmitForm />
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
    wpPost(id: { eq: $id }) {
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
      categories {
        nodes {
          name
        }
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

import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SubmitForm from "../components/submitform"
import { SquiggleDivider, XDivider } from "../components/squiggles"

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

    const subtitle = post?.article_fields?.articleSubtitle
    var author_list = post?.article_fields?.articleAuthors
    const designer = post?.article_fields?.designer

    return (
      <>
        <Navbar />
        <Layout useDarkSquiggles={true} squiggleTopOffset={window.innerHeight / 2}>
          <h1 className="post-title">{post.title}</h1>
          {subtitle && <h2 className="post-subtitle">{subtitle}</h2>}
          <p className="post-byline">
            by {`${author_list}`.toLowerCase()} • in{" "}
            <Link className="post-category" to={"/issue/"+category.toLowerCase()}>
              {category.toLowerCase()}
            </Link>
          </p>
          <div className="post-tag-container">
            {post.tags.nodes.map(tag_node => (
  						<a className="post-tag">{tag_node.name}</a>
  					))}
          </div>
          {featuredImage && <img className="post-img" src={featuredImage}></img>}
          <p className="post-designer">Designed by {designer}</p>
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>
          <XDivider/>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <SquiggleDivider/>
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
      article_fields {
        articleSubtitle
        articleAuthors
        designer
      }
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
  		tags {
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

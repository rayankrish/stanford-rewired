import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import SubmitForm from "../components/submitform"
import SEO from "../components/seo"
import { SquiggleDivider, XDivider } from "../components/squiggles"

import "../styles/post.scss"

// VERY BASIC WP POST example
// TODO: make it better in every way

const Post = (props: { data }) => {
  const post = props.data.wpPost
  let author = {}
  author.firstName = props.data.wpPost?.author?.node?.firstName
    ? props.data.wpPost?.author?.node?.firstName
    : ""
  author.lastName = props.data.wpPost?.author?.node?.lastName
    ? props.data.wpPost?.author?.node?.lastName
    : ""

  const category = props.data.wpPost?.categories?.nodes?.length
    ? props.data.wpPost?.categories?.nodes[0].name
    : "uncategorized"
  const featuredImage = post?.featuredImage?.node?.sourceUrl
  const featuredImage_url = post?.featuredImage?.node?.localFile.url

  const subtitle = post?.article_fields?.articleSubtitle
  var author_list = post?.article_fields?.articleAuthors
  const designer = post?.article_fields?.designer

  return (
    <>
      <Navbar />
      <SEO title={post.title} />
      <TwitterMetas title={post.title} description={post.excerpt.slice(3, post.excerpt.length-5)} image={featuredImage_url}/>
      <Layout useDarkSquiggles={true} squiggleTopOffset={1 / 2} squiggleCadence={1.7}>
        <h1 className="post-title">{post.title}</h1>
        {subtitle && <h2 className="post-subtitle">{subtitle}</h2>}
        <div className="post-byline-outer">
          {category.toLowerCase() != "issue heading" &&
            <div className="post-byline">
            by {`${author_list}`.toLowerCase()} • in{" "}
            <Link className="post-category" to={"/issue/"+category.toLowerCase()}>
              {category.toLowerCase()}
            </Link>
            </div>
          }
          {category.toLowerCase() === "issue heading" &&
            <div className="post-byline">
            {`${author_list}`.toLowerCase()}
            </div>
          }
          <div className="post-tag-container">
            {post.tags.nodes.map(tag_node => (
              <a className="post-tag">{tag_node.name}</a>
            ))}
          </div>
        </div>
        {featuredImage && <img className="featured-img" src={featuredImage}></img>}
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

const TwitterMetas = ({title, description, image}) => {
  return (
    <div>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@stanfordrewired" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </div>
  )
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
          localFile {
            childImageSharp {
              fixed {
                src
              }
            }
            url
          }
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

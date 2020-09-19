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

function DividerTop() {
  return (
    <div className="post-divider">
      <svg
        width="286"
        height="34"
        viewBox="0 0 286 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="post-divider-svg"
      >
        <g clip-path="url(#clip0)">
          <line
            x1="9.07433"
            y1="8.13172"
            x2="26.0449"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="8.36707"
            y1="25.1023"
            x2="25.3376"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="45.0148"
            y1="8.13172"
            x2="61.9853"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="44.3075"
            y1="25.1023"
            x2="61.2781"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="80.9562"
            y1="8.13172"
            x2="97.9267"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="80.2489"
            y1="25.1023"
            x2="97.2195"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="116.898"
            y1="8.13172"
            x2="133.868"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="116.19"
            y1="25.1023"
            x2="133.161"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="152.838"
            y1="8.13172"
            x2="169.809"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="152.131"
            y1="25.1023"
            x2="169.101"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="188.779"
            y1="8.13172"
            x2="205.75"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="188.072"
            y1="25.1023"
            x2="205.043"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="224.721"
            y1="8.13172"
            x2="241.691"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="224.014"
            y1="25.1023"
            x2="240.984"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="260.662"
            y1="8.13172"
            x2="277.633"
            y2="25.1023"
            stroke="#434343"
            stroke-width="3"
          />
          <line
            x1="259.955"
            y1="25.1023"
            x2="276.926"
            y2="8.13174"
            stroke="#434343"
            stroke-width="3"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="285.529"
              height="33.9411"
              fill="white"
              transform="translate(0.235352)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

function DividerBottom() {
  return (
    <div className="post-divider">
      <svg
        width="520"
        height="150"
        viewBox="0 0 520 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="post-divider-svg"
      >
        <path
          d="M3.5 48L3.5 80.625C3.5 92.4301 13.0699 102 24.875 102V102C36.6801 102 46.25 92.43 46.25 80.6249L46.25 68.707C46.25 57.2708 55.5209 48 66.957 48V48C78.3932 48 87.6641 57.2709 87.6641 68.707L87.6641 79.957C87.6641 92.131 97.533 102 109.707 102V102C121.881 102 131.75 92.131 131.75 79.957L131.75 68.707C131.75 57.2708 141.021 48 152.457 48V48C163.893 48 173.164 57.2709 173.164 68.707L173.164 79.957C173.164 92.131 183.033 102 195.207 102V102C207.381 102 217.25 92.131 217.25 79.957L217.25 69.375C217.25 57.5699 226.82 48 238.625 48V48C250.43 48 260 57.5699 260 69.375L260 79.957C260 92.131 269.869 102 282.043 102V102C294.217 102 304.086 92.131 304.086 79.957L304.086 68.3425C304.086 57.2752 313.058 48.3034 324.125 48.3034V48.3034C335.192 48.3034 344.164 57.2752 344.164 68.3424L344.164 77.9531C344.164 91.2338 354.93 102 368.211 102V102C381.492 102 392.258 91.2338 392.258 77.9531L392.258 69.0104C392.258 57.5742 401.529 48.3034 412.965 48.3034V48.3034C424.401 48.3034 433.672 57.5742 433.672 69.0104L433.672 81.2929C433.672 92.7291 442.943 102 454.379 102V102C465.815 102 475.086 92.7291 475.086 81.2929L475.086 69.0104C475.086 57.5742 484.357 48.3034 495.793 48.3034V48.3034C507.229 48.3034 516.5 57.5742 516.5 69.0104L516.5 102"
          stroke="#434343"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
}

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

    console.log(post)
    console.log(author)

    return (
      <>
        <Navbar />
        <Layout>
          <h1 className="post-title">{post.title}</h1>
          {subtitle && <h2 className="post-subtitle">{subtitle}</h2>}
          <div className="post-byline">
            by {`${author_list}`.toLowerCase()} • in{" "}
            <Link className="post-category" to={"/issue/"+category.toLowerCase()}>
              {category.toLowerCase()}
            </Link>
          </div>
          {featuredImage && <img src={featuredImage}></img>}
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>
          <DividerTop />
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <DividerBottom />
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
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

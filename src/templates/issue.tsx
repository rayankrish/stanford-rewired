import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import Layout from "../components/layout";
import Navbar from "../components/navbar"
import SubmitForm from "../components/submitform"

import temp_article_thumbnail from '../images/temp_article_thumbnail.png'
import temp_issue_cover from '../images/temp_issue_cover.jpg'
import "../styles/issue.scss"

class Issue extends Component {
  render() {
      const articles = this.props.data.allWpPost
      var date = this.props.pageContext.date.split("T")[0].split("-");
    	var months:string[];
    	months = ["none", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    	var date_formatted = months[Number(date[1])] + ", " + date[2] + " " + date[0]
      var shorten_titles = false
      var article_titles = {}
      for (let i = 0; i < articles.edges.length; i++) {
        if (shorten_titles) {
          article_titles[articles.edges[i].node.title] = articles.edges[i].node.title.split(":")[0]
        } else {
          article_titles[articles.edges[i].node.title] = articles.edges[i].node.title
        }
      }

    	return (
                <>
                    <Navbar />
                    <Layout useDarkSquiggles={true} squiggleTopOffset={window.innerHeight}>
                        <div>
                            <img id="issue-image" src={this.props.pageContext.featuredImage ? this.props.pageContext.featuredImage.node.localFile.childImageSharp.fixed.src : temp_issue_cover} alt="issue cover image" />
                            <h1 id="issue-title">
                                {this.props.pageContext.title}
                            </h1>
                            <h1 id="issue-subtitle">
                                Issue One • {date_formatted}
                            </h1>
                            <p id="description">
    			<span dangerouslySetInnerHTML={{ __html: this.props.pageContext.excerpt }}></span>
    			    <Link to={"/post/"+this.props.pageContext.title.toLowerCase()}>
                                    Read the editor's note here &rarr;
    			    </Link>
                            </p>
                        </div>
                        <div>
                            {articles.edges.map(({ node }) => (
                                <div key={node.slug}>
    				<Link to={"/post/"+node.slug}>
    				<div className="columns">
    				    <div className="col-a">
    					<img id="article-thumbnail" src={node.featuredImage ? node.featuredImage.node.localFile.childImageSharp.fixed.src : temp_article_thumbnail} alt="article image" />
    				    </div>
    				    <div className="col-b">
    					<h1 id="article-title">
    					    {article_titles[node.title]}
    					</h1>
    					{node.tags.nodes.map(tag_node => (
    						<a id="tag">{tag_node.name}</a>
    					))}
    					<div dangerouslySetInnerHTML={{ __html: "<p id=\"article-description\""+
                node.excerpt.slice(2) }}></div>
    				    </div>
    				</div>
    				</Link>
                                </div>
                            ))}
                        </div>
                    <DividerBottom />
                    <SubmitForm />
                    </Layout>
                </>
            )
        }
}

function Title(title: string, date: string, excerpt: string) {
    return (
        <div>
            <img id="issue-image" src={temp_issue_cover} alt="issue cover image" />
            <h1 id="issue-title">
                {title}
            </h1>
            <h1 id="issue-subtitle">
                Issue One &#9679; {date}
            </h1>
            <p id="description">
                {excerpt}
            </p>
            <p id="description">
                Read the editor's note here &rarr;
            </p>
        </div>
    )
}

function Articles() {
    return (
        <Layout>
            <div>
                {data.allWordpressPost.edges.map(({ node }) => (
                    <div key={node.slug}>

                        <div className="columns">
                            <div className="col-a">
                                <img id="article-thumbnail" src={temp_article_thumbnail} alt="article image" />
                            </div>
                            <div className="col-b">
                                <h1 id="article-title">
                                    {node.title}
                                </h1>
				{node.tags.map(({ tag }) => (
					<a id="tag">tag</a>
				))}
                                <a id="tag">tag one</a>
                                <a id="tag">tag two</a>
                                <p id="article-description">{node.excerpt}></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

function DividerBottom() {
  return (
    <div>
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
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="footer-links"><Link to="/" style={{textDecoration: "none"}}>HOME</Link> &emsp;
          <Link to="/about/" style={{textDecoration: "none"}}>ABOUT</Link></p>
    </div>
  )
}

Issue.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default Issue

export const issueQuery = graphql`
  query($title: String!) {
    allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: $title}}}}}) {
        edges {
            node {
                title
                excerpt
                date
                slug
                categories {
                    nodes {
                        name
                        slug
                        description
                    }
                }
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
		tags {
		  nodes {
		      name
		  }
		}
            }
        }
    }
}
`

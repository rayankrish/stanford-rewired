import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import Layout from "../components/layout";
import Navbar from "../components/navbar"

import temp_article_thumbnail from '..\\images\\temp_article_thumbnail.png'
import temp_issue_cover from '..\\images\\temp_issue_cover.jpg'
import "../styles/issue.scss"

class Issue extends Component {
    render() {
        const articles = this.props.data.allWpPost
        console.log(articles.edges[0].node.categories.nodes[0].name)
        var date = this.props.pageContext.date.split("T")[0].split("-");
	var months:string[];
	months = ["none", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	var date_formatted = months[Number(date[1])] + ", " + date[2] + " " + date[0]
    
	return (
            <>
                <Navbar />
                <Layout>
                    <div>
                        <img id="issue-image" src={this.props.pageContext.featuredImage ? this.props.pageContext.featuredImage.node.localFile.childImageSharp.fixed.src : temp_issue_cover} alt="issue cover image" />
                        <h1 id="issue-title">
                            {this.props.pageContext.title}
                        </h1>
                        <h1 id="issue-subtitle">
                            Issue One &#9679; {date_formatted}
                        </h1>
			<div dangerouslySetInnerHTML={{ __html: this.props.pageContext.excerpt }}></div>
                        <p id="description">
                            Read the editor's note here &rarr;
                        </p>
                    </div>
                    <div>
                        {articles.edges.map(({ node }) => (
                            <div key={node.slug}>
                                <div className="columns">
                                    <div className="col-a">
                                        <img id="article-thumbnail" src={node.featuredImage ? node.featuredImage.node.localFile.childImageSharp.fixed.src : temp_article_thumbnail} alt="article image" />
                                    </div>
                                    <div className="col-b">
                                        <h1 id="article-title">
                                            {node.title}
                                        </h1>
					{console.log(node.tags.nodes)}
					{node.tags.nodes.map(tag_node => (
						<a id="tag">{tag_node.name}</a>
					))}
					<div dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

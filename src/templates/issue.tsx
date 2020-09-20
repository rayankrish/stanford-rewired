import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import Layout from "../components/layout";
import Navbar from "../components/navbar"
import SubmitForm from "../components/submitform"
import { SquiggleDivider } from "../components/squiggles";
import { ellipsis, fadeInUp, stripHTML } from "../components/util";

import temp_article_thumbnail from '../images/temp_article_thumbnail.png'
import temp_issue_cover from '../images/temp_issue_cover.jpg'
import "../styles/issue.scss"

const ArticleTile = ({ article }) => {
    const descriptionRef = React.createRef<HTMLDivElement>();

    const ellipsisize = () => {
        if (descriptionRef?.current) {
            ellipsis(descriptionRef.current)
        }
    }

    React.useEffect(ellipsisize, [descriptionRef?.current?.clientHeight])

    return (
        fadeInUp(<div key={article.slug} className="issue-article-tile">
            <Link to={"/post/"+article.slug}>
            <div className="columns">
                <div className="col-a">
                <img id="article-thumbnail" src={article.featuredImage ? article.featuredImage.node.localFile.childImageSharp.fixed.src : temp_article_thumbnail} alt="article image" />
                </div>
                <div className="col-b">
                <h1 id="article-title">
                    {article.title}
                </h1>
                {article.tags.nodes.length > 0 && <div className="article-tags">{article.tags.nodes.map(tag_node => (
                    <span key={tag_node.name} id="tag">{tag_node.name}</span>
                ))}</div>}
                <div id="article-description" ref={descriptionRef}>{stripHTML(article.excerpt)}</div>
                </div>
            </div>
            </Link>
        </div>)
    )
}
class Issue extends Component {
    render() {
        const articles = this.props.data.allWpPost
        var date = this.props.pageContext.date.split("T")[0].split("-");
        var months:string[];
        months = ["none", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var date_formatted = months[Number(date[1])] + ", " + date[2] + " " + date[0]

	    return (
            <>
                <Navbar />
                <Layout useDarkSquiggles={true} squiggleTopOffset={1} squiggleCadence={1.5}>
                    {fadeInUp(<div>
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
                    </div>, undefined, 0, 0)}
                    <div>
                        {articles.edges.map(({ node, i }) => <ArticleTile article={node} key={i} />)}
                    </div>
                <SquiggleDivider />
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

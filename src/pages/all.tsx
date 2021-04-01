import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ArticleTile } from "./index"

import placeholder from "../images/issue_cover_placeholder.jpg"

import "../styles/all.scss"

const AllPage = () => {
  var cond = false
  if (cond) {
    return (
      <>
        <Navbar />
        <Layout>
          <SEO title="Home" />
          <div>
            <div className="all-header">All Articles</div>
          </div>
          <Articles />
        </Layout>
      </>
    )
  } else {
    return (
      <>
	<Navbar />
        <Layout>
	  <SearchArticles />
        </Layout>
      </>
    )
  }
}


const DateHeader = date => {
  var _date = date.split("-");
  var months:string[];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var str = (months[Number(_date[1])-1] + " " + _date[0]).toUpperCase()
  return (
    <div key={date} className="all-datestring">
      {str}
    </div>
  )
}

class SearchArticles extends React.Component<{}, { terms: string;}> {
  constructor(props) {
    super(props)
    //this.submitForm = this.submitForm.bind(this)
    //this.updateEmail = this.updateEmail.bind(this)
    this.state = { terms: "" }
    this.updateSearch = this.updateSearch.bind(this)
    this.get_articles = this.get_articles.bind(this)
  }
  
  updateSearch(e) {
    this.setState({ terms: e.target.value })
  }

  get_articles() {
    const data = useStaticQuery(pageQuery)
    const _articles = data?.allWpPost?.edges || []
    var articles = []

    // select articles by search term
    for (var i = 0; i < _articles.length; i++) {
      if (_articles[i]?.node?.title.includes(this.terms)) {
        articles.push(_articles[i]);
      }
    }
    if (this.terms === "") {
      articles = _articles
    }
    console.log(articles)

    if (articles.length == 0) {
      return null
    }

    const list = []
    var lastDate = ""

    for (var i = 0; i < articles.length; i++) {
      if (articles[i]?.node?.date.substring(0, 7) !== lastDate) {
        lastDate = (articles[i]?.node?.date || lastDate).substring(0, 7)
        list.push(DateHeader(lastDate))
      }

      list.push(<ArticleTile key={articles[i].node.title} node={articles[i].node} />)
    }

    console.log(list)
    return <div>{list}</div>
  }

  render() {
    return(
      <>
        <Layout>
          <SEO title="Home" />
          <div>
            <div className="all-header">All Articles</div>
          </div>
    	  <form>
            <input type="text" name="search" onChange={this.updateSearch} />
	  </form>
	  {this.get_articles()}
        </Layout>
      </>
    )
  }
}
export default AllPage

const pageQuery = graphql`
  query {
    allWpPost(sort: {order: DESC, fields: date}) {
      edges {
        node {
          id
          slug
          excerpt
          date
          title
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
	      sourceUrl
            }
          }
        }
      }
    }
  }
`

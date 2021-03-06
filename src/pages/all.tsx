import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Navbar from "../components/navbar"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ArticleTile } from "./index"

import placeholder from "../images/issue_cover_placeholder.jpg"

import "../styles/all.scss"

const AllPage = () => {
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
}

const Articles = () => {
  const data = useStaticQuery(pageQuery)
  const articles = data?.allWpPost?.edges || []

  if (articles.length == 0) {
    return
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

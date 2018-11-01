import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPost = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <br />
      <h1>{markdownRemark.frontmatter.title}</h1>
      <p>{markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export default BlogPost

export const QuerySinglePost = graphql`
  query getPost($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
      id
      html
    }
  }
`

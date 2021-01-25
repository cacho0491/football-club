import React from "react"

import Layout from "../components/Layout/Layout"
import { Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import soccerBall from "../assets/soccer-ball.jpg"
import blogStyles from "./blog.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulNewsPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={blogStyles.Blog}>
        <img src={soccerBall} />
        <Typography variant="body2">
          {props.data.contentfulNewsPost.publishedDate}
        </Typography>
        <Typography variant="h2">
          {props.data.contentfulNewsPost.title}
        </Typography>
        <div>
          {documentToReactComponents(
            props.data.contentfulNewsPost.content.json
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

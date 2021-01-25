import React from "react"

import Post from "./Post/Post"
import classes from "./Posts.module.scss"
import { Typography } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNewsPost {
        edges {
          node {
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  `)

  return (
    <div>
      <Typography variant="h5">Older Posts</Typography>
      <div className={classes.Posts}>
        {data.allContentfulNewsPost.edges.map(edge => {
          return (
            <Post
              path={edge.node.slug}
              title={edge.node.title}
              date={edge.node.publishedDate}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Posts

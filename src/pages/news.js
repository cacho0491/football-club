import React from "react"

import Layout from "../components/Layout/Layout"
import { Typography } from "@material-ui/core"
import Posts from "../components/Posts/Posts"
import Post from "../components/Posts/Post/Post"
import picture from "../assets/hero-img.jpg"
import newsStyles from "../styles/news.module.scss"
import { Button } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"

const News = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetaData {
  //           title
  //           author
  //         }
  //       }
  //     }
  //   `)
  return (
    <Layout>
      <div className={newsStyles.NewsPage}>
        <Typography variant="h2">News</Typography>

        <div className={newsStyles.PrimaryNews}>
          <img src={picture} />
          <Post />
        </div>
        <Posts />
        <Button
          className={newsStyles.NewsPageLoad}
          color="secondary"
          variant="contained"
        >
          Load More
        </Button>
      </div>
    </Layout>
  )
}

export default News

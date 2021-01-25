import React from "react"

import classes from "./Post.module.scss"
import { Link } from "gatsby"
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles({
  currentDate: {
    marginLeft: 16,
    color: "#434343",
  },
})

const Post = props => {
  const style = useStyles()
  //const date = new Date().toDateString()
  return (
    <Link to={"/news/" + props.path}>
      <Card>
        <Typography className={style.currentDate} variant="body2">
          {props.date}
        </Typography>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu est quis velit aliquam tristique ut sed sapien.
          </Typography>
        </CardContent>
        <CardActionArea>
          <Button>Read more...</Button>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default Post

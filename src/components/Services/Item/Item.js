import React from "react"

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core"
import kids from "../../../assets/hero-img.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

const Item = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={kids} />
      <CardContent>
        <Typography variant="h5">Weekly Training</Typography>
        <Typography variant="body2">
          In porta efficitur odio, scelerisque laoreet quam faucibus in.{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Book Now
        </Button>
      </CardActions>
    </Card>
  )
}

export default Item

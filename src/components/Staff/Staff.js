import React from "react"

import staffStyles from "./Staff.module.scss"
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core"
import coach1 from "../../assets/coach1.jpg"

const Staff = () => {
  return (
    <div className={staffStyles.staff}>
      <Card>
        <CardMedia component="img" image={coach1} />
        <CardContent>
          <Typography variant="h5">Jose Mourinho</Typography>
          <Typography variant="body2">
            In porta efficitur odio, scelerisque laoreet quam faucibus in.{" "}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia component="img" image={coach1} />
        <CardContent>
          <Typography variant="h5">Jose Mourinho</Typography>
          <Typography variant="body2">
            In porta efficitur odio, scelerisque laoreet quam faucibus in.{" "}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Staff

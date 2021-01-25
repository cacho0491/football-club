import React from "react"

import welcomeStyles from "./Welcome.module.scss"
import { Button, Typography } from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { navigate } from "gatsby"

const Welcome = () => {
  return (
    <div className={welcomeStyles.welcome}>
      <div className={welcomeStyles.welcomeContent}>
        <Typography variant="h2" className={welcomeStyles.h1}>
          One of the best clubs in South East London
        </Typography>
        <Typography variant="body1">
          WeeklyTraining and holiday camps
        </Typography>
        <Button
          onClick={() => navigate("/booking")}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default Welcome

import React from "react"

import { Card, CardContent, Typography, CardMedia } from "@material-ui/core"
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer"
import GroupIcon from "@material-ui/icons/Group"
import aboutStyles from "./About.module.scss"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className={aboutStyles.about}>
      <Typography variant="h2">Over 20 Years Experience</Typography>

      <div className={aboutStyles.aboutCards}>
        <Card className={aboutStyles.card}>
          <CardMedia>
            <SportsSoccerIcon className={aboutStyles.cardIcon} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2">
              Aliquam eget tortor finibus, tristique mauris ac, porttitor erat.
              Suspendisse quis maximus ante.{" "}
            </Typography>
          </CardContent>
        </Card>

        <Card className={aboutStyles.card}>
          <CardMedia>
            <SportsSoccerIcon className={aboutStyles.cardIcon} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2">
              Aliquam eget tortor finibus, tristique mauris ac, porttitor erat.
              Suspendisse quis maximus ante.{" "}
            </Typography>
          </CardContent>
        </Card>

        <Card className={aboutStyles.card}>
          <CardMedia>
            <SportsSoccerIcon className={aboutStyles.cardIcon} />
          </CardMedia>
          <CardContent>
            <Typography variant="body2">
              Aliquam eget tortor finibus, tristique mauris ac, porttitor erat.
              Suspendisse quis maximus ante.{" "}
            </Typography>
          </CardContent>
        </Card>

        <Card className={aboutStyles.card}>
          <Link to="/team">
            <CardMedia>
              <GroupIcon className={aboutStyles.cardIcon} />
            </CardMedia>
            <CardContent>
              <Typography variant="body2">Meet Our Team</Typography>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default About

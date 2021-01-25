import React from "react"

import { Typography } from "@material-ui/core"
import Layout from "../components/Layout/Layout"
import teamStyles from "../styles/Team.module.scss"
import Staff from "../components/Staff/Staff"
import heroImage from "../assets/hero-img.jpg"

const Team = () => {
  return (
    <Layout>
      <div className={teamStyles.team}>
        <img src={heroImage} alt="Coach" />
        <Typography variant="h2">Meet Our Team</Typography>
        <Staff />
      </div>
    </Layout>
  )
}

export default Team

import React from "react"

import { Typography } from "@material-ui/core"
import servicesStyles from "./Services.module.scss"
import Item from "./Item/Item"

const Services = () => {
  return (
    <div className={servicesStyles.services}>
      <Typography variant="h2">What we offer</Typography>

      <div className={servicesStyles.servicesContent}>
        <Item />

        <Item />

        <Item />
      </div>
    </div>
  )
}

export default Services

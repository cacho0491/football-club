import React from "react"

import footerStyles from "./Footer.module.scss"
import { AppBar, makeStyles, Typography } from "@material-ui/core"
import { WhatsApp, Instagram, Facebook } from "@material-ui/icons"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#434343",
    bottom: 0,
    marginTop: 30,
    position: "static",
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    // <AppBar className={classes.root}>
    <footer className={footerStyles.footer}>
      <Typography variant="h5">Contact us</Typography>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerContact}>
          <Typography variant="body1">Football Club</Typography>
          <WhatsApp />
          <Instagram />
          <Facebook />
        </div>
        <div className={footerStyles.footerInfo}>
          <p>Football Club Copyrights &copy; 2020</p>
          <p>Carlos Correa</p>
        </div>
      </div>
    </footer>
    // </AppBar>
  )
}

export default Footer

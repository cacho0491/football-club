import React, { useState } from "react"

import headerStyles from "./Header.module.scss"
import { Link } from "gatsby"
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Drawer,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import NavList from "../../Navigation/NavList/NavList"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#434343",
  },
  title: {
    flexGrow: 1,
  },
  bookButton: {
    backgroundColor: "green",
    marginRight: 10,
  },
})

const Header = () => {
  const [drawerNav, setDrawerNav] = useState(false)
  const classes = useStyles()

  const toggleDrawer = () => {
    setDrawerNav(!drawerNav)
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography className={classes.title} variant="h4">
          <Link className={headerStyles.logo} to="/">
            Football CLub
          </Link>
        </Typography>
        <Button variant="contained" className={classes.bookButton}>
          <Link className={headerStyles.logo} to="/booking">
            Book Free Session
          </Link>
        </Button>
        <MenuIcon onClick={toggleDrawer} />
        <Drawer anchor="right" open={drawerNav} onClose={toggleDrawer}>
          <NavList />
        </Drawer>
      </Toolbar>
    </AppBar>
    // <Grid container className={headerStyles.header}>
    //   <Grid item xs={6}>
    //     <p>Football Club</p>
    //   </Grid>
    //   <Grid container item xs={6} alignItems="center" justify="flex-end">
    //     <Grid item xs={3}>
    //       <Button variant="contained" style={{ backgroundColor: "green" }}>
    //         Book Free Session
    //       </Button>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <MenuIcon onClick={() => alert("yes")} />
    //     </Grid>
    //   </Grid>
    // </Grid>
  )
}

export default Header

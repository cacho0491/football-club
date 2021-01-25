import React from "react"

import { Link } from "gatsby"
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: 150,
  },
  link: {
    color: "#000",
  },
})

// const ListItemLink = props => {
//   return <ListItem button component="a" {...props} />
// }

const NavList = () => {
  const classes = useStyles()
  const list = (
    <div role="presentation" className={classes.root}>
      <List>
        {[
          { name: "Home", url: "/" },
          { name: "About", url: "/" },
          { name: "Services", url: "/" },
          { name: "Coaches", url: "/team" },
          { name: "Book Now", url: "/booking" },
        ].map((item, index) => (
          <ListItem button key={item.name}>
            <ListItemText
              primary={
                <Link className={classes.link} to={item.url}>
                  {item.name}
                </Link>
              }
            />
          </ListItem>
        ))}
        <Divider />
        <ListItem button key={"news"}>
          <ListItemText
            primary={
              <Link className={classes.link} to="/news">
                News
              </Link>
            }
          />
        </ListItem>
      </List>
    </div>
  )
  return list
}

export default NavList

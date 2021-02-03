import React from "react";

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme=>({
  sideMenu: {
    display: "flex",
    backgroundColor: theme.palette.primary.dark,
    flexDirection: "column",
    height: "100vh",
  },
}));

function SideMenu() {
  const classes = useStyles();

  return <div className={classes.sideMenu}></div>;
}

export default SideMenu;

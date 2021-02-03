import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Grid,
  InputBase,
  Badge,
  IconButton,
  
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    transform:'translateZ(0)'
  },
  appBarButton: {
    borderWidth: "1px",
    marginRight: "10px",
    transition: "0.5s",
    color: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "#274472",
    },
  },

  searchInput: {
    opacity: "0.7",
    padding: "0px 8px",
    fontSize: "0.9em",
    backgroundColor: "#d9d9d9",
    borderRadius: "1em",
    "& .MuiSvgIcon-root": {
      marginRight: "6px",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search..."
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <MessageIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

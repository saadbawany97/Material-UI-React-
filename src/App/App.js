import SideMenu from "../Components/SideMenu";
import Header from "../Components/Header";
import Employee from '../Pages/Employee/Employee'
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({});

function App() {
  let classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item lg={2} md={2} sm={0}>
          <SideMenu />
        </Grid>
        <Grid item lg={10} md={10} sm={12}>
          <div className={classes.mainApp}>
            <Header />

            <Employee />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

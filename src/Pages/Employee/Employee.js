import React from "react";
import EmployeeForm from "../Employee/EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { makeStyles , Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

function Employee() {
  let classes = useStyles();
  return (
    <>
      <PageHeader
        title="New Employee"
        icon={<PeopleOutlineIcon fontSize="large" />}
        subTitle="Form Design with validation"
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}

export default Employee;

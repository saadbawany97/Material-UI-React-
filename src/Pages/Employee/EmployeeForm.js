import React, { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  FormLabel,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import { useForm, Form } from "../../Components/useForm";

const useStyle = makeStyles((theme) => ({}));

const intitialFieldValue = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  mobileNo: "",
  departmentId: "",
  hireDate: new Date(),
  isPermenant: false,
};

function EmployeeForm() {
  const classes = useStyle();

  const { values, setvalues, handleChangeEvent } = useForm(intitialFieldValue);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            label="Full Name"
            name="fullName"
            onChange={handleChangeEvent}
            value={values.fullName}
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            onChange={handleChangeEvent}
            value={values.email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row
              name="gender"
              onChange={handleChangeEvent}
              value={values.gender}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;

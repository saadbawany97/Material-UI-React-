import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root": {
        width: "80%",
        margin: theme.spacing(1),
      },
    },
  }));

export function useForm(intitialFieldValue) {
   
  console.log("intitialFieldValue",intitialFieldValue);

  const [values, setValues] = useState(intitialFieldValue);

  let handleChangeEvent = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    setValues,
    handleChangeEvent,
  };
}

export function Form(props) {
    let classes = useStyle();   
  return (
      <form className={classes.root}>
          
          {props.children}
      </form>
  );
}

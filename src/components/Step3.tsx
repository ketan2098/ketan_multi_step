import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Grid } from "@mui/material";

export const Step3: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Field
          name="username"
          as={TextField}
          label="Username"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="username">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="password"
          as={TextField}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="password">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="confirmPassword"
          as={TextField}
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="confirmPassword">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name="securityQuestion"
          as={TextField}
          label="Security Question"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="securityQuestion">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name="securityAnswer"
          as={TextField}
          label="Answer"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="securityAnswer">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
    </Grid>
  );
};

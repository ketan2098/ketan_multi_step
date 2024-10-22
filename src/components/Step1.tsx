import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, MenuItem, Grid } from "@mui/material";

export const Step1: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Field
          name="fullName"
          as={TextField}
          label="Full Name"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="fullName">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="email"
          as={TextField}
          label="Email"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="email">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="phoneNumber"
          as={TextField}
          label="Phone Number"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="phoneNumber">  
          {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="dateOfBirth"
          as={TextField}
          label="Date of Birth"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="dateOfBirth">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="gender"
          as={TextField}
          label="Gender"
          select
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="gender">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Field>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="nationality"
          as={TextField}
          label="Nationality"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="nationality">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
    </Grid>
  );
};

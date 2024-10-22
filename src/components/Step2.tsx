import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  TextField,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

export const Step2: React.FC = () => {
  const countries = ["United States", "Canada", "United Kingdom"];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Field
          name="streetAddress"
          as={TextField}
          label="Street Address"
          variant="outlined"
          fullWidth
          helperText={
            <ErrorMessage name="streetAddress">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
            </ErrorMessage>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="city"
          as={TextField}
          label="City"
          variant="outlined"
          fullWidth
          helperText={
            <ErrorMessage name="city">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
            </ErrorMessage>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="state"
          as={TextField}
          label="State"
          variant="outlined"
          fullWidth
          helperText={
            <ErrorMessage name="state">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
            </ErrorMessage>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="postalCode"
          as={TextField}
          label="Postal Code"
          variant="outlined"
          fullWidth
          helperText={
            <ErrorMessage name="postalCode">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
            </ErrorMessage>
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Country</InputLabel>
          <Field name="country" as={Select} label="Country">
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name="country">
            {(msg) => (
              <FormHelperText sx={{ color: "red" }}>{msg}</FormHelperText>
            )}
          </ErrorMessage>
        </FormControl>
      </Grid>
    </Grid>
  );
};

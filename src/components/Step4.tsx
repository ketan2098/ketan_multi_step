import React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import { TextField, Checkbox, FormControlLabel, Grid } from "@mui/material";

export const Step4: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Field
          name="contactMethod"
          as={TextField}
          label="Preferred Contact Method"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="contactMethod">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12}>
        <Field name="interestAreas" value="Technology" type="checkbox">
          {({ field }: FieldProps) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Technology"
            />
          )}
        </Field>
        <Field name="interestAreas" value="Art" type="checkbox">
          {({ field }: FieldProps) => (
            <FormControlLabel control={<Checkbox {...field} />} label="Art" />
          )}
        </Field>
        <Field name="interestAreas" value="Science" type="checkbox">
          {({ field }: FieldProps) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Science"
            />
          )}
        </Field>
        <Field name="interestAreas" value="Sports" type="checkbox">
          {({ field }: FieldProps) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Sports"
            />
          )}
        </Field>
        <ErrorMessage name="interestAreas">
            {(msg) => <span style={{ color: "red" }}>{msg}</span>}
        </ErrorMessage>
      </Grid>
      <Grid item xs={12}>
        <Field name="subscription" type="checkbox">
          {({ field }: FieldProps) => (
            <FormControlLabel
              control={<Checkbox {...field} />}
              label="Subscribe to our newsletter"
            />
          )}
        </Field>
      </Grid>
    </Grid>
  );
};

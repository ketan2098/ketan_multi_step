import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Grid } from "@mui/material";

export const Step5: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Field
          name="bio"
          as={TextField}
          label="Short Bio"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="bio">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="linkedIn"
          as={TextField}
          label="LinkedIn Profile"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="linkedIn">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          name="portfolio"
          as={TextField}
          label="Portfolio URL"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="portfolio">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name="socialMediaLinks"
          as={TextField}
          label="Other Social Media Links"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="socialMediaLinks">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name="hobbies"
          as={TextField}
          label="Hobbies"
          variant="outlined"
          fullWidth
          helperText={<ErrorMessage name="hobbies">
              {(msg) => <span style={{ color: "red" }}>{msg}</span>}
          </ErrorMessage>}
        />
      </Grid>
    </Grid>
  );
};

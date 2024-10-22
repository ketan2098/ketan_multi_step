import React from "react";
import { Stepper as MuiStepper, Step, StepLabel } from "@mui/material";

const steps = [
  "Personal Information",
  "Address Information",
  "Security Information",
  "Preferences",
  "Additional Information",
];

interface StepperProps {
  step: number;
}

export const Stepper: React.FC<StepperProps> = ({ step }) => {
  return (
    <MuiStepper activeStep={step}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};

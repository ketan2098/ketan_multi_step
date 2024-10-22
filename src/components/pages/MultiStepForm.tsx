import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Stepper } from "./Stepper";
import { Step1 } from "../Step1";
import { Step2 } from "../Step2";
import { Step3 } from "../Step3";
import { Step4 } from "../Step4";
import { Step5 } from "./Step5";

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  profilePicture?: File;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  username: string;
  password: string;
  confirmPassword: string;
  securityQuestion: string;
  securityAnswer: string;
  contactMethod: string;
  subscription: boolean;
  interestAreas: string[];
  languagePreference: string;
  hobbies?: string;
  bio?: string;
  linkedIn?: string;
  portfolio?: string;
  socialMediaLinks?: string;
}

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  streetAddress: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  username: "",
  password: "",
  confirmPassword: "",
  securityQuestion: "",
  securityAnswer: "",
  contactMethod: "",
  subscription: false,
  interestAreas: [],
  languagePreference: "",
  hobbies: "",
  bio: "",
  linkedIn: "",
  portfolio: "",
  socialMediaLinks: "",
};

const validationSchema = [
  Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Must be exactly 10 digits")
      .required("Phone Number is required"),
    dateOfBirth: Yup.date()
      .required("Date of Birth is required")
      .test("age", "You must be at least 18 years old", (value) => {
        return new Date().getFullYear() - new Date(value!).getFullYear() >= 18;
      }),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
  }),
  Yup.object({
    streetAddress: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    postalCode: Yup.string().required("Postal Code is required"),
    country: Yup.string().required("Country is required"),
  }),
  Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    securityQuestion: Yup.string().required("Security Question is required"),
    securityAnswer: Yup.string().required(
      "Answer to Security Question is required"
    ),
  }),
  Yup.object({
    contactMethod: Yup.string().required(
      "Preferred Contact Method is required"
    ),
    interestAreas: Yup.array().min(
      1,
      "At least one interest area must be selected"
    ),
  }),
  Yup.object({
    linkedIn: Yup.string().url("Invalid LinkedIn URL"),
    portfolio: Yup.string().url("Invalid portfolio URL"),
    socialMediaLinks: Yup.string(),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (step === 4) {
      console.log("Final Submission:", values);
      setIsSubmitted(true);
      actions.setSubmitting(false);
    } else {
      actions.setTouched({});
      actions.setSubmitting(false);
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-4">
        <h2>Thank you for your submission!</h2>
      </div>
    );
  }

  return (
    <div>
      <Stepper step={step} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[step]}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form>
            {step === 0 && <Step1 />}
            {step === 1 && <Step2 />}
            {step === 2 && <Step3 />}
            {step === 3 && <Step4 />}
            {step === 4 && <Step5 />}

            <div className="flex justify-between mt-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Back
                </button>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !(isValid && dirty)}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
              >
                {step === 4 ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
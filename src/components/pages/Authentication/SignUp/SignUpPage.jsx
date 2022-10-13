import React from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import Button from "../../../atoms/Button/Button";
import ButtonSignUp from "../../../atoms/Button/ButtonSignUp";
import Google from "../../../../assets/icons/icons svg/Google";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import { Formik } from "formik";
import * as yup from "yup";
import InputUser from "../../../molecules/Input/InputUser";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUpForm = (props) => {
  //Handle sign up
  const handleSignUp = async (values) => {};
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={yup.object({
          fullName: yup.string().required("Fullname is required"),
          email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required"),
          password: yup
            .string()
            .min(8, "Your password must be at least 8 characters or greater")
            .required("Password is required"),
        })}
        onSubmit={handleSignUp}
      >
        <LayoutAuthentication
          title="Sign Up"
          text="Already have an account?"
          access="Sign in"
          forget="Forget password?"
          content="Sign up"
          navigate="/sign-in"
        >
          <ButtonSignUp
            icon={<Google></Google>}
            text="Sign up with Google"
          ></ButtonSignUp>
          <ButtonSignUp
            style={{ marginBottom: "20px" }}
            icon=""
            text="Or sign up with Gmail"
          ></ButtonSignUp>
          <FormAuthentication>
            <InputUser
              name="fullName"
              id="fullname"
              label="FullName"
              placeholder="Enter your fullname..."
            ></InputUser>
            <InputUser
              name="email"
              id="email"
              label="Email"
              placeholder="Enter your gmail..."
            ></InputUser>
            <InputUser
              name="password"
              id="password"
              label="Password"
              placeholder="Enter your password..."
            ></InputUser>
          </FormAuthentication>
          <Checkbox
            text="I agree to the Terms of Use and have
read and understand the Privacy policy."
          ></Checkbox>
          <Button
            content="Sign up"
            backgroundColor="#2a254b"
            width="100%"
            height="52px"
            radius="10"
            color="white"
            borderColor="white"
          ></Button>
        </LayoutAuthentication>
      </Formik>
    </>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;

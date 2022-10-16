import React, { useState } from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import Button from "../../../atoms/Button/Button";
import ButtonSignUp from "../../../atoms/Button/ButtonSignUp";
import Google from "../../../../assets/icons/icons svg/Google";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import { Form, Formik } from "formik";
import * as yup from "yup";
import InputUser from "../../../molecules/Input/InputUser";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import IconEyeClose from "../../../../assets/icons/IconEyes/IconEyeClose";
import IconEyeOpen from "../../../../assets/icons/IconEyes/IconEyeOpen";
import Gmail from "../../../../assets/icons/icons svg/Gmail";

const SignUpForm = (props) => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  //Handle sign up
  const handleSignUp = async (values, actions) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      address: values.address || "",
      phonenumber: values.phonenumber || "",
      userUid: auth.currentUser.uid,
    });
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          address: "",
          phonenumber: "",
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Invalid email address")
            .required("Email is required"),
          password: yup
            .string()
            .min(8, "Your password must be at least 8 characters or greater")
            .matches(/(\d)/, "Must contain one number")
            .required("Password is required"),
          fullname: yup.string().required("Full name is required"),
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
            style={{ marginBottom: "20px", gap: "11px" }}
            icon={<Gmail></Gmail>}
            text="Sign up with Gmail"
          ></ButtonSignUp>
          <FormAuthentication>
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
              type={togglePassword ? "text" : "password"}
              icon={
                togglePassword ? (
                  <IconEyeOpen onClick={handleTogglePassword}></IconEyeOpen>
                ) : (
                  <IconEyeClose onClick={handleTogglePassword}></IconEyeClose>
                )
              }
            ></InputUser>
            <InputUser
              name="fullname"
              id="fullname"
              label="Full name"
              placeholder="Enter your full name..."
            ></InputUser>
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
              type="submit"
            ></Button>
          </FormAuthentication>
        </LayoutAuthentication>
      </Formik>
    </>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;

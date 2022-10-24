/**
 * Sign up page
 * file: SignUpPage.jsx
 */

import React, { useEffect, useState } from "react";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import Button from "../../../atoms/Button/Button";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import { Formik } from "formik";
import * as yup from "yup";
import InputUser from "../../../molecules/Input/InputUser";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import IconEyeClose from "../../../../assets/icons/IconEyes/IconEyeClose";
import IconEyeOpen from "../../../../assets/icons/IconEyes/IconEyeOpen";

const SignUpPage = (props) => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  //Handle sign up
  useEffect(() => {}, []);
  const handleSignUp = async (values, actions) => {
    const errors = {};
    if (!values) {
      errors.name = "Required";
      return errors;
    }
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/naver-team1-api.appspot.com/o/user-avatars%2FuserAvatarDefault.jpg?alt=media&token=840864b0-bbb2-443e-b6de-ca7d8ada922b",
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      address: values.address || "",
      phonenumber: values.phonenumber || "",
      age: values.age || "",
      userId: auth.currentUser.uid,
      avatarId:
        "https://firebasestorage.googleapis.com/v0/b/naver-team1-api.appspot.com/o/user-avatars%2FuserAvatarDefault.jpg?alt=media&token=840864b0-bbb2-443e-b6de-ca7d8ada922b",
      status: "active",
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
          age: "",
          agreement: false,
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
          phonenumber: yup
            .string()
            .matches(/(\d+)/, "Your input is invalid type")
            .min(
              9,
              "Your phone number must be at least 9 characters or greater"
            )
            .required("Number phone is required"),
          age: yup.number().required("How old are you"),
          agreement: yup.boolean().oneOf([true], "You must agree to the terms"),
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
            <InputUser
              name="age"
              id="age"
              label="Age"
              placeholder="Enter your age..."
            ></InputUser>
            <InputUser
              name="phonenumber"
              id="phonenumber"
              label="Phone number"
              placeholder="Enter your phone number..."
            ></InputUser>
            <Checkbox
              text="I agree to the Terms of Use and have
read and understand the Privacy policy."
              name="agreement"
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

export default SignUpPage;

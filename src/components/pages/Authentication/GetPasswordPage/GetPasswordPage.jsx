import React from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import InputUser from "../../../molecules/Input/InputUser";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../../../atoms/Button/Button";
const GetPasswordPage = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={yup.object({
        email: yup
          .string()
          .email("Invalid email address")
          .required("Email is required"),
      })}
      onSubmit={(values) => {}}
    >
      <LayoutAuthentication
        title="Find your account"
        forgetContent="Please enter your email and phone number to reset your account password."
      >
        <FormAuthentication forgetContent={true}>
          <div
            style={{
              marginBottom: "18px",
              padding: "0 30px",
              borderBottom: "1px solid #ebe8f4",
            }}
          >
            <InputUser
              type="email"
              name="email"
              id="email"
              placeholder="Enter your gmail..."
            ></InputUser>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              padding: "0 15px 0",
              gap: "10px",
            }}
          >
            <Button
              content="Go back"
              backgroundColor="#fff"
              width="25%"
              height="45px"
              radius="10"
              color="#2a254b"
              borderColor="#2a254b"
              type="button"
              navigate="/sign-in"
            ></Button>
            <Button
              content="Reset password"
              backgroundColor="#2a254b"
              width="35%"
              height="45px"
              radius="10"
              color="white"
              borderColor="white"
              type="submit"
            ></Button>
          </div>
        </FormAuthentication>
      </LayoutAuthentication>
    </Formik>
  );
};

GetPasswordPage.propTypes = {};

export default GetPasswordPage;

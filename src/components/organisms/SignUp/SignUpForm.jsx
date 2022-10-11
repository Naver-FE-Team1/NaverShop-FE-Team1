import React from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../molecules/LayoutAuthentication/LayoutAuthentication";

const SignUpForm = (props) => {
  return (
    <>
      <LayoutAuthentication
        title="Sign up"
        text="Don't have an account"
        access="Sign up"
      ></LayoutAuthentication>
    </>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;

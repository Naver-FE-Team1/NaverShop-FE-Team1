import React from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import Button from "../../../atoms/Button/Button";
import ButtonSignUp from "../../../atoms/Button/ButtonSignUp";
import Google from "../../../../assets/icons/icons svg/Google";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import FieldForm from "../../../molecules/FieldForm/FieldForm";

const SignIpForm = (props) => {
  return (
    <>
      <LayoutAuthentication
        title="Sign In"
        text="Don't have an account"
        access="Sign up"
        forget="Forget password?"
        content="Sign up"
        navigate="/sign-up"
      >
        <FormAuthentication>
          <FieldForm
            labelName="Email"
            placeholder="Enter your gmail..."
          ></FieldForm>
          <FieldForm
            labelName="Password"
            placeholder="Enter your password..."
          ></FieldForm>
        </FormAuthentication>

        <Button
          content="Sign in"
          backgroundColor="#2a254b"
          width="100%"
          height="52px"
          radius="10"
          color="white"
          borderColor="white"
        ></Button>
      </LayoutAuthentication>
    </>
  );
};

SignIpForm.propTypes = {};

export default SignIpForm;

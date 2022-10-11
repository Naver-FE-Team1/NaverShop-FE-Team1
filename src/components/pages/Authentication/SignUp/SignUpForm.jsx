import React from "react";
import PropTypes from "prop-types";
import LayoutAuthentication from "../../../molecules/LayoutAuthentication/LayoutAuthentication";
import Button from "../../../atoms/Button/Button";
import ButtonSignUp from "../../../atoms/Button/ButtonSignUp";
import Google from "../../../../assets/icons/icons svg/Google";
import Checkbox from "../../../atoms/Checkbox/Checkbox";
import FormAuthentication from "../../../organisms/Form/FormAuthentication";
import FieldForm from "../../../molecules/FieldForm/FieldForm";

const SignUpForm = (props) => {
  return (
    <>
      <LayoutAuthentication
        title="Sign up"
        text="Don't have an account"
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
          <FieldForm
            labelName="FullName"
            placeholder="Enter your fullname..."
          ></FieldForm>
          <FieldForm
            labelName="Email"
            placeholder="Enter your gmail..."
          ></FieldForm>
          <FieldForm
            labelName="Password"
            placeholder="Enter your password..."
          ></FieldForm>
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
    </>
  );
};

SignUpForm.propTypes = {};

export default SignUpForm;

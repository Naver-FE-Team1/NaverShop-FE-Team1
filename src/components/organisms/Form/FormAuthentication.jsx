import React from "react";
import { Form } from "formik";
import PropTypes from "prop-types";
const FormAuthentication = ({
  children,
  forgetContent = false,
  onSubmit = () => {},
}) => {
  // use yup for validation

  return (
    <Form
      style={{
        paddingBottom: "10px",
      }}
    >
      {children}
    </Form>
  );
};

FormAuthentication.propTypes = {};

export default FormAuthentication;

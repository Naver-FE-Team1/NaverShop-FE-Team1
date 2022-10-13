import React from "react";
import { Form } from "formik";
import PropTypes from "prop-types";
const FormAuthentication = ({ children }) => {
  // use yup for validation

  return <Form style={{ marginBottom: "18px" }}>{children}</Form>;
};

FormAuthentication.propTypes = {};

export default FormAuthentication;

import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";

const FormAuthentication = ({ children }) => {
  return (
    <Formik>
      <Form style={{ marginBottom: "18px" }}>{children}</Form>
    </Formik>
  );
};

FormAuthentication.propTypes = {};

export default FormAuthentication;

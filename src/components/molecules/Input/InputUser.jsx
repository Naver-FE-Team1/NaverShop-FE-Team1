import React, { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import Label from "../../atoms/Label/Label";
const InputUser = ({ type = "text", label = "", ...props }) => {
  const [field, meta] = useField(props);

  console.log(field);
  return (
    <>
      <Label htmlFor={props.name}>
        <p className="field__form-label">{label}</p>
        <input className="input__user" type={type} {...field} {...props} />
        {meta.touched && meta.error ? (
          <p className="input__error">{meta.error}</p>
        ) : null}
      </Label>
    </>
  );
};

InputUser.propTypes = {};

export default InputUser;

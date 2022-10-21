import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const Checkbox = ({ text, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input type="checkbox" name="" {...field} />
        <span>{text}</span>
      </div>
      {meta.touched && meta.error ? (
        <p
          style={{ fontSize: "12px", marginBottom: "10px" }}
          className="input__error"
        >
          {meta.error}
        </p>
      ) : null}
    </>
  );
};

Checkbox.propTypes = {};

export default Checkbox;

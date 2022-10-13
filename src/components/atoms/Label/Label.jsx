import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor = "", ...props }) => {
  return (
    <label className="label__form" htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

Label.propTypes = {};

export default Label;

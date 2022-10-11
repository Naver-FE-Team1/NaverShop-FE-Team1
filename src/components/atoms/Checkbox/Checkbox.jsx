import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ text }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <span>{text}</span>
    </div>
  );
};

Checkbox.propTypes = {};

export default Checkbox;

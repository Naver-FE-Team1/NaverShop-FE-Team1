import React from "react";
import PropTypes from "prop-types";
const ButtonSignUp = ({ icon, text, ...props }) => {
  return (
    <div className="button__signUp" {...props}>
      <a href="" className="button__signUp-link">
        <span className="button__signUp-icon">{icon}</span>
        <span className="button__signUp-text">{text}</span>
      </a>
    </div>
  );
};

ButtonSignUp.propTypes = {};

export default ButtonSignUp;

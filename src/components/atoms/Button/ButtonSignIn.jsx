import React from "react";
import PropTypes from "prop-types";
const ButtonSignIn = ({ click = () => {}, icon, text, ...props }) => {
  return (
    <button onClick={click} type="button" className="button__signUp" {...props}>
      <p style={{ cursor: "pointer" }} href="#" className="button__signUp-link">
        <span className="button__signUp-icon">{icon}</span>
        <span className="button__signUp-text">{text}</span>
      </p>
    </button>
  );
};

ButtonSignIn.propTypes = {};

export default ButtonSignIn;

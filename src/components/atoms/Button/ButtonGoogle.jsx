import React from "react";
import PropTypes from "prop-types";
import Google from "../../../assets/icons/icons svg/Google";
const ButtonGoogle = (props) => {
  return (
    <div className="button__google">
      <a href="" className="button__google-link">
        <span className="button__google-icon">
          <Google></Google>
        </span>
        <span className="button__google-text">Sign in with Google</span>
      </a>
    </div>
  );
};

ButtonGoogle.propTypes = {};

export default ButtonGoogle;

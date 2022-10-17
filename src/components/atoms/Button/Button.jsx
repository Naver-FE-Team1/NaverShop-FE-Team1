import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Button = ({
  handleClick,
  content,
  radius,
  color,
  fontSize,
  borderColor,
  backgroundColor,
  width,
  height,
  navigate = "",
  type = "submit",
}) => {
  return (
    <>
      {navigate === "" ? (
        <button
          style={{
            fontSize: `${fontSize}px`,
            borderRadius: `${radius}px`,
            color: color,
            border: `1px solid ${borderColor}`,
            backgroundColor: backgroundColor,
            width: width,
            height: height,
          }}
          className="btn"
          type={type}
          onClick={handleClick}
        >
          {content}
        </button>
      ) : (
        <NavLink
          style={{
            fontSize: `${fontSize}px`,
            borderRadius: `${radius}px`,
            color: color,
            border: `1px solid ${borderColor}`,
            backgroundColor: backgroundColor,
            width: width,
            height: height,
          }}
          className="btn"
          to={navigate}
        >
          {content}
        </NavLink>
      )}
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  radius: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Button.defaultProps = {
  content: "",
  radius: null,
  color: null,
  fontSize: 16,
  borderColor: null,
  backgroundColor: null,
  width: null,
  height: null,
};

export default Button;

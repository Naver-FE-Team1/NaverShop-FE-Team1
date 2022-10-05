/*
 * Button component
 * file: Button.jsx
 */
import React from "react";

const Button = ({ content, color, backgroundColor, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{ color: color, backgroundColor: backgroundColor }}
      className="btn"
    >
      {content}
    </button>
  );
};

export default Button;

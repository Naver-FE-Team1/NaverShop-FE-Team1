import React, { useState } from "react";
import PropTypes from "prop-types";

const InputUser = ({ name, type = "text", ...props }) => {
  const [style, setStyle] = useState({});

  function textChange(e) {
    if (e.target.value === "") setStyle({ border: "1px solid gray" });
    else setStyle({ border: "1px solid red" });
  }
  return (
    <input
      onChange={textChange}
      className="input__user"
      style={style}
      id={name}
      type={type}
      {...props}
    />
  );
};

InputUser.propTypes = {};

export default InputUser;

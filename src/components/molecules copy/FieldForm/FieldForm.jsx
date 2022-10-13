import React from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import InputUser from "../../molecules/Input/InputUser";

const FieldForm = ({ labelName, type, idName, placeholder }) => {
  return (
    <Label htmlFor={idName}>
      <InputUser
        type={type}
        name={idName}
        placeholder={placeholder}
      ></InputUser>
    </Label>
  );
};

FieldForm.propTypes = {};

export default FieldForm;

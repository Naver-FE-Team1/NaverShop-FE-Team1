import React from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/InputUser";

const FieldForm = ({ labelName, placeholder }) => {
  return (
    <Label htmlFor="email">
      <p className="field__form-label">{labelName}</p>
      <Input id="email" placeholder={placeholder}></Input>
    </Label>
  );
};

FieldForm.propTypes = {};

export default FieldForm;

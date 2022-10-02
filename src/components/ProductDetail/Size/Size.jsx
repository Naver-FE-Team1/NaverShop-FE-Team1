import { Button } from "@mui/material";
import React from "react";
// import "./sizeStyles.scss";

const Size = ({ size }) => {
  return (
    <Button color="black" variant="outlined">
      <p>{size}</p>
    </Button>
  );
};

export default Size;

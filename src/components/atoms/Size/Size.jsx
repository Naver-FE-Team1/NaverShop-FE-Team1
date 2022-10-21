import { Button } from "@mui/material";
import React from "react";

const Size = ({ size, onClick, picked }) => {
  return (
    <Button
      onClick={onClick}
      style={{  border: "1px solid #2A254B" }}
      variant={picked ? "contained" : "outlined"}
    >
      <p>{size}</p>
    </Button>
  );
};

export default Size;

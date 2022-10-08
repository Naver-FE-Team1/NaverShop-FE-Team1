import { Button } from "@mui/material";
import React from "react";

const Size = ({ size }) => {
  return (
    <Button
      style={{ color: "#2A254B", border: "1px solid #2A254B" }}
      variant="outlined"
    >
      <p>{size}</p>
    </Button>
  );
};

export default Size;

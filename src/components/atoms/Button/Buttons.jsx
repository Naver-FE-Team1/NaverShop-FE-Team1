import * as React from "react";
import Button from "@mui/material/Button";
const Buttons = ({ bgColor, color, text }) => {
  return (
    <Button
      style={{
        fontSize: "16px",
        fontWeight: "400",
        backgroundColor: `${bgColor}`,
        width: "100%",
        color: `${color}`,
        padding: "10px",
      }}
      variant="contained"
    >
      <p>{text}</p>
    </Button>
  );
};

export default Buttons;

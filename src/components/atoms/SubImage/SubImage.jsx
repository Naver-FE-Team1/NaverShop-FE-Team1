import { useState, useEffect } from "react";
import "../SubImage/subImage.scss";

const SubImage = ({ onClick, data }) => {
  return (
    <div
      onClick={onClick}
      className="subImage"
      style={{ padding: "15px", display: "flex", justifyContent: "center" }}
    >
      <img
        style={{
          cursor: "pointer",
          height: "160px",
          maxWidth: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        src={data}
        alt={data}
      />
    </div>
  );
};

export default SubImage;

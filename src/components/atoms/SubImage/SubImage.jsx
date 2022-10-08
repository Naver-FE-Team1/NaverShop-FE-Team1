import React from "react";
import "../SubImage/subImage.scss";
const SubImage = ({ src }) => {
  return (
    <div className="subImage" style={{ padding: "15px" }}>
      <img
        style={{
          cursor: "pointer",
          height: "160px",
          maxWidth: "200px",
          width: "100%",
          objectFit: "cover",
        }}
        src={src ? `${src}` : "https://source.unsplash.com/random"}
        alt=""
      />
    </div>
  );
};

export default SubImage;

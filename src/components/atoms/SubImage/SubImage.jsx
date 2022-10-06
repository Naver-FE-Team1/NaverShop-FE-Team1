import React from "react";

const SubImage = ({ src }) => {
  return (
    <div style={{ padding: "15px" }}>
      <img
        style={{
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

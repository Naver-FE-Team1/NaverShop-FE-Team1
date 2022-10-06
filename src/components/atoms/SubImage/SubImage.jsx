import React from "react";

const SubImage = ({ src }) => {
  return (
    <div className="p-4">
      <img
        style={{ objectFit: "cover" }}
        src={src ? `${src}` : "https://source.unsplash.com/random"}
        alt=""
      />
    </div>
  );
};

export default SubImage;

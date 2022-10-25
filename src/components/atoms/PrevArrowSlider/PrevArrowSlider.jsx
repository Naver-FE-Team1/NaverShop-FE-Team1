import React from "react";

const PrevArrowSlider = (props) => {
  const { className, style, onClick, autoplay } = props;

  return (
    <div
      className={`${className} ${autoplay ? "remove" : ""}`}
      style={{ ...style, display: autoplay && "none !important" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="icon__slider"
      >
        <path
          fill-rule="evenodd"
          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default PrevArrowSlider;

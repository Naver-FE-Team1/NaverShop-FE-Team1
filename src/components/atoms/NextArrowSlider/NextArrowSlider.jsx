import React from "react";
import "../NextArrowSlider/nextArrowSliderStyle.scss";

const NextArrowSlider = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="text-white"
      >
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default NextArrowSlider;
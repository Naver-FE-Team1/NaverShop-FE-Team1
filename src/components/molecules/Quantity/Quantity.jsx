import React, { useState } from "react";
const Quantity = ({ quant, setQuant }) => {
  return (
    <div className="productDetail__quantity-number">
      <span onClick={() => quant > 0 && setQuant((quant) => --quant)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          style={quant > 0 ? { color: "#4e4d93" } : {}}
          className="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15"
          />
        </svg>
      </span>
      <p>{quant}</p>
      <span onClick={() => setQuant((quant) => ++quant)}>
        <svg
          style={{ color: "#4e4d93" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
    </div>
  );
};

export default Quantity;

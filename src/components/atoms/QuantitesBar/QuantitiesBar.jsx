/*
 * The bar use to inscrease/ decrease the amount of product
 * file: QuantitiesBar.jsx
 */
import React from "react";
import PropTypes from "prop-types";

const QuantitiesBar = ({ quantity, handleIncrease, handleDecrease }) => {
  return (
    <div className="quan-bar">
      <div onClick={handleDecrease} className="quan-bar__btn">
        -
      </div>
      <span className="quan-bar__text">{quantity}</span>
      <div onClick={handleIncrease} className="quan-bar__btn">
        +
      </div>
    </div>
  );
};
QuantitiesBar.propTypes = {
  quantity: PropTypes.number,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};
QuantitiesBar.defaultProps = {
  quantity: 0,
  handleDecrease: () => {},
  handleIncrease: () => {},
};
export default QuantitiesBar;

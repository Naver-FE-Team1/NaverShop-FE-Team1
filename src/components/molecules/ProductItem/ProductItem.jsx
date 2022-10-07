/*
 * Product item for checkout in shopping basket
 * file: ProductItem.jsx
 */
import React from "react";
import PropTypes from "prop-types";
import QuantitiesBar from "../../atoms/QuantitesBar/QuantitiesBar";
const ProductItem = ({
  imgScr,
  name,
  description,
  color,
  size,
  price,
  quantity,
}) => {
  return (
    <div className="pro-item">
      <div className="pro-item__container">
        <div className="pro-item__content">
          <div className="pro-item__image">
            <img src={imgScr} />
          </div>
          <div className="pro-item__infor">
            <div className="pro-item__group-text">
              <span className="pro-item__group-text__name">{name}</span>
              <div className="pro-item__group-text__des">{description}</div>
            </div>
            <span className="pro-item__price">
              {color}, {size}
            </span>
            <span className="pro-item__price">£{price}</span>
            <div className="pro-item__quan-bar--mobile">
              <QuantitiesBar quantity={quantity} />
            </div>
          </div>
        </div>
      </div>
      <div className="pro-item__quan-bar--desktop">
        <QuantitiesBar quantity={quantity} />
      </div>
      <div className="pro-item__price--desktop">£{price}</div>
    </div>
  );
};
ProductItem.propTypes = {
  imgScr: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
ProductItem.defaultProps = {
  imgScr: "",
  name: "",
  description: "",
  color: "",
  size: "",
  price: 0,
  quantity: 0,
};
export default ProductItem;

/*
 * The bar above list of product in checkout
 * file: ProductBar.jsx
 */
import React from "react";

const ProductBar = () => {
  return (
    <div className="prod-bar">
      <span className="prod-bar__text prod-bar__text--first">Product</span>
      <span className="prod-bar__text prod-bar__text--second">Quantity</span>
      <span className="prod-bar__text prod-bar__text--last">Total</span>
    </div>
  );
};

export default ProductBar;

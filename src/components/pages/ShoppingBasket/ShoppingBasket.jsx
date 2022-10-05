/*
 * Shopping basket page
 * file: ShoppingBasket.jsx
 */
import React from "react";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import ProductBar from "../../atoms/ProductBar/ProductBar";
import FootBasket from "../../molecules/FootBasket/FootBasket";
import ProductCheckout from "../../organisms/ProductCheckout/ProductCheckout";
const ShoppingBasket = () => {
  return (
    <div className="shopping-basket">
      <HeadTitle content={"Your shopping cart"} />
      <ProductCheckout/>
      <FootBasket total={210} />
    </div>
  );
};

export default ShoppingBasket;

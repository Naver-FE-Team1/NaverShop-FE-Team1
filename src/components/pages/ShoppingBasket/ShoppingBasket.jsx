/*
 * Shopping basket page
 * file: ShoppingBasket.jsx
 */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import FootBasket from "../../molecules/FootBasket/FootBasket";
import ProductCheckout from "../../organisms/ProductCheckout/ProductCheckout";
const ShoppingBasket = () => {
  const dataAmountBasket = useSelector((state) => state.basket.totalAmount);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <div className="">
      <div className="">
        <HeadTitle content={"Your shopping cart"} />
        <ProductCheckout />
        <FootBasket handleClick={handleClick} total={dataAmountBasket} />
      </div>
    </div>
  );
};

export default ShoppingBasket;

/*
 * Shopping basket page
 * file: ShoppingBasket.jsx
 */
import React from "react";
import { useSelector } from "react-redux";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import FootBasket from "../../molecules/FootBasket/FootBasket";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../../contexts/auth-context";

import ProductCheckout from "../../organisms/ProductCheckout/ProductCheckout";
const ShoppingBasket = () => {
  const dataAmountBasket = useSelector((state) => state.basket.totalAmount);
  const { userInfo } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!userInfo) {
      console.log(userInfo);
      navigate("/sign-in");
      console.log(location);
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div className="shopping-basket ">
      <HeadTitle content={"Your shopping cart"} />
      <ProductCheckout />
      <FootBasket handleClick={handleClick} total={dataAmountBasket} />
    </div>
  );
};

export default ShoppingBasket;

/*
 * Shopping basket page
 * file: ShoppingBasket.jsx
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import HeadTitle from "../../atoms/HeadTitle/HeadTitle";
import FootBasket from "../../molecules/FootBasket/FootBasket";
import Footer from "../../molecules/Footer/Footer";
import Header from "../../organisms/Header";
// import ProductCheckout from "../../organisms/ProductCheckout/ProductCheckout";
const ShoppingBasket = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <Header />
      <div className="shopping-basket">
        <HeadTitle content={"Your shopping cart"} />
        {/* <ProductCheckout /> */}
        <FootBasket handleClick={handleClick} total={210} />
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingBasket;

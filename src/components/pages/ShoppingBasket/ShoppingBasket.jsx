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
import { useAuth } from '../../../contexts/auth-context';
import { toast } from 'react-toastify';

const ShoppingBasket = () => {
  const dataAmountBasket = useSelector((state) => state.basket.totalAmount);
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const handleClick = () => {
    if(!userInfo){
      navigate("/sign-in");
      toast.error('You need sign in');
    }else{

      navigate("/checkout");
    }
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

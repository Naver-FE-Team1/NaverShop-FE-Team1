/*
 * Footer in shopping basket
 * file: FootBasket.jsx
 */
import React from "react";
import Button from "../../atoms/Button/Button";
const FootBasket = ({ total, handleClick }) => {
  return (
    <div className="foot-basket">
      <div className="foot-basket__group-text">
        <span className="foot-basket__group-text__sub">Subtotal</span>
        <span className="foot-basket__group-text__price">£{total}</span>
      </div>
      <div className="foot-basket__tax">
        Taxes and shipping are calculated at checkout
      </div>
      <div className="foot-basket__btn">
        <Button content={"Go to checkout"} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FootBasket;

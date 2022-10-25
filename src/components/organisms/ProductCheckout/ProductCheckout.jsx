/*
 * Dislay the product exist in shopping basket
 * file: ProductCheckout.jsx
 */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductBar from "../../atoms/ProductBar/ProductBar";
import ProductItem from "../../molecules/ProductItem/ProductItem";

const ProductCheckout = () => {
  const dataBasket = useSelector((state) => state.basket);
  const { cartItem, totalAmount, totalQuantity } = dataBasket;
  return (
    <div className="shopping-basket-items">
      <ProductBar />
      <div style={{ fontSize: "1rem", paddingBottom: ".5rem" }}>
        Quantities: {totalQuantity}
      </div>
      {cartItem.map((item, index) => {
        return (
          <>
            <ProductItem
              key={item.id}
              id={item.id}
              image={item.image}
              category={item.category}
              desc={item.description}
              sizes={item.sizes}
              color={item.color}
              quantity={item.quantity}
              stock={item.stock}
              price={item.price}
              totalPrice={item.totalPrice}
              productId={item.productId}
              fromBasket={true}
            />
          </>
        );
      })}
    </div>
  );
};

export default ProductCheckout;

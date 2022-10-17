/*
 * Dislay the product exist in shopping basket
 * file: ProductCheckout.jsx
 */
import React, { useEffect } from "react";
import ProductBar from "../../atoms/ProductBar/ProductBar";
import ProductItem from "../../molecules/ProductItem/ProductItem";

const DATA_TEST =
  localStorage.getItem("basket") !== null
    ? JSON.parse(localStorage.getItem("basket")).map((item, idx) => ({
        imgScr: "https://cf.shopee.vn/file/6aba1d32171c02c7e0c3d59a5f75fbb8",
        name: "Graystone vase",
        description: "A timeless ceramic vase with a tri color grey glaze.",
        color: "black",
        size: item.size,
        quantity: item.quantity,
        price: 85,
      }))
    : [];

const ProductCheckout = () => {
  useEffect(() => {
    console.log(localStorage.getItem("basket"));
  }, []);
  return (
    <div>
      <ProductBar />
      {DATA_TEST.map((item, index) => {
        return (
          <ProductItem
            key={index}
            imgScr={item.imgScr}
            name={item.name}
            description={item.description}
            color={item.color}
            size={item.size}
            quantity={item.quantity}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default ProductCheckout;

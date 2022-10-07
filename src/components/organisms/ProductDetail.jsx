import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Buttons from "../atoms/Button/Buttons";
import "../../styles/productDetailStyles.scss";
import Quantity from "../molecules/Quantity/Quantity";
import Size from "../molecules/Size/Size";
import SubImage from "../atoms/SubImage/SubImage";

import SliderSlick from "../molecules/SliderSlick/SliderSlick";
const ProductDetail = () => {
  const sizes = [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
    { id: 4, size: "XL" },
    { id: 5, size: "XXL" },
  ];
  //Number
  var price = 25000000;
  //subImages
  const subImages = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div className="container">
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Grid className="grid" container>
          <Grid item xs={12} lg={6}>
            <Grid>
              <img
                src="https://source.unsplash.com/random"
                className="productDetail-img"
                alt=""
              />
            </Grid>
            <Grid item>
              <SliderSlick>
                {subImages.map((item, index) => (
                  <SubImage
                    key={index}
                    src="https://images.unsplash.com/photo-1664833027898-540676803f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  ></SubImage>
                ))}
              </SliderSlick>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Container maxWidth="sm" style={{ padding: "28px" }}>
              <div className="productDetail__topContent">
                <h3 className="productDetail__topContent-name">
                  The Dandy Chair
                </h3>
                <p className="productDetail__topContent-price">
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
              <div className="productDetail__description">
                <h5 className="productDetail__description-title">
                  Product description
                </h5>
                <p className="productDetail__description-content">
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </p>
                <ul className="productDetail__description-fabric">
                  <li>Product description</li>
                  <li>Product description</li>
                  <li>Product description</li>
                </ul>
              </div>
              <div className="productDetail__dimension">
                <h5 className="productDetail__dimension-title">Dimensions</h5>
                <Grid
                  container
                  spacing={1}
                  sx={{ justifyContent: "space-between" }}
                >
                  {sizes.map((item) => (
                    <Grid item key={item.id}>
                      <Size size={item.size} />
                    </Grid>
                  ))}
                </Grid>
                <div className="productDetail__dimension-colors"></div>
              </div>
              <div className="productDetail__quantity">
                <h5 className="productDetail__quantity-title">Quantity</h5>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Quantity></Quantity>
                  </Grid>
                </Grid>
              </div>
              <div className="productDetail__action">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Buttons
                      bgColor="#2A254B"
                      color="#fff"
                      text="Add to cart"
                    ></Buttons>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Buttons
                      color="#000"
                      bgColor="#fff"
                      text="Add to cart"
                    ></Buttons>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetail;

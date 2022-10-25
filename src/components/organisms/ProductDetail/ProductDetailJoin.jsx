import { Stack, useMediaQuery, Container } from "@mui/material";
import ProductDetailImg from "../../../assets/ProductDetailJoin.png";
import InputSignUp from "../../atoms/InputSignUp";
import "../../../scss/ProductDetail/ProductDetail.scss";

const ProductDetailJoin = () => {
  const lgMatches = useMediaQuery("(min-width:1200px)");
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 1, md: 3 }}
      data-aos="zoom-out"
    >
      <img
        src="https://cmsv2.yame.vn/uploads/2c4e11b3-a5f9-48e7-a35e-fe4106248f5c/Thum_sale_HLW.jpg?quality=80&w=700&h=0"
        alt="halloween sale"
        className="product-join__img"
      />
      <div className="product-join">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="product-join__title">
            Join the club and get the benefits
          </h1>
          <p className="product-join__desc">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <img
          src="https://cmsv2.yame.vn/uploads/210812bb-e5a3-42fa-a29e-aa8b0fe6e9a0/Thum_blog_sale_20.10.jpg?quality=80&w=700&h=0"
          alt="halloween sale"
          className="product-join__img"
          style={{ width: "100%", height: "380px", objectFit: "cover" }}
        />
        <div className="product-join__form"></div>
      </div>
    </Stack>
  );
};

export default ProductDetailJoin;

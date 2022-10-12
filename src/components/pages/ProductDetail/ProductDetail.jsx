import { Stack, Typography } from "@mui/material";
import ProductDetailJoin from "../../organisms/ProductDetail/ProductDetailJoin";
import ProductReview from "../../organisms/ProductDetail/ProductReview";
import ProductDetailList from "../../organisms/ProductDetail/ProductDetailList";
import ProductDetailContent from "../../organisms/ProductDetail/ProductDetailContent";
import Header from "../../organisms/Header";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <ProductDetailContent />
      <ProductDetailJoin />
      <ProductReview />
      {/* <ProductDetailList /> */}
    </>
  );
};

export default ProductDetail;

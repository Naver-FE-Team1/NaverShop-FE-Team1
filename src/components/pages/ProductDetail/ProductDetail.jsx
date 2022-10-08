import { Stack, Typography } from "@mui/material";
import ProductDetailJoin from "../../organisms/ProductDetail/ProductDetailJoin";
import ProductReview from "../../organisms/ProductDetail/ProductReview";
import ProductDetailList from "../../organisms/ProductDetail/ProductDetailList";
import ProductDetailContent from "../../organisms/ProductDetail/ProductDetailContent";

const ProductDetail = () => {
  return (
    <>
      <ProductDetailContent />
      <ProductDetailJoin />
      <ProductReview />
      <ProductDetailList />
    </>
  );
};

export default ProductDetail;

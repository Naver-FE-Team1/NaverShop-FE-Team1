/**
 * Detail of Product Page
 * file: ProductDetail.jsx
 */

import { useEffect } from "react";
import { productDetail } from "../../organisms/ProductDetail/data";
import ProductDetailContent from "../../organisms/ProductDetail/ProductDetailContent";
import ProductDetailJoin from "../../organisms/ProductDetail/ProductDetailJoin";
import ProductDetailList from "../../organisms/ProductDetail/ProductDetailList";
import ProductReview from "../../organisms/ProductDetail/ProductReview";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {productDetail.map((product) => (
        <ProductDetailContent key={product.id} data={product} />
      ))}
      <ProductDetailList />
      <ProductReview />
      <ProductDetailJoin />
    </>
  );
};

export default ProductDetail;

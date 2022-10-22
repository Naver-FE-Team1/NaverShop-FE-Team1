import ProductDetailJoin from "../../organisms/ProductDetail/ProductDetailJoin";
import ProductReview from "../../organisms/ProductDetail/ProductReview";
import ProductDetailList from "../../organisms/ProductDetail/ProductDetailList";
import ProductDetailContent from "../../organisms/ProductDetail/ProductDetailContent";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer/Footer";
import { useEffect } from "react";
import { productDetail } from "../../organisms/ProductDetail/data";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      {productDetail.map((product) => (
        <ProductDetailContent key={product.id} data={product} />
      ))}
      <ProductDetailList />
      <ProductReview />
      <ProductDetailJoin />
      <Footer />
    </>
  );
};

export default ProductDetail;

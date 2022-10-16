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
      <ProductDetailList />
      <ProductReview />
      <ProductDetailJoin />
    </>
  );
};

export default ProductDetail;

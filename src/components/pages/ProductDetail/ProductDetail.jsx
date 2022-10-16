import ProductDetailJoin from "../../organisms/ProductDetail/ProductDetailJoin";
import ProductReview from "../../organisms/ProductDetail/ProductReview";
import ProductDetailList from "../../organisms/ProductDetail/ProductDetailList";
import ProductDetailContent from "../../organisms/ProductDetail/ProductDetailContent";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer/Footer";

const ProductDetail = () => {
  return (
    <>
      <Header />
      <ProductDetailContent />
      <ProductDetailList />
      <ProductReview />
      <ProductDetailJoin />
      <Footer />
    </>
  );
};

export default ProductDetail;

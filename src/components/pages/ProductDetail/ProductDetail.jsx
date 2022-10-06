import { Stack, Typography } from '@mui/material';
import ProductDetailJoin from '../../organisms/ProductDetail/ProductDetailJoin';
import ProductReview from '../../organisms/ProductDetail/ProductReview';
import ProductDetailList from '../../organisms/ProductDetail/ProductDetailList';

const ProductDetail = () => {
  return (
    <>
        <ProductDetailJoin />
        <ProductReview />
        <ProductDetailList /> 
    </>
    
  );
};

export default ProductDetail;

import { Stack, useMediaQuery, Container } from '@mui/material';
import ProductDetailImg from '../../../assets/ProductDetailJoin.png';
import InputSignUp from '../../atoms/InputSignUp';
import '../../../scss/ProductDetail/ProductDetail.scss';

const ProductDetailJoin = () => {
  const lgMatches = useMediaQuery('(min-width:1200px)');
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
        <img
          src={ProductDetailImg}
          alt={ProductDetailImg}
          className='product-join__img'
        />
        <div className='product-join'>
          <div>
            <h1 className='product-join__title'>
              Join the club and get the benefits
            </h1>
            <p className='product-join__desc'>
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
          </div>
          <div className='product-join__form'>
            <InputSignUp />
          </div>
        </div>
      </Stack>
  );
};

export default ProductDetailJoin;

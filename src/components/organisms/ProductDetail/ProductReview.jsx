import {useSelector} from 'react-redux';
import { Grid, Rating, Stack, Slider, Container } from '@mui/material';
import { dataRating, dataReview } from './data';
// import '../../../scss/ProductDetail/ProductDetail.scss';
import ProductReviewDetail from './ProductReviewDetail';
import ProductListRating from './ProductListRating';
import ProductDetailInput from './ProductDetailInput';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const ProductReview = () => {
  // const [disliked, setDisliked] = useState(data.disliked);
  const dataCmts = useSelector((state) => state.comments.allCmts);
  // const localCmts = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  
  // useEffect(() => {
  //   if (!localStorage.getItem('comments')) {
  //     localStorage.setItem('comments', JSON.stringify(dataReview));
  //   }
  // }, []);
  // useEffect(() => {
  //   if (localStorage.getItem('comments')) {
  //     setData(JSON.parse(localStorage.getItem('comments')));
  //   }
  // }, [submitted]);


  return (
    <Container sx={{ padding: '4rem 2rem' }}>
      <Grid container spacing={5} direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={10} md={4}>
          <h1 style={{fontSize: '2rem'}}>{dataRating.length} score rating</h1>
          {dataRating.map((item, index) => (
            <ProductListRating key={index} data={item} />
          ))}
        </Grid>
        <Grid item xs={10} md={5}>
          <h1 style={{fontSize: '2rem'}}>{dataCmts.length} ratings</h1>
          <ProductDetailInput
            width='60px'
            height='60px'
            showRating={true}
            widthInput='40rem'
            dataCmt=''
          />
          {dataCmts.map((data, index) => (
            <ProductReviewDetail key={index} data={data} showRating={true} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductReview;

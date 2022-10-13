import { Grid, Rating, Stack, Slider } from '@mui/material';
import { dataRating, dataReview } from './data';
// import '../../../scss/ProductDetail/ProductDetail.scss';
import ProductReviewDetail from './ProductReviewDetail';
import ProductListRating from './ProductListRating';
import ProductDetailInput from './ProductDetailInput';
import {useEffect, useRef} from 'react';
import {useState} from 'react';


const ProductReview = () => {
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false)
  // const [disliked, setDisliked] = useState(data.disliked);
  // const localCmts = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  useEffect(() => {
    if(!(localStorage.getItem('comments'))){
      localStorage.setItem('comments', JSON.stringify(dataReview))
    }
  }, [])
  useEffect(() => {
    if(localStorage.getItem('comments')){
      setData(JSON.parse(localStorage.getItem('comments')))
    }
  }, [submitted])
  const onChangeCmt = () => {
    setSubmitted(!submitted)
  }
  
  return (
    <Grid
      container
      spacing={5}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ padding: '2rem' }}
    >
      <Grid item xs={10} md={4}>
        <h1>{dataRating.length} course rating</h1>
        {dataRating.map((item, index) => (
          <ProductListRating key={index} data={item}/>         
        ))}
      </Grid>
      <Grid item xs={10} md={6}>
        <h1>{data.length} ratings</h1>
        <ProductDetailInput width='60px' height='60px' showRating={true} widthInput='40rem' idCmt='' onChangeCmt={onChangeCmt}/>
        {data.map((data, index) => (
          <ProductReviewDetail key={index} data={data} showRating={true}/>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductReview;

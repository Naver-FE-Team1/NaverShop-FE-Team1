import { Grid, Rating, Stack, Slider } from '@mui/material';
import { dataRating, dataReview } from './data';
import '../../../scss/ProductDetail/ProductDetail.scss';
import ProductViewDetail from './ProductReviewDetail';
import ProductListRating from './ProductListRating';
import ProductDetailInput from './ProductDetailInput';

const ProductReview = () => {
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
      <Grid item xs={10} md={8}>
        <h1>{dataReview.length} ratings</h1>
        <ProductDetailInput />
        {dataReview.map((data, index) => (
          <ProductViewDetail key={index} data={data}/>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductReview;

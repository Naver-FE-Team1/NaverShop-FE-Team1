import { Rating, Stack, Slider } from '@mui/material';

const ProductListRating = ({data}) => {
  return (
    <Stack direction='row' spacing={2} key={data.scores}>
      <Slider
        defaultValue={data.value}
        step={10}
        marks
        min={10}
        max={100}
        disabled
      />
      <Rating name='read-only' value={data.scores} readOnly />
    </Stack>
  );
};

export default ProductListRating;

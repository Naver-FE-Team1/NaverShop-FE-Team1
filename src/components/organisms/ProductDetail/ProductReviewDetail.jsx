import {useState, useRef} from 'react';
import { Grid, Rating, Stack, Avatar, Slider, Divider } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import '../../../scss/ProductDetail/ProductDetail.scss';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const ProductReviewDetail = ({data}) => {
  const[like, setLike] = useState(false)
  const[dislike, setDislike] = useState(false)
  const handleLike = () => {
    setLike(!like);
    console.log(like)
    if(!like){
      data.liked++;
      
    }
    if(like){
      data.liked--;
    }

    if(!like && dislike){
      setDislike(false)
      data.disliked--;
    }
  }
  const handleDisLike = () => {
    setDislike(!dislike);
    if(!dislike){
      data.disliked++;
      
    }
    if(dislike){
      data.disliked--;
    }
    if(like && !dislike){
      setLike(false)
      data.liked--;
    }
  }
  return (
    <>
        <Divider sx={{marginTop: '20px'}}/>
        <Stack
          direction='row'
          spacing={2}
          sx={{
            alignItems: 'center',
            paddingTop: '1rem',
          }}
        >
          <Avatar src='/broken-image.jpg' />
          <Stack direction='column'>
            <span>
              <strong>{data.author}</strong>
            </span>
            <Stack direction='row' spacing={2}>
              <Rating name='read-only' value={data.rating} readOnly />
              <span> {data.created}</span>
            </Stack>
          </Stack>
        </Stack>
        <Grid item xs={10} md={10}>
          <p
            style={{
              textAlign: 'justify',
              paddingLeft: '.5rem',
            }}
          >
            {data.content}
          </p>
        </Grid>
        <Stack direction='row' spacing={3}>
            <Stack direction='row' spacing={1} className={like ? 'product-review active' : 'product-review'}  onClick={handleLike} >
              <ThumbUpOffAltIcon />
              <span>{data.liked}</span>
            </Stack>
            <Stack direction='row' spacing={1} className={dislike ? 'product-review active' : 'product-review'} onClick={handleDisLike}>
              <ThumbDownOffAltIcon />
              <span>{data.disliked}</span>
            </Stack>
            <a href="" style={{color: '#2A254B'}}>reply</a>
        </Stack>
    </>
  )
}

export default ProductReviewDetail

import { useState, useRef, useEffect } from 'react';
import { Grid, Rating, Stack, Avatar, Slider, Divider } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import '../../../scss/ProductDetail/ProductDetail.scss';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ProductDetailInput from './ProductDetailInput';

const ProductReviewDetail = ({ data, ml, showRating }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [reply, setReply] = useState(false);
  const [liked, setLiked] = useState(data.liked);
  const [disliked, setDisliked] = useState(data.disliked);
  const [dataCmts, setDataCmts] = useState([]);
  const [submitted, setSubmitted] = useState(false)
  const handleLike = () => {
    setLike(!like);
    if (!like) {
      setLiked((data) => data + 1);
    }
    if (like) {
      setLiked((data) => data - 1);
    }
    if (!like && dislike) {
      setDislike(false);
      setDisliked((data) => data - 1);
    }
  };
  const handleDisLike = () => {
    setDislike(!dislike);
    if (!dislike) {
      setDisliked((data) => data + 1);
    }
    if (dislike) {
      setDisliked((data) => data - 1);
    }
    if (like && !dislike) {
      setLike(false);
      setLiked((data) => data - 1);
    }
  };

  const handleToggleReply = () => {
    setReply(!reply);
  };
  console.log(data.id);
  useEffect(() => {
    if (localStorage.getItem('comments')) {
      setDataCmts(JSON.parse(localStorage.getItem('comments')));
    }
  }, [localStorage.getItem('comments'), submitted]);
  const onChangeCmt = () => {
    setSubmitted(!submitted);
  }
  useEffect(() => {
    dataCmts.map((item) => {
      if (item.id === data.id) {
        item.liked = liked;
        item.disliked = disliked;
      }
      if (item.subComments.length > 0) {
        item.subComments.map((subCmt) => {
          if (subCmt.id === data.id) {
            subCmt.liked = liked;
            subCmt.disliked = disliked;
          }
        });
      }
    });
    

    localStorage.setItem('comments', JSON.stringify(dataCmts));
  }, [liked, disliked, localStorage.getItem('comments')]);

  return (
    <Stack sx={{ marginLeft: ml }}>
      <Divider sx={{ marginTop: '20px' }} />
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
            {showRating ? (
              <Rating name='read-only' value={data.rating} readOnly />
            ) : (
              ''
            )}
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
        <Stack
          direction='row'
          spacing={1}
          className={like ? 'product-review active' : 'product-review'}
          onClick={() => handleLike()}
        >
          <ThumbUpOffAltIcon />
          <span>{liked}</span>
        </Stack>
        <Stack
          direction='row'
          spacing={1}
          className={dislike ? 'product-review active' : 'product-review'}
          onClick={() => handleDisLike()}
        >
          <ThumbDownOffAltIcon />
          <span>{disliked}</span>
        </Stack>
        <p
          style={{ color: '#2A254B', cursor: 'pointer' }}
          onClick={handleToggleReply}
        >
          {!reply ? 'reply' : 'cancel'}
        </p>
      </Stack>
      {reply ? (
        <ProductDetailInput
          width='40px'
          height='40px'
          showRating={false}
          widthInput='35rem'
          idCmt={data.parentId}
          onChangeCmt={onChangeCmt}
        />
      ) : (
        ''
      )}
      {data.subComments &&
        data.subComments.map((item) => 
          <ProductReviewDetail ml='3rem' data={item} showRating={false} />)}
    </Stack>
  );
};

export default ProductReviewDetail;

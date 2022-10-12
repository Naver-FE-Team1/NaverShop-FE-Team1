import {
  Stack,
  TextField,
  Rating,
  Avatar,
  Button,
  useMediaQuery,
  FormControl,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef, useEffect } from 'react';

const ProductDetailInput = ({ width, height, showRating, widthInput, idCmt, onChangeCmt }) => {
  const [comment, setComment] = useState('')
  const [data, setData] = useState([])
  const lgMatches = useMediaQuery('(min-width:1200px)');
  const [value, setValue] = useState(2);
  const focus = useRef(null)
  const handleCommentInput = (e) => {
    setComment(e.target.value)
  }
  useEffect(() => {
    if(localStorage.getItem('comments')){
      setData(JSON.parse(localStorage.getItem('comments')))
    }
  }, [localStorage.getItem('comments')])
  const handleSubmit = (e) => {
    e.preventDefault()
    const dataCmt = {
      id: '6',
      author: 'Dang',
      content: comment,
      rating: value,
      created: new Date,
      liked: 0,
      dislike: 0,
      parentId: idCmt,
      subComments: []
    }
    const newData = [dataCmt,...data];
    // dataCmts.current.map((item) => {
    //   if(data.parentId === ''){
    //     newData = [...dataCmts.current, data];
    //   }
    //   item.subComments.map((subCmt) => {
    //     if(data.parentId === subCmt.parentId){
    //       subCmt.
    //     }
    //   })
    // })
    localStorage.setItem('comments', JSON.stringify(newData));
    onChangeCmt()
    setComment('')
    focus.current.focus();
  };
  const handleClearForm = () => {
    setComment('')
  }
  return (
    <Stack direction='row' spacing={2} sx={{ margin: '1rem 0' }}>
      <Avatar src='/broken-image.jpg' sx={{ width: width, height: height }} />
      <Stack style={{ display: 'inline' }} sx={{ width: '100%' }}>
        {showRating ? (
          <Rating
            name='simple-controlled'
            value={value}
            onChange={(event, newEvent) => {
              setValue(newEvent);
            }}
          />
        ) : (
          ''
        )}

        <form onSubmit={handleSubmit}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={5}
            sx={{ width: lgMatches ? widthInput : '100%' }}
          >
            <TextField
              id='standard-basic'
              label='Viết bình luận....'
              variant='standard'
              name='comment'
              value={comment}
              fullWidth
              style={{ display: 'inline' }}
              onChange={handleCommentInput}
              ref={focus}
            />
            <Stack direction='row' spacing={2} sx={{ alignItems: 'flex-end' }}>
              <Button
                variant='contained'
                endIcon={<SendIcon />}
                type='submit'
                value='submit'
                sx={{
                  background: '#2A254B',
                  width: '100px',
                  height: '40px',
                  borderRadius: '20px',
                  '&:hover': {
                    background: '#2A254B',
                  },
                }}
              >
                Send
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                sx={{
                  width: '100px',
                  height: '40px',
                  borderRadius: '20px',
                  color: '#2A254B',
                }}
                onClick={handleClearForm}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default ProductDetailInput;

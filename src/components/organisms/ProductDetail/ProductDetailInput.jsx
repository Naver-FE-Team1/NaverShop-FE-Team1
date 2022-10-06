import {
  Stack,
  TextField,
  Rating,
  Avatar,
  Button,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react';

const ProductDetailInput = () => {
  const lgMatches = useMediaQuery('(min-width:1200px)');
  const [value, setValue] = useState(2);
  return (
    <Stack
      direction='row'
      spacing={2}
    >
      <Avatar src='/broken-image.jpg' sx={{ width: 56, height: 56 }} />
      <Stack style={{display: 'inline'}}>
        <Rating name='simple-controlled' value={value} onChange={(event, newEvent) => { setValue(newEvent)}}/>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={5}
          
          sx={{ width: lgMatches ? '40rem' : '100%' }}
        >
          <TextField
            id='standard-basic'
            label='Viết bình luận....'
            variant='standard'
            fullWidth
            style={{display: 'inline'}}
          />
          <Stack direction='row' spacing={2}>
            <Button
              variant='contained'
              endIcon={<SendIcon />}
              sx={{
                background: '#2A254B',
                width: '120px',
                height: '50px',
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
                width: '120px',
                height: '50px',
                borderRadius: '20px',
                color: '#2A254B',
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetailInput;

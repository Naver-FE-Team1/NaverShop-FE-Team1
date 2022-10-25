import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
import { addBasket } from '../../../store/reducers/basketSlice';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import '../../../scss/ProductDetail/ProductDetailContent.scss';
import Button from '../../atoms/Button/Button';
import Quantity from '../../molecules/Quantity/Quantity';
import Size from '../../atoms/Size/Size';
import SubImage from '../../atoms/SubImage/SubImage';
import SliderSlick from '../../molecules/SliderSlick/SliderSlick';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
const ProductDetailContent = ({
  data,
  sizePicker,
  setSizePicker,
  setQuant,
  quant,
  listImages,
  setColorPicker,
  colorPicker,
  productId,
}) => {
  //state này để lưu size S,M,L,...
  //ban đầu ấn add to basket sẽ lưu vô local
  // const [sizePicker, setSizePicker] = useState(data.sizes[0]);
  // const [quant, setQuant] = useState(1);
  //Lấy ra ở đây để dùng trong các trường hợp query 1 sản phẩm theo id
  const [defaultImage, setDefaultImage] = useState(data.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mdMatches = useMediaQuery('(min-width:600px)');
  const lgMatches = useMediaQuery('(min-width:1200px)');

  const handleAddtoCart = () => {
    if (quant < 1) {
      toast.error('Please choose quantity');
    } else {
      console.log(colorPicker);
      const productStringify = {
        id: nanoid(),
        category: data.category,
        price: data.price,
        description: data.description,
        quantity: quant,
        sizes: sizePicker,
        stock: data.quantities,
        color: colorPicker,
        image: data.image,
        totalPrice: data.price * quant,
        productId: productId,
      };
      dispatch(addBasket(productStringify));
    }
  };
  
  const handleChangeDefaultImage = (src) => {
    setDefaultImage(src);
  };
  const handleSetColor = (color) => {
    console.log(color)
    setColorPicker(color);
  };
  return (
    <div className='container'>
      <Container style={{ padding: 0 }}>
        <Grid className='grid' container>
          <Grid item xs={12} lg={6}>
            <Grid>
              <img
                src={defaultImage ? defaultImage : data.image}
                className='productDetail-img'
                alt={defaultImage ? defaultImage : data.image}
              />
            </Grid>
            <Grid item>
              <SliderSlick
                showItem={listImages?.length < 3 ? listImages?.length : 3}
              >
                {listImages?.map((item, idx) => (
                  <SubImage
                    key={idx}
                    data={item}
                    onClick={() => {
                      handleChangeDefaultImage(item);
                    }}
                  />
                ))}
              </SliderSlick>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Container maxWidth='sm' style={{ padding: '28px' }}>
              <div className='productDetail__topContent'>
                <h3 className='productDetail__topContent-name'>{data.name}</h3>
                <p className='productDetail__topContent-price'>
                  {data?.price?.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </p>
              </div>
              <div className='productDetail__description'>
                <h5 className='productDetail__description-title'>
                  Product description
                </h5>
                <p className='productDetail__description-content'>
                  {parse(data.description || '')}
                </p>
              </div>
              <div className='productDetail__dimension'>
                <h5 className='productDetail__dimension-title'>Dimensions</h5>
                <Grid
                  container
                  spacing={1}
                  sx={{ justifyContent: 'space-between' }}
                >
                  {data?.sizes?.map((item, idx) => (
                    <Grid item key={idx}>
                      <Size
                        picked={sizePicker === item}
                        onClick={() => setSizePicker(item)}
                        size={item}
                      />
                    </Grid>
                  ))}
                </Grid>
                <div className='productDetail__dimension-colors'></div>
              </div>
              <ul className='productDetail__description-colors'>
                {data.color?.map((item, idx) => (
                  <li
                    className='productDetail__description-color'
                    style={{
                      backgroundColor: item,
                      border:
                        colorPicker === item
                          ? `3px solid ${item}`
                          : ` 3px #fff solid`,
                    }}
                    onClick={handleSetColor.bind(this, item)}
                  ></li>
                ))}
              </ul>
              <div className='productDetail__quantity'>
                <h5 className='productDetail__quantity-title'>Quantity</h5>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Quantity
                      setQuant={setQuant}
                      quant={quant}
                      limit={data.quantities}
                    />
                  </Grid>
                  <div className='productDetail__dimension-colors'></div>
                </Grid>
              </div>
            
              <div className='productDetail__action'>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Button
                      backgroundColor='#2A254B'
                      color='#fff'
                      content='Add to cart'

                      handleClick={handleAddtoCart}
                    ></Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button
                      color='#000'
                      bgColor='#fff'
                      content='Buy now'
                      handleClick={() => navigate('/checkout')}
                    ></Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetailContent;

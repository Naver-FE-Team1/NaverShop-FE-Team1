/*
 * Product item for checkout in shopping basket
 * file: ProductItem.jsx
 */
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../store/reducers/basketSlice';
import Quantity from '../../molecules/Quantity/Quantity';
import PropTypes from 'prop-types';
import QuantitiesBar from '../../atoms/QuantitesBar/QuantitiesBar';
import DeleteIcon from '@mui/icons-material/Delete';
import parse from 'html-react-parser';

const ProductItem = ({
  id,
  image,
  category,
  desc,
  totalPrice,
  sizes,
  price,
  quantity,
  fromBasket,
  stock,
  color,
}) => {
  const [quant, setQuant] = useState(quantity);
  const dispatch = useDispatch();
  const handleDeleteItem = (id) => {
    dispatch(removeItem(id));
    toast.success('Xóa sản phẩm thành công');
  };
  return (
    <div className='pro-item'>
      <div className='pro-item__container'>
        <div className='pro-item__content'>
          <div className='pro-item__image'>
            <img src={image} alt='image of the product' />
          </div>
          <div className='pro-item__infor'>
            <div className='pro-item__group-text'>
              <span className='pro-item__group-text__name'>{category}</span>
              <div className='pro-item__group-text__des'>
                {parse(desc || '')}
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '3rem'}}>
              <div className='pro-item__price'>{sizes}</div>
              {" , "}
              <div
                style={{
                  backgroundColor: color,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 4px'
                }}
              >
              </div>

            </div>
            <span className='pro-item__price'>
              {price.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
              })}
            </span>
            <div className='pro-item__quan-bar--mobile'>
              {/* <Quantity setQuant={setQuant} quant={quant} /> */}
              <QuantitiesBar
                basketId={id}
                quantity={quant}
                setQuantity={setQuant}
                fromBasket={fromBasket}
                limit={stock}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='pro-item__quan-bar--desktop'>
        {/* <Quantity setQuant={setQuant} quant={quant} /> */}
        {
          <QuantitiesBar
            basketId={id}
            quantity={quant}
            setQuantity={setQuant}
            fromBasket={fromBasket}
            limit={stock}
          />
        }
      </div>
      <div className='pro-item__price--desktop'>
        {totalPrice.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        })}
      </div>
      <div className='pro-item__delete--desktop'>
        {fromBasket ? (
          <DeleteIcon onClick={handleDeleteItem.bind(this, id)} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
ProductItem.propTypes = {
  id: PropTypes.string,
  srcImg: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  totalPrice: PropTypes.number,
  sizes: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};
ProductItem.defaultProps = {
  id: '',
  srcImg: '',
  title: '',
  desc: '',
  totalPrice: 0,
  sizes: '',
  price: 0,
  quantity: 0,
};
export default ProductItem;

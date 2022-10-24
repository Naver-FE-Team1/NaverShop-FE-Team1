/*
 * The bar use to inscrease/ decrease the amount of product
 * file: QuantitiesBar.jsx
 */
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../store/reducers/basketSlice';
import PropTypes from 'prop-types';

const QuantitiesBar = ({ basketId, quantity, setQuantity, limit, fromBasket }) => {
  const dispatch = useDispatch();
  const handleIncrementItem = () => {
    if (fromBasket) {
      if( quantity >= limit) {
        toast.error(`Product quantity in stock is not enough`);
      }else{
        setQuantity(++quantity);
        const newData = {
          id: basketId,
          quantity,
        };
        dispatch(increment(newData));

      }
    }
  };
  const handleDecrementItem = () => {
    if (quantity > 0 && fromBasket) {
      setQuantity(--quantity);
      const newData = {
        id: basketId,
        quantity,
      };
      dispatch(decrement(newData));
    }
  };
  return (
    <div
      className='quan-bar'
      style={fromBasket ? {} : { justifyContent: 'center' }}
    >
      {fromBasket ? (
        <div onClick={handleDecrementItem} className='quan-bar__btn'>
          -
        </div>
      ) : (
        ''
      )}
      <span className='quan-bar__text'>{quantity}</span>
      {fromBasket ? (
        <div onClick={handleIncrementItem} className='quan-bar__btn'>
          +
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
QuantitiesBar.propTypes = {
  quantity: PropTypes.number,
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
};
QuantitiesBar.defaultProps = {
  quantity: 0,
  handleDecrease: () => {},
  handleIncrease: () => {},
};
export default QuantitiesBar;

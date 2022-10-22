import cmtReducer from './commentSlice';
import basketReducer from './basketSlice';
import productsReducer from './productsSlice';

export const rootReducers = {
  comments: cmtReducer,
  basket: basketReducer,
  products: productsReducer,
};

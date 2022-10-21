import cmtReducer from "./commentSlice";
import productsReducer from "./productsSlice";

export const rootReducers = {
  comments: cmtReducer,
  products: productsReducer,
};

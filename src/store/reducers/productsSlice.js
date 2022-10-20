import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    addProducts(state, action) {
      // state.products.push({ data: action.payload.data, id: action.payload.id });
      // state.filteredProducts.push({
      //   data: action.payload.data,
      //   id: action.payload.id,
      // });
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts(state, action) {
      if (action.payload.data === null) {
        state.filteredProducts = [];
      } else {
        // state.filteredProducts = [];
        state.filteredProducts = action.payload;
      }
    },
  },
});

//get reducer and action in redux slice
const { actions, reducer } = productsSlice;

export const { addProducts, filterProducts } = actions;

export default reducer;

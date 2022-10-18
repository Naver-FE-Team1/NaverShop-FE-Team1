import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts(state, action) {
      state.products.push({ data: action.payload.data, id: action.payload.id });
    },
  },
});

//get reducer and action in redux slice
const { actions, reducer } = productsSlice;

export const { addProducts } = actions;

export default reducer;

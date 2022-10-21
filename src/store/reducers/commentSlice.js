import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    allCmts: [
      {
        author: "Dang",
        content: "Hai Dang",
      },
    ],
  },
  reducers: {},
});

//get reducer and action in redux slice
const { actions, reducer } = commentSlice;

export const {} = actions;

export default reducer;

import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { dataReview } from '../../components/organisms/ProductDetail/data';

const commentLocal = localStorage.getItem('comments')
  ? JSON.parse(localStorage.getItem('comments'))
  : [];
const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    allCmts: [],
  },
  reducers: {
    getCmts(state, action) {
      state.allCmts = action.payload;
    },
    addCmt(state, action) {
      state.allCmts.unshift(action.payload);
    },
    deleteCmt(state, action) {
      const cmtId = action.payload;
      state.allCmts = state.allCmts.filter((cmt) => cmt.id !== cmtId);
    },
    editCmt(state, action) {
      const result = action.payload;
      const cmtCurrent = state.allCmts.findIndex((id) => id.id === result.id);
      if (cmtCurrent >= 0) {
        state.allCmts[cmtCurrent] = result;
      }
    },
  },
});

//get reducer and action in redux slice
const { actions, reducer } = commentSlice;

export const { addCmt, deleteCmt, editCmt } = actions;

export default reducer;

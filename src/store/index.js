/**
 * Redux store
 * file: (store/reducers) index.js
 */

import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducers,
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import amountReducer from './amountSlice';
import termReducer from './termSlice';

export default configureStore({
  reducer: {
    amount: amountReducer,
    term: termReducer,
  },
})

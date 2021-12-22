import { configureStore } from '@reduxjs/toolkit';
import amountReducer from './amountSlice';

export default configureStore({
  reducer: {
    amount: amountReducer,
  },
})

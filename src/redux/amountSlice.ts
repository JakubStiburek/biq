import {createSlice} from "@reduxjs/toolkit";


export const amountSlice = createSlice({
  name: 'amount',
  initialState: {
    value: 0,
    fetching: true,
  },
  reducers: {
    setAmountValue: (state, loadValue) => {
      state.value = loadValue.payload;
    },
    toggleAmountFetching: (state) => {
      state.fetching = !state.fetching;
    }
  }
})

export const { setAmountValue, toggleAmountFetching } = amountSlice.actions;

export default amountSlice.reducer;

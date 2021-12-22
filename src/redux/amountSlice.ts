import {createSlice} from "@reduxjs/toolkit";


export const amountSlice = createSlice({
  name: 'amount',
  initialState: {
    value: 0,
  },
  reducers: {
    setAmountValue: (state, loadValue) => {
      state.value = loadValue.payload;
    },
  }
})

export const { setAmountValue } = amountSlice.actions;

export default amountSlice.reducer;

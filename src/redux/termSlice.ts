import {createSlice} from "@reduxjs/toolkit";


export const termSlice = createSlice({
  name: 'term',
  initialState: {
    value: 0,
  },
  reducers: {
    setTermValue: (state, loadValue) => {
      state.value = loadValue.payload;
    },
  }
})

export const { setTermValue } = termSlice.actions;

export default termSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";


export const termSlice = createSlice({
  name: 'term',
  initialState: {
    value: 0,
    fetching: true,
  },
  reducers: {
    setTermValue: (state, loadValue) => {
      state.value = loadValue.payload;
    },
    toggleTermFetching: (state) => {
      state.fetching = !state.fetching;
    }
  }
})

export const { setTermValue, toggleTermFetching } = termSlice.actions;

export default termSlice.reducer;

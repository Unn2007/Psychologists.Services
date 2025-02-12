import { createSlice } from '@reduxjs/toolkit';

const filterOptionSlice = createSlice({
  name: 'filters',
  initialState: { option: '' },
  reducers: {
    setSelectedOption(state, action) {
      state.option = action.payload;
    },
  },
});

export const { setSelectedOption } = filterOptionSlice.actions;
export const filtersReducer = filterOptionSlice.reducer;

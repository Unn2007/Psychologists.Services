import { createSlice } from '@reduxjs/toolkit';
import { fetchPsychologists, fetchNextPage, addAppointmen } from './operations';

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: {
    items: [],
    lastKey: undefined,
    total: 0,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, handlePending)
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        const { psychologists, lastKey, total } = action.payload;
        state.page = 1;
        state.lastKey = lastKey;
        state.loading = false;
        state.error = null;
        state.items = psychologists;
        state.total = total;
      })
      .addCase(fetchPsychologists.rejected, handleRejected)
      .addCase(fetchNextPage.pending, handlePending)
      .addCase(fetchNextPage.fulfilled, (state, action) => {
        const { psychologists, lastKey } = action.payload;
        state.lastKey = lastKey;
        state.loading = false;
        state.error = null;
        state.items.push(...psychologists);
      })
      .addCase(fetchNextPage.rejected, handleRejected)
      .addCase(addAppointmen.pending, handlePending)
      .addCase(addAppointmen.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addAppointmen.rejected, handleRejected);
  },
});

export const psychologistsReducer = psychologistsSlice.reducer;
export const { nextPage } = psychologistsSlice.actions;

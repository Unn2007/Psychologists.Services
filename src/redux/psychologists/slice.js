import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPsychologists,
  fetchNextPage,
  addAppointmen,
  addFavorite,
  getFavorite,
  fetchFavoritePsychologists,
} from './operations';

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
    favoriteItems:[],
    lastKey: undefined,
    total: 0,
    page: 1,
    favorites: [],

    loading: false,
    error: null,
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    clearFavorites(state) {
      state.favorites = [];
    },
    pushFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    popFavorites(state, action) {
      const newList = state.favorites.filter((item) => item !== action.payload);
      state.favorites = [...newList];
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
        state.items.push(...psychologists);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchNextPage.rejected, handleRejected)
      .addCase(addAppointmen.pending, handlePending)
      .addCase(addAppointmen.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addAppointmen.rejected, handleRejected)
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(getFavorite.pending, handlePending)
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.favorites = [...action.payload.favorites];
        state.loading = false;
        state.error = null;
      })
      .addCase(getFavorite.rejected, handleRejected)
      .addCase(fetchFavoritePsychologists.pending, handlePending)
      .addCase(fetchFavoritePsychologists.fulfilled, (state, action) => {
        console.log(action.payload)
        state.favoriteItems = [...action.payload];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavoritePsychologists.rejected, handleRejected);
  },
});

export const psychologistsReducer = psychologistsSlice.reducer;
export const { nextPage, clearFavorites, pushFavorites, popFavorites } =
  psychologistsSlice.actions;

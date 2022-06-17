import { createSlice } from '@reduxjs/toolkit';
import reviewsOperations from './reviews-operations';

const initialState = {
  isFetching: false,
  list: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [reviewsOperations.fetch.pending]: (state) => {
      state.isFetching = true;
    },
    [reviewsOperations.fetch.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.list = payload;
    },
    [reviewsOperations.fetch.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export default reviewsSlice.reducer;

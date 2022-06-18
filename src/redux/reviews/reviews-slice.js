import { createSlice } from '@reduxjs/toolkit';
import reviewsOperations from './reviews-operations';
import { authOperations } from 'redux/auth';

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

    [authOperations.logout.fulfilled]: (state) => {
      state.isFetching = false;
      state.list = [];
    },
  },
});

export default reviewsSlice.reducer;

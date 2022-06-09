import { createSlice } from '@reduxjs/toolkit';
import trainingOperations from './training-operations';

const initialState = {
  books: [],
  endDate: '',
  inProgress: false,
  stats: [],
  isFetching: false,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  extraReducers: {
    [trainingOperations.fetch.pending]: (state) => {
      state.isFetching = true;
    },
    [trainingOperations.fetch.fulfilled]: (state, { payload }) => {
      state.books = payload.books;
      state.endDate = payload.endDate;
      state.inProgress = payload.inProgress;
      state.stats = payload.stats;
      state.isFetching = false;
    },
    [trainingOperations.fetch.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export default trainingSlice.reducer;

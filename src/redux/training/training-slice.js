import { createSlice } from '@reduxjs/toolkit';
import trainingOperations from './training-operations';

const initialState = {
  books: [],
  startDate: '',
  endDate: '',
  pagesAmount: 0,
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
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.inProgress = payload.inProgress;
      state.pagesAmount = payload.pagesAmount;
      state.stats = payload.stats;
      state.isFetching = false;
    },
    [trainingOperations.fetch.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export default trainingSlice.reducer;

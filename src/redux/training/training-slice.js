import { createSlice } from '@reduxjs/toolkit';
import trainingOperations from './training-operations';
import { authOperations } from 'redux/auth';

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
      if (payload) {
        state.books = payload.books;
        state.startDate = payload.startDate;
        state.endDate = payload.endDate;
        state.inProgress = payload.inProgress;
        state.pagesAmount = payload.pagesAmount;
        state.stats = payload.stats;
      }
      state.isFetching = false;
    },
    [trainingOperations.fetch.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logout.fulfilled]: (state) => {
      state.books = [];
      state.startDate = '';
      state.endDate = '';
      state.pagesAmount = 0;
      state.inProgress = false;
      state.stats = [];
      state.isFetching = false;
    },
  },
});

export default trainingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import trainingOperations from './training-operations';
import { authOperations } from 'redux/auth';

const initialState = {
  isCompletedTrainingModalOpen: false,
  isCompletedBookModalOpen: false,
  isUpdating: false,
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
  reducers: {
    toggleCompletedTrainingModal: (state) => {
      state.isCompletedTrainingModalOpen = !state.isCompletedTrainingModalOpen;
    },
    toggleCompletedBookModal: (state) => {
      state.isCompletedBookModalOpen = !state.isCompletedBookModalOpen;
    },
  },
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

    [trainingOperations.updatePages.pending]: (state) => {
      state.isUpdating = true;
    },
    [trainingOperations.updatePages.fulfilled]: (state, { payload }) => {
      if (payload.book.pages <= payload.book.pagesRead) {
        state.isCompletedBookModalOpen = true;
        state.isCompletedTrainingModalOpen = false;
      }

      if (!payload.inProgress) {
        state.isCompletedBookModalOpen = false;
        state.isCompletedTrainingModalOpen = true;
      }

      state.books = payload.books;
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
      state.inProgress = payload.inProgress;
      state.pagesAmount = payload.pagesAmount;
      state.stats = payload.stats;
      state.isUpdating = false;
    },
    [trainingOperations.updatePages.rejected]: (state) => {
      state.isUpdating = false;
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

export const trainingActions = trainingSlice.actions;
export default trainingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import libraryOperations from './library-operations';
import { authOperations } from 'redux/auth';

const initialState = {
  isFetching: true,
  books: {
    total: 0,
    pending: [],
    reading: [],
    completed: [],
  },
  foundBooks: [],
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  extraReducers: {
    [libraryOperations.fetch.pending]: (state) => {
      state.isFetching = true;
    },
    [libraryOperations.fetch.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.isFetching = false;
    },
    [libraryOperations.fetch.rejected]: (state) => {
      state.isFetching = false;
    },

    [libraryOperations.createBook.pending]: (state) => {
      state.isFetching = true;
    },
    [libraryOperations.createBook.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.isFetching = false;
    },
    [libraryOperations.createBook.rejected]: (state) => {
      state.isFetching = false;
    },

    [libraryOperations.searchBooks.pending]: (state) => {
      state.isFetching = true;
    },
    [libraryOperations.searchBooks.fulfilled]: (state, { payload }) => {
      state.foundBooks = payload;
      state.isFetching = false;
    },
    [libraryOperations.searchBooks.rejected]: (state) => {
      state.isFetching = false;
    },

    [libraryOperations.updateReview.pending]: (state) => {
      state.isFetching = true;
    },
    [libraryOperations.updateReview.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.isFetching = false;
    },
    [libraryOperations.updateReview.rejected]: (state) => {
      state.isFetching = false;
    },

    [libraryOperations.addReview.pending]: (state) => {
      state.isFetching = true;
    },
    [libraryOperations.addReview.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.isFetching = false;
    },
    [libraryOperations.addReview.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logout.fulfilled]: (state) => {
      state.isFetching = true;
      state.books = {
        total: 0,
        pending: [],
        reading: [],
        completed: [],
      };
      state.foundBooks = [];
    },
  },
});

export default librarySlice.reducer;

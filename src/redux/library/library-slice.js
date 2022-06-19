import { createSlice } from '@reduxjs/toolkit';
import libraryOperations from './library-operations';
import { authOperations } from 'redux/auth';

const initialState = {
  isAddingBook: false,
  isSearching: false,
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
  reducers: {
    clearPredictions: (state) => {
      state.foundBooks = [];
    },
  },
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
      state.isAddingBook = true;
    },
    [libraryOperations.createBook.fulfilled]: (state, { payload }) => {
      state.books.pending = [...state.books.pending, payload];
      state.isAddingBook = false;
    },
    [libraryOperations.createBook.rejected]: (state) => {
      state.isAddingBook = false;
    },

    [libraryOperations.searchBooks.pending]: (state) => {
      state.isSearching = true;
      state.foundBooks = [];
    },
    [libraryOperations.searchBooks.fulfilled]: (state, { payload }) => {
      state.foundBooks = payload;
      state.isSearching = false;
    },
    [libraryOperations.searchBooks.rejected]: (state) => {
      state.isSearching = false;
      state.foundBooks = [];
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

export const libraryActions = librarySlice.actions;
export default librarySlice.reducer;

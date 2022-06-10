import { createSlice } from '@reduxjs/toolkit';
import libraryOperations from './library-operations';

const initialState = {
  isFetching: false,
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
  },
});

export default librarySlice.reducer;

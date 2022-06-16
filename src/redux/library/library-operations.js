import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_LINK;

const notyf = new Notyf();

const fetch = createAsyncThunk(
  'library/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/library');

      return data.result;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const createBook = createAsyncThunk(
  'library/creatBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/books', book);

      return data.result;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const searchBooks = createAsyncThunk(
  'library/searchBooks',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/books/search', query);
      return data.result;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const addReview = createAsyncThunk(
  'library/addReview',
  async (review, { rejectWithValue }) => {
    console.log({ addReview: review });
    try {
      const updated = await axios.post('/books/add-review', review);

      const { data } = await axios.get('/library');

      return data.result;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const updateReview = createAsyncThunk(
  'library/updateReview',
  async (review, { rejectWithValue }) => {
    console.log({ updateReview: review });
    try {
      const updated = await axios.post('/books/update-review', review);

      const { data } = await axios.get('/library');

      return data.result;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const operations = {
  fetch,
  createBook,
  searchBooks,
  addReview,
  updateReview,
};

export default operations;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_LINK;

const fetch = createAsyncThunk(
  'training/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/training');
      return data.result;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const start = createAsyncThunk(
  'training/fetch',
  async (training, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/training', training);

      return data.result;
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const updatePages = createAsyncThunk(
  'training/updatePages',
  async (value, { rejectWithValue }) => {
    try {
      const {
        data: { result },
      } = await axios.post('/training/add-pages', value);

      const { data } = await axios.get('/training');

      return { ...data.result, ...result };
    } catch (err) {
      return rejectWithValue(err?.response?.data);
    }
  }
);

const operations = {
  fetch,
  start,
  updatePages,
};

export default operations;

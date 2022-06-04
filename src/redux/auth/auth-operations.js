import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = {
  set: (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common.Authorization = null;
  },
};

const register = createAsyncThunk('auth/register', async (credentials) => {
  try {
    const { data } = await axios.post('/register', credentials);
    token.set(data.token);
    return data;
  } catch (err) {
    console.error(err);
  }
});

const operations = {
  register,
};

export default operations;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = {
  set: (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async (credentials) => {
  try {
    const { data } = await axios.post('/users/register', credentials);

    token.set(data.token);

    return data;
  } catch (err) {
    console.error(err);
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (err) {
   console.error(err);
  }
});

const operations = {
  register,
  logout,
};

export default operations;

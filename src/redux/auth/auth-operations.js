import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';

import authSelectors from './auth-selectors';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_LINK;

const notyf = new Notyf();

const token = {
  set: (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common.Authorization = null;
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    const { name, email, password } = credentials;

    try {
      const { data } = await axios.post('/register', { name, email, password });

      if (data?.status === 200) {
        const {
          data: { result },
        } = await axios.post('/login', { email, password });

        token.set(result.token);

        return result;
      }

      return data;
    } catch (err) {
      const errorMsg = err?.response?.data?.message;

      if (errorMsg) notyf.error(errorMsg);

      return rejectWithValue(err?.response?.data);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const {
        data: { result },
      } = await axios.post('/login', credentials);

      token.set(result.token);

      return result;
    } catch (err) {
      notyf.error('Incorrect email or password!');
      return rejectWithValue(err.response.data);
    }
  }
);

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/logout');
    token.unset();
  } catch (err) {
    console.error(err);
  }
});

const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = authSelectors.getToken(getState());

    if (persistedToken === null) return rejectWithValue();

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/me');

      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

const operations = {
  register,
  logout,
  refresh,
  login,
};

export default operations;

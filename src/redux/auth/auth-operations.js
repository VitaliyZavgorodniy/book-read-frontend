import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notyf } from 'notyf';

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

        console.log(result);
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

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/logout');
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

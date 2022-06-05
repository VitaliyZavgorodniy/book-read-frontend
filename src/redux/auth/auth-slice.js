import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  token: null,
  name: null,
  avatarURL: null,
  isFetching: false,
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: (state) => {
      state.isFetching = true;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.isFetching = false;
      state.name = payload.name;
      state.avatarURL = null;
    },
    [authOperations.register.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logout.fulfilled](state, action) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;

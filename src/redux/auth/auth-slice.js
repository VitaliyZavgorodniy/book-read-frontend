import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  token: null,
  name: null,
  avatarURL: null,
  isFetching: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refreshToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: {
    [authOperations.register.pending]: (state) => {
      state.isFetching = true;
    },
    [authOperations.register.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
      state.avatarURL = null;
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logout.fulfilled](state, action) {
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.refresh.pending]: (state) => {
      state.isFetching = true;
    },
    [authOperations.refresh.fulfilled]: (state, { payload }) => {
      state.name = payload.name;
      state.avatarURL = payload.avatarURL;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [authOperations.refresh.rejected]: (state) => {
      state.isFetching = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

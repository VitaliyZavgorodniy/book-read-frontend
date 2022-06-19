import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  isNewUser: false,
  token: null,
  name: null,
  avatarURL: null,
  isOnTraining: false,
  isFetching: false,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setNewUser: (state) => {
      console.log('isNewUser');
      state.isNewUser = true;
    },
    refreshToken: (state, { payload }) => {
      state.token = payload;
    },
    setTrainingStatus: (state, { payload }) => {
      state.isOnTraining = payload;
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

    [authOperations.login.pending]: (state) => {
      state.isFetching = true;
    },
    [authOperations.login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
      state.avatarURL = payload.avatarURL;
      state.isOnTraining = payload.isOnTraining;
      state.isFetching = false;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected]: (state) => {
      state.isFetching = false;
    },

    [authOperations.logout.fulfilled]: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.name = null;
      state.avatarURL = null;
      state.isFetching = false;
      state.isOnTraining = false;
      state.isLoading = false;
    },

    [authOperations.refresh.pending]: (state) => {
      state.isLoading = true;
    },
    [authOperations.refresh.fulfilled]: (state, { payload }) => {
      state.name = payload.name;
      state.avatarURL = payload.avatarURL;
      state.isOnTraining = payload.isOnTraining;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.refresh.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

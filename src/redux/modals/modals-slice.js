import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const initialState = {
  isLogoutModalOpen: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleLogoutModal: (state) => {
      state.isLogoutModalOpen = !state.isLogoutModalOpen;
    },
  },
  extraReducers: {
    [authOperations.logout.fulfilled]: (state) => {
      state.isLogoutModalOpen = false;
    },
  },
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice.reducer;

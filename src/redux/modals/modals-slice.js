import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const initialState = {
  isLogoutModalOpen: false,
  isAddBookPopupOpen: true,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleLogoutModal: (state) => {
      state.isLogoutModalOpen = !state.isLogoutModalOpen;
    },
    toggleAddBookPopup: (state) => {
      state.isAddBookPopupOpen = !state.isAddBookPopupOpen;
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

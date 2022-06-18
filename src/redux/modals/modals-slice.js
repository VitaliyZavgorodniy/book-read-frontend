import { createSlice } from '@reduxjs/toolkit';

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
});

export const modalsActions = modalsSlice.actions;
export default modalsSlice.reducer;

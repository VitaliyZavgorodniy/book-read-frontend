const getLogoutModalStatus = (state) => state.modals.isLogoutModalOpen;
const getAddBookPopupOpen = (state) => state.modals.isAddBookPopupOpen;

const modalsSelectors = {
  getLogoutModalStatus,
  getAddBookPopupOpen,
};

export default modalsSelectors;

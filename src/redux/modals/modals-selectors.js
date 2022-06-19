const getLogoutModalStatus = (state) => state.modals.isLogoutModalOpen;
const getAddBookPopupOpen = (state) => state.modals.isAddBookPopupOpen;
const getStatusReadBook = (state) => state.modals.isReadBookModalOpen;

const modalsSelectors = {
  getLogoutModalStatus,
  getAddBookPopupOpen,
  getStatusReadBook,
};

export default modalsSelectors;

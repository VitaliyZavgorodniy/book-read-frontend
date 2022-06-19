const getUserName = (state) => state.auth.name;
const getUserAvatar = (state) => state.auth.avatarURL;
const getIsFetching = (state) => state.auth.isFetching;
const getIsLoadUser = (state) => state.auth.isLoading;
const getToken = (state) => state.auth.token;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserTrainingStatus = (state) => state.auth.isOnTraining;
const getIsNewUser = (state) => state.auth.isNewUser;

const authSelectors = {
  getIsLoadUser,
  getIsFetching,
  getToken,
  getUserName,
  getUserAvatar,
  getIsLoggedIn,
  getUserTrainingStatus,
  getIsNewUser,
};

export default authSelectors;

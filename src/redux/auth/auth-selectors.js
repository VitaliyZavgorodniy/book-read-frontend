const getUserName = (state) => state.auth.name;
const getUserAvatar = (state) => state.auth.avatarURL;
const getIsFetching = (state) => state.auth.isFetching;
const getToken = (state) => state.auth.token;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const authSelectors = {
  getIsFetching,
  getToken,
  getUserName,
  getUserAvatar,
  getIsLoggedIn,
};

export default authSelectors;

const getUserName = (state) => state.auth.name;
const getUserAvatar = (state) => state.auth.avatarURL;
const getIsFetching = (state) => state.auth.isFetching;
const getToken = (state) => state.auth.token;

const authSelectors = {
  getIsFetching,
  getToken,
  getUserName,
  getUserAvatar,
};

export default authSelectors;

const getIsFetching = (state) => state.auth.isFetching;
const getToken = (state) => state.auth.token;

const authSelectors = {
  getIsFetching,
  getToken,
};

export default authSelectors;

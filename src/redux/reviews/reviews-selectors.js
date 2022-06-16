const getIsFetching = (state) => state.reviews.isFetching;
const getReviews = (state) => state.reviews.list;

const librarySelectors = {
  getIsFetching,
  getReviews,
};

export default librarySelectors;

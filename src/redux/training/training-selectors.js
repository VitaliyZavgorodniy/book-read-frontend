const getTraining = (state) => state.training;
const getFetching = (state) => state.training.isFetching;
const getTrainingStatus = (state) => state.training.inProgress;
const getTrainingStats = (state) => state.training.stats;
const getBooksList = (state) => state.training.books;

const trainingSelectors = {
  getFetching,
  getTraining,
  getTrainingStatus,
  getTrainingStats,
  getBooksList,
};

export default trainingSelectors;

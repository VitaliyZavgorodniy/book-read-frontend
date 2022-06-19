const getTraining = (state) => state.training;
const getFetching = (state) => state.training.isFetching;
const getTrainingStatus = (state) => state.training.inProgress;
const getTrainingStats = (state) => state.training.stats;
const getBooksList = (state) => state.training.books;
const getStatusCompletedTraining = (state) =>
  state.training.isCompletedTrainingModalOpen;
const getStatusCompletedBook = (state) =>
  state.training.isCompletedBookModalOpen;

const trainingSelectors = {
  getFetching,
  getTraining,
  getTrainingStatus,
  getTrainingStats,
  getBooksList,
  getStatusCompletedTraining,
  getStatusCompletedBook
};

export default trainingSelectors;

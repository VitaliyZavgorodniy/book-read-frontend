const getTraining = (state) => state.training;
const getTrainingStatus = (state) => state.training.inProgress;
const getTrainingStats = (state) => state.training.stats;
const getBooksList = (state) => state.training.books;

const trainingSelectors = {
  getTraining,
  getTrainingStatus,
  getTrainingStats,
  getBooksList,
};

export default trainingSelectors;

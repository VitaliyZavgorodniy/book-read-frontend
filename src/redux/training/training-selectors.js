const getTraining = (state) => state.training;
const getTrainingStatus = (state) => state.training.inProgress;

const trainingSelectors = {
  getTraining,
  getTrainingStatus,
};

export default trainingSelectors;

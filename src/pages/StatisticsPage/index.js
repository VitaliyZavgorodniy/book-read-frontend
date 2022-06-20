import { connect } from 'react-redux';

import StatisticsPage from './StatisticsPage';

import { trainingOperations, trainingSelectors } from 'redux/training';

const mapStateToProps = (state) => ({
  status: trainingSelectors.getTrainingStatus(state),
  training: trainingSelectors.getTraining(state),
  stats: trainingSelectors.getTrainingStats(state),
  books: trainingSelectors.getBooksList(state),
  isFetching: trainingSelectors.getFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadTraining: () => dispatch(trainingOperations.fetch()),
  onUpdateStats: (data) => dispatch(trainingOperations.updatePages(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);

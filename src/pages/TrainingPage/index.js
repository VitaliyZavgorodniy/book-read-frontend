import { connect } from 'react-redux';

import TrainingPage from './TrainingPage';

import { librarySelectors, libraryOperations } from 'redux/library';
import { trainingSelectors, trainingOperations } from 'redux/training';

const mapStateToProps = (state) => ({
  pendingBooks: librarySelectors.getPendingBooks(state),
  library: librarySelectors.getLibrary(state),
  status: trainingSelectors.getTrainingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadLibrary: () => dispatch(libraryOperations.fetch()),
  onLoadTraining: () => dispatch(trainingOperations.fetch()),
  onStart: (data) => dispatch(trainingOperations.start(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);

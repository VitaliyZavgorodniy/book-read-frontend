import { connect } from 'react-redux';

import TrainingPage from './TrainingPage';

import { librarySelectors, libraryOperations } from 'redux/library';
import { trainingSelectors, trainingOperations } from 'redux/training';

const mapStateToProps = (state) => ({
  library: librarySelectors.getLibrary(state),
  status: trainingSelectors.getTrainingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadLibrary: () => dispatch(libraryOperations.fetch()),
  onLoadTraining: () => dispatch(trainingOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);

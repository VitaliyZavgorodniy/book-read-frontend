import { connect } from 'react-redux';

import TrainingCompleteModal from './TrainingCompleteModal';

import { trainingActions, trainingSelectors } from 'redux/training';

const mapStateToProps = (state) => ({
  isOpen: trainingSelectors.getStatusCompletedTraining(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(trainingActions.toggleCompletedTrainingModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingCompleteModal);

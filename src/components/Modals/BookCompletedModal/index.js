import { connect } from 'react-redux';

import BookCompletedModal from './BookCompletedModal';

import { trainingActions, trainingSelectors } from 'redux/training';

const mapStateToProps = (state) => ({
  isOpen: trainingSelectors.getStatusCompletedBook(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(trainingActions.toggleCompletedBookModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookCompletedModal);

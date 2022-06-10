import { connect } from 'react-redux';

import BooksList from './BooksList';

import { trainingOperations, trainingSelectors } from 'redux/training';

const mapStateToProps = (state) => ({
  books: trainingSelectors.getBooksList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateStats: (data) => dispatch(trainingOperations.updatePages(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

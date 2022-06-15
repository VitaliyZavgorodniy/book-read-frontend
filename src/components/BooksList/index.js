import { connect } from 'react-redux';

import BooksList from './BooksList';

import { libraryOperations } from 'redux/library';

const mapDispatchToProps = (dispatch) => ({
  onReviewAdd: (data) => dispatch(libraryOperations.addReview(data)),
  onReviewUpdate: (data) => dispatch(libraryOperations.updateReview(data)),
});

export default connect(null, mapDispatchToProps)(BooksList);

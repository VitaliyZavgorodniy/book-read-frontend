import { connect } from 'react-redux';

import BookDetails from './BookDetails';
import { reviewsOperations } from 'redux/reviews';

const mapDispatchToProps = (dispatch) => ({
  addToLibrary: (data) => dispatch(reviewsOperations.addBook(data)),
});

export default connect(null, mapDispatchToProps)(BookDetails);

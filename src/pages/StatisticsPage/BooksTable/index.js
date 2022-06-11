import { connect } from 'react-redux';

import BooksTable from './BooksTable';

import { trainingOperations, trainingSelectors } from 'redux/training';

const mapStateToProps = (state) => ({
  books: trainingSelectors.getBooksList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateStats: (data) => dispatch(trainingOperations.updatePages(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable);

import { connect } from 'react-redux';

import FormAddBook from './FormAddBook';

import {
  libraryOperations,
  librarySelectors,
  libraryActions,
} from 'redux/library';

const mapStateToProps = (state) => ({
  prediction: librarySelectors.getFoundBooks(state),
  isFetching: librarySelectors.getStatusAddingBooks(state),
  isSearching: librarySelectors.getStatusSearching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (query) => dispatch(libraryOperations.searchBooks(query)),
  onCreate: (book) => dispatch(libraryOperations.createBook(book)),
  clearSearch: () => dispatch(libraryActions.clearPredictions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddBook);

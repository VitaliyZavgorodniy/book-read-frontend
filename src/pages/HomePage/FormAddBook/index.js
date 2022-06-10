import { connect } from 'react-redux';

import FormAddBook from './FormAddBook';

import { libraryOperations, librarySelectors } from 'redux/library';

const mapStateToProps = (state) => ({
  prediction: librarySelectors.getFoundBooks(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (query) => dispatch(libraryOperations.searchBooks(query)),
  onCreate: (book) => dispatch(libraryOperations.createBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAddBook);

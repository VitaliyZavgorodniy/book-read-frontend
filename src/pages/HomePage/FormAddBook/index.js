import { connect } from 'react-redux';

import FormAddBook from './FormAddBook';

import { libraryOperations } from 'redux/library';

const mapDispatchToProps = (dispatch) => ({
  onCreate: (book) => dispatch(libraryOperations.createBook(book)),
});

export default connect(null, mapDispatchToProps)(FormAddBook);

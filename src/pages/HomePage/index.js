import { connect } from 'react-redux';

import HomePage from './HomePage';

import { libraryOperations, librarySelectors } from 'redux/library';
import { modalsSelectors } from 'redux/modals';

const mapStateToProps = (state) => ({
  totalBooks: librarySelectors.getTotalBooks(state),
  pendingBooks: librarySelectors.getPendingBooks(state),
  readingBooks: librarySelectors.getReadingBooks(state),
  completedBooks: librarySelectors.getCompletedBooks(state),
  isFetching: librarySelectors.getIsFetching(state),
  isOpenPopup: modalsSelectors.getAddBookPopupOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLibraryLoad: () => dispatch(libraryOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import { connect } from 'react-redux';

import BookInput from './BookInput';

import { librarySelectors } from 'redux/library';

const mapStateToProps = (state) => ({
  list: librarySelectors.getPendingBooks(state),
});

export default connect(mapStateToProps)(BookInput);

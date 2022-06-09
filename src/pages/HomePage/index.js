import { connect } from 'react-redux';
import { libraryOperations, librarySelectors } from 'redux/library';

import HomePage from './HomePage';

const mapStateToProps = (state) => ({
  library: librarySelectors.getLibrary(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLibraryLoad: () => dispatch(libraryOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

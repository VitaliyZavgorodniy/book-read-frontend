import { connect } from 'react-redux';

import TrainingPage from './TrainingPage';

const mapStateToProps = (state) => ({
  library: state,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadLibrary: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);

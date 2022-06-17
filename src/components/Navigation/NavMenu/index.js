import { connect } from 'react-redux';

import NavMenu from './NavMenu';

import { authSelectors } from 'redux/auth';

const mapStateToProps = (state) => ({
  isOnTraining: authSelectors.getUserTrainingStatus(state),
});

export default connect(mapStateToProps)(NavMenu);

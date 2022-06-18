import { connect } from 'react-redux';

import NavigationMenu from './NavigationMenu';

import { authSelectors } from 'redux/auth';

const mapStateToProps = (state) => ({
  isOnTraining: authSelectors.getUserTrainingStatus(state),
});

export default connect(mapStateToProps)(NavigationMenu);

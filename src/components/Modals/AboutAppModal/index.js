import { connect } from 'react-redux';
import { authActions, authSelectors } from 'redux/auth';

import AboutAppModal from './AboutAppModal';

const mapStateToProps = (state) => ({
  isNewUser: authSelectors.getIsNewUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setNewUser: () => dispatch(authActions.setNewUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutAppModal);

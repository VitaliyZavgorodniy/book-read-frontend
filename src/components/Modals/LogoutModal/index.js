import { connect } from 'react-redux';

import LogoutModal from './LogoutModal';

import { authOperations } from 'redux/auth';
import { modalsActions, modalsSelectors } from 'redux/modals';

const mapStateToProps = (state) => ({
  isOpen: modalsSelectors.getLogoutModalStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(modalsActions.toggleLogoutModal()),
  onLogout: () => dispatch(authOperations.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);

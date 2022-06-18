import { connect } from 'react-redux';

import LogoutButton from './LogoutButton';

import { modalsActions } from 'redux/modals';

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(modalsActions.toggleLogoutModal()),
});

export default connect(null, mapDispatchToProps)(LogoutButton);

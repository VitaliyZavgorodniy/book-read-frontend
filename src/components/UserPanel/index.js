import { connect } from 'react-redux';

import UserPanel from './UserPanel';

import { authSelectors } from 'redux/auth';

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: authSelectors.getUserAvatar(state),
});

export default connect(mapStateToProps)(UserPanel);

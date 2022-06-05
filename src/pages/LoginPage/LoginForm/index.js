import { connect } from 'react-redux';

import LoginForm from './LoginForm';

import { authOperations, authSelectors } from 'redux/auth';

const mapStateToProps = (state) => ({
  isFetching: authSelectors.getIsFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(authOperations.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

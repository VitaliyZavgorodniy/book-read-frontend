import { connect } from 'react-redux';
import { default as SignUpPage } from './SignUpPage';

import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

const mapStateToProps = (state) => ({
  isFetching: authSelectors.getIsFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignup: (data) => dispatch(authOperations.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

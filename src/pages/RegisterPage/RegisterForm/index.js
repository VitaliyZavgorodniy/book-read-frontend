import { connect } from 'react-redux';
import { default as RegsiterForm } from './RegisterForm';

import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

const mapStateToProps = (state) => ({
  isFetching: authSelectors.getIsFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRegister: (data) => dispatch(authOperations.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegsiterForm);

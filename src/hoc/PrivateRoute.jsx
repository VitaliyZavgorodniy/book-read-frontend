import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ component }) => {
  const auth = useSelector(authSelectors.getIsLoggedIn);

  return auth ? component : <Navigate to="/login" />;
};

export default PrivateRoute;

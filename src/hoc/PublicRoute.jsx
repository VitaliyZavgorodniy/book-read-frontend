import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from 'redux/auth';

const PublicRoute = ({ component }) => {
  const auth = useSelector(authSelectors.getIsLoggedIn);

  return auth ? <Navigate to="/" /> : component;
};

export default PublicRoute;
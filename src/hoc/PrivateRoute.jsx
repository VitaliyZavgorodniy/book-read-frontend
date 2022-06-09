import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PrivateRoute = () => {
  const auth = useSelector(authSelectors.getToken);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

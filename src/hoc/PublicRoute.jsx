import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

const PublicRoute = ({ component }) => {
  const auth = useSelector(authSelectors.getIsLoggedIn);
  console.log(auth);
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;

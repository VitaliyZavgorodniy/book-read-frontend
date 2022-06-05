import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';

import { authOperations, authSelectors } from 'redux/auth';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();

  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  if (isFetching) return <div>fetching...</div>;

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute
              component={
                <Suspense fallback={<div>fetching...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute
              component={
                <Suspense fallback={<div>fetching...</div>}>
                  <RegisterPage />
                </Suspense>
              }
            />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute
              component={
                <Suspense fallback={<div>fetching...</div>}>
                  <LoginPage />
                </Suspense>
              }
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

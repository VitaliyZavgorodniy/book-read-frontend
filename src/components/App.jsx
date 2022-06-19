import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainLayout from 'layouts/MainLayout';
import PublicLayout from 'layouts/PublicLayout';
import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';
import LoginGoogle from 'pages/LoginGoogle';
import Spinner from 'components/UI-kit/spinner/Spinner';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Navigation from 'components/Navigation';

import SkeletonHomePage from './UI-kit/skeletons/SkeletonHomePage';

import { authOperations, authSelectors } from 'redux/auth';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const TrainingPage = lazy(() => import('pages/TrainingPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  if (isFetching) return <Loading />;

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<PrivateRoute />}>
            <Route
              index
              element={
                <Suspense fallback={<SkeletonHomePage />}>
                  <HomePage />
                </Suspense>
              }
            />

            <Route
              path="training"
              element={
                <Suspense fallback={<Spinner />}>
                  <TrainingPage />
                </Suspense>
              }
            />

            <Route
              path="statistics"
              element={
                <Suspense fallback={<Spinner />}>
                  <StatisticsPage />
                </Suspense>
              }
            />

            <Route
              path="reviews"
              element={
                <Suspense fallback={<Spinner />}>
                  <ReviewsPage />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<PublicRoute />}>
            <Route
              path="register"
              element={
                <Suspense fallback={<Spinner />}>
                  <RegisterPage />
                </Suspense>
              }
            />

            <Route
              path="login"
              element={
                <Suspense fallback={<Spinner />}>
                  <LoginPage />
                </Suspense>
              }
            />

            <Route
              path="login/google"
              element={
                <Suspense fallback={<Spinner />}>
                  <LoginGoogle />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

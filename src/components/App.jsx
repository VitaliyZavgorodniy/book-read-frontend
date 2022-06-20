import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainLayout from 'layouts/MainLayout';
import PublicLayout from 'layouts/PublicLayout';

import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import LoginGoogle from 'pages/LoginGoogle';

import PrivateRoute from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';

import Spinner from 'components/UI-kit/spinner/Spinner';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Navigation from 'components/Navigation';

import SkeletonHomePage from 'components/UI-kit/skeletons/SkeletonHomePage';
import SkeletonTrainingPage from 'components/UI-kit/skeletons/SkeletonTrainingPage';
import SkeletonStatisticsPage from 'components/UI-kit/skeletons/SkeletonStatisticsPage';
import SkeletonReviewPage from 'components/UI-kit/skeletons/SkeletonReviewPage';

import { authOperations, authSelectors } from 'redux/auth';

const HomePage = lazy(() => import('pages/HomePage'));
const TrainingPage = lazy(() => import('pages/TrainingPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isFetching = useSelector(authSelectors.getIsLoadUser);

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  if (isFetching)
    return (
      <AnimatePresence>
        <Loading />
      </AnimatePresence>
    );

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
                <Suspense fallback={<SkeletonTrainingPage />}>
                  <TrainingPage />
                </Suspense>
              }
            />

            <Route
              path="statistics"
              element={
                <Suspense fallback={<SkeletonStatisticsPage />}>
                  <StatisticsPage />
                </Suspense>
              }
            />

            <Route
              path="reviews"
              element={
                <Suspense fallback={<SkeletonReviewPage />}>
                  <ReviewsPage />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="login/google" element={<LoginGoogle />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

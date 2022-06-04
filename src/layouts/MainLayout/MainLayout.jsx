import { Outlet } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';

const MainLayout = () => (
    <>
      <Navigation />
      <Outlet />
    </>
  );

export default MainLayout;

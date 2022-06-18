import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import Main from 'components/UI-kit/containers/Main';
import Container from 'components/UI-kit/containers/Container';

const MainLayout = () => (
  <>
    <Navigation />
    <Main>
      <Outlet />
    </Main>
  </>
);

export default MainLayout;

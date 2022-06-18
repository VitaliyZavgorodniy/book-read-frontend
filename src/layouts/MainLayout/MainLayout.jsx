import { Outlet } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';
import Main from 'components/UI-kit/containers/Main';
import Header from 'components/Header';

import LogoutModal from 'components/Modals/LogoutModal';

const MainLayout = () => (
  <>
    <LogoutModal />

    <Header>
      <Navigation />
    </Header>
    <Main>
      <Outlet />
    </Main>
  </>
);

export default MainLayout;

import { Outlet } from 'react-router-dom';

import Main from 'components/UI-kit/containers/Main';

import LogoutModal from 'components/Modals/LogoutModal';

const MainLayout = () => (
  <>
    <LogoutModal />

    <Main>
      <Outlet />
    </Main>
  </>
);

export default MainLayout;

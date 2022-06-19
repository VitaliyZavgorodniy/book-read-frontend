import { Outlet } from 'react-router-dom';

import AboutAppModal from 'components/Modals/AboutAppModal';

const PublicLayout = () => (
  <>
    <AboutAppModal />

    <Outlet />
  </>
);

export default PublicLayout;

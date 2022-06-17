import styled from '@emotion/styled';
import { breakpoints } from 'constants/breakpoints';

import NavMenu from './NavMenu';
import { LogoutButton } from './LogoutButton';
import UserPanel from 'components/UserPanel';

export const UserPanelBlock = () => (
  <NavWrapper>
    <NavMenu />
    <Wrapper>
      <UserPanel />
    </Wrapper>

    <LogoutButton />
  </NavWrapper>
);

const NavWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  @media ${breakpoints.tablet} {
    order: -1;
  }
`;

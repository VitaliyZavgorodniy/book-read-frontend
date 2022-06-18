import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import LogoLink from 'components/LogoLink';
import UserPanel from 'components/UserPanel';
import LogoutButton from 'components/LogoutButton';
import NavigationMenu from './NavigationMenu';

const Navigation = () => (
  <Wrapper>
    <LogoLink />

    <ContainerNavigation>
      <NavigationMenu />

      <ContainerUser>
        <UserPanel />
      </ContainerUser>

      <LogoutButton />
    </ContainerNavigation>
  </Wrapper>
);

const Wrapper = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 320px;
  padding: 14px 20px 13px 22px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    max-width: 768px;
    padding: 14px 32px 13px 32px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1280px;
    padding: 14px 16px 13px 16px;
  }
`;

const ContainerNavigation = styled.nav`
  display: flex;
`;

const ContainerUser = styled.div`
  position: static;

  @media ${breakpoints.tablet} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Navigation;

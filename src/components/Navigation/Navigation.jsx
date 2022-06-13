import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

import { LogoLink } from './LogoLink';
import { UserPanelBlock } from './UserPanelBlock';

const Navigation = () => (
  <Header>
    <HeaderContainer>
      <LogoLink />
      <UserPanelBlock />
    </HeaderContainer>
  </Header>
);

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.block};
`;

const HeaderContainer = styled.div`
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

export default Navigation;
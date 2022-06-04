import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { LogoLink } from './LogoLink';
import { UserPanelBlock } from './UserPanelBlock';

const Navigation = ({ src }) => {
  return (
    <Header>
      <HeaderContainer>
        <LogoLink />
        <UserPanelBlock />
      </HeaderContainer>
    </Header>
  );
};

const Header = styled.header`
  box-shadow: ${(p) => p.theme.shadows.block};
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 320px;
  padding: 14px 20px 13px 22px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
    padding: 14px 32px 13px 32px;
  }

  @media ${breakpoints.laptop} {
    max-width: 1280px;
    padding: 14px 16px 13px 16px;
  }
`;
export default Navigation;

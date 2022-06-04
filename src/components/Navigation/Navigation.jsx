import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';
import { authSelectors } from 'redux/auth';

import { LogoLink } from './LogoLink';
import { UserPanelBlock } from './UserPanelBlock';

const Navigation = ({ src }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      {isLoggedIn ? (
        <HeaderContainer>
          <LogoLink />
          <UserPanelBlock />
        </HeaderContainer>
      ) : (
        <HeaderContainerNotLoginned>
          <LogoLink />
        </HeaderContainerNotLoginned>
      )}
    </Header>
  );
};

const Header = styled.header`
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

  @media ${breakpoints.laptop} {
    max-width: 1280px;
    padding: 14px 16px 13px 16px;
  }
`;
const HeaderContainerNotLoginned = styled(HeaderContainer)`
  justify-content: center;

  @media ${breakpoints.tablet} {
    justify-content: start;
  }
`;
export default Navigation;
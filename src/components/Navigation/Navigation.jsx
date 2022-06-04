import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { PageFormatContext, format } from 'utils/getFormat';
import UserPanel from '../UserPanel/UserPanel';
import { LogoLink } from './LogoLink';
import { NavMenu } from './NavMenu';

const Navigation = ({ src }) => {
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
console.log(isTablet);
  return (
    <Header>
      <HeaderContainer>
        <LogoLink />
        {pageFormat && (
          <>
            {isTablet && <UserPanel />}
            <NavMenu />
            {!isTablet && <UserPanel />}
          </>
        )}
        <Logout type="button">Logout</Logout>
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

const Logout = styled.button`
  margin-left: auto;
  margin-right: 0;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  text-decoration-line: underline;
  background-color: transparent;
`;
export default Navigation;

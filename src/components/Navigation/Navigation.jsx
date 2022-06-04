import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

// import UserPanel from '../UserPanel/UserPanel';

import iconLibrary from 'assets/icons/library.svg';
import iconHome from 'assets/icons/home.svg';

const NavIcon = ({ src }) => <Icon src={src} />;

const Navigation = ({ src }) => (
  <Header>
    <HeaderContainer>
      <Link to="/">
        <Logo>BR</Logo>
      </Link>
      <Nav>
        <NavList>
          <NavItem>
            <StyledLink to="/library">
              <NavIcon src={iconLibrary} />
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/home">
              <NavIcon src={iconHome} />
            </StyledLink>
          </NavItem>
        </NavList>
      </Nav>

      {/* <UserPanel /> */}
      <Logout type="button">Logout</Logout>
    </HeaderContainer>
  </Header>
);
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

  @media ${breakpoints.desktop} {
    max-width: 1024px;
    padding: 14px 16px 13px 16px;
  }
`;
const Logo = styled.span`
  font-family: ${(p) => p.theme.font.familyLogo};
  font-size: 20px;
  line-height: 27px;
  color: ${(p) => p.theme.colors.primary};
`;
const Nav = styled.nav`
  margin-left: 72px;
`;
const NavList = styled.ul`
  display: flex;
  border-right: 1px solid ${(p) => p.theme.colors.bgLight};
  align-items: center;
  justify-content: center;
`;
const NavItem = styled.li`
  display: flex;
  margin-right: 14px;
  width: 33px;
  height: 33px;
  background-color: ${(p) => p.theme.colors.bgLight};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)``;

const Icon = styled.img`
  padding: 0;
  height: 18px;
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

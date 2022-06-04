import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

import iconLibrary from 'assets/icons/library.svg';
import iconHome from 'assets/icons/home.svg';

const NavIcon = ({ src }) => <Icon src={src} />;

export const NavMenu = ({ src }) => (
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
);

const Nav = styled.nav`
  margin-left: 72px;

  @media ${breakpoints.tablet} {
    margin-left: 140px;
  }
  @media ${breakpoints.desktop} {
    margin-left: 406px;
  }
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

@media ${breakpoints.tablet} {
   margin-right: 8px;
  }
`;
const StyledLink = styled(Link)``;

const Icon = styled.img`
  padding: 0;
  height: 18px;
`;
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

import { ImStatsDots, ImList } from 'react-icons/im';
import { MdMenuBook } from 'react-icons/md';

import iconBook from 'assets/icons/book.svg';
import iconHome from 'assets/icons/home.svg';

const NavIcon = ({ src }) => <Icon src={src} />;

const activeStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '33px',
  height: '33px',
  backgroundColor: '#F5F7FA',
  borderRadius: '50%',
};

const NavMenu = ({ isOnTraining }) => {
  const styledIcon = (icon) => <NavIconStyled>{icon}</NavIconStyled>;

  return (
    <Nav>
      <NavList>
        <NavItem>
          {isOnTraining ? (
            <NavLink
              to="/statistics"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <NavIconStyled>
                <ImStatsDots />
              </NavIconStyled>
            </NavLink>
          ) : (
            <NavLink
              to="/training"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <NavIcon src={iconBook} />
            </NavLink>
          )}
        </NavItem>
        <NavItem>
          <NavLink
            to="/reviews"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <NavIconStyled>
              <ImList />
            </NavIconStyled>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <NavIcon src={iconHome} />
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  margin-left: 2px;

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
  width: 33px;
  height: 33px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.tablet} {
    margin-right: 8px;
  }
`;

const NavIconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  color: ${(p) => p.theme.colors.textLight};
  background-color: transparent;
  border-radius: 50%;
`;

const Icon = styled.img`
  padding: 0;
  height: 18px;
`;

export default NavMenu;

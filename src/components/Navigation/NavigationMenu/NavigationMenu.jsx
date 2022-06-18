import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ImStatsDots, ImList } from 'react-icons/im';

import iconBook from 'assets/icons/book.svg';
import iconHome from 'assets/icons/home.svg';

const NavIcon = ({ src }) => <Icon src={src} />;

const NavigationMenu = ({ isOnTraining }) => (
  <List>
    <Item>
      {isOnTraining ? (
        <StyledNavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          <NavIconStyled>
            <ImStatsDots />
          </NavIconStyled>
        </StyledNavLink>
      ) : (
        <StyledNavLink
          to="/training"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          <NavIcon src={iconBook} />
        </StyledNavLink>
      )}
    </Item>
    <Item>
      <StyledNavLink
        to="/reviews"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        <NavIconStyled>
          <ImList />
        </NavIconStyled>
      </StyledNavLink>
    </Item>
    <Item>
      <StyledNavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        <NavIcon src={iconHome} />
      </StyledNavLink>
    </Item>
  </List>
);

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${(p) => p.theme.colors.bgLight};
`;

const Item = styled.li`
  margin-right: 8px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  transition: ${(p) => p.theme.animations.primary} background-color;

  &.active {
    background-color: ${(p) => p.theme.colors.bgLight};
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.bgLight};
    box-shadow: ${(p) => p.theme.shadows.block};
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

export default NavigationMenu;

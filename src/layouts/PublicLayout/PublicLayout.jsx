import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => (
  <>
    <Header>
      <Logo>BR</Logo>
    </Header>
    <Main>
      <Outlet />
    </Main>
  </>
);

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  box-shadow: ${(p) => p.theme.shadows.block};
`;

const Main = styled.main`
  min-height: 100vh;
`;

const Logo = styled.span`
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.font.familyLogo};
  font-size: 20px;
  line-height: 27px;
`;

export default PublicLayout;
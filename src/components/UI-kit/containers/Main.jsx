import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Main = ({ children }) => <Container>{children}</Container>;

const Container = styled.main`
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 60px);
  padding: 20px 0;
  background-color: ${(p) => p.theme.colors.bgPrimary};

  @media ${breakpoints.tablet} {
    padding: 32px 0;
  }

  @media ${breakpoints.desktop} {
    padding: 40px 0;
  }
`;

export default Main;

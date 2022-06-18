import styled from 'styled-components';

const Header = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.block};
  height: 60px;
`;

export default Header;

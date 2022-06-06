import styled from 'styled-components';

const Main = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 40px 16px 0;
`;

export default Main;
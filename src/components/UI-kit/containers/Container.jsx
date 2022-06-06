import styled from 'styled-components';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export default Container;

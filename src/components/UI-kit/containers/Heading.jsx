import styled from 'styled-components';

const Heading = ({ children }) => <Container>{children}</Container>;

const Container = styled.h2`
  width: 100%;
  padding: 18px;
  color: ${(p) => p.theme.colors.bgSecondary};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background-color: ${(p) => p.theme.colors.bgTertiary};
`;

export default Heading;

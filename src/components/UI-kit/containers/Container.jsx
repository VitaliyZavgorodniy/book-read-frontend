import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.section`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export default Container;

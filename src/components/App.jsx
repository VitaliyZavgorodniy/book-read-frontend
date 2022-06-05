import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import RegisterPage from 'pages/RegisterPage';

const App = () => {
  return <RegisterPage></RegisterPage>;
};

const Wrapper = styled.section`
  max-width: 320px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1024px;
  }
`;

const Item = styled.div`
  margin: 40px;
`;

export default App;

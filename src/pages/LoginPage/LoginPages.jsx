import styled from 'styled-components';
import LoginForm from './LoginForm';
import { breakpoints } from 'constants/breakpoints';

import Quotes from './Quotes';

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginBlock>
        <LoginForm />
      </LoginBlock>
      <LoginText>
        <Quotes />
      </LoginText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${breakpoints.laptop} {
    display: flex;
    min-height: 800px;
  }
`;

const LoginBlock = styled.div`
  padding: 90px 75px;
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.register});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${breakpoints.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
  @media ${breakpoints.laptop} {
    padding: 185px 75px;
  }
`;

const LoginText = styled.div`
  display: flex;
  justify-content: center;
  @media ${breakpoints.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
  @media ${breakpoints.desktop} {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default LoginPage;

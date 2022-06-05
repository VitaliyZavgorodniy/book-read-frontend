import styled from 'styled-components';
import LoginForm from './LoginForm';

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
  display: flex;
`;

const LoginBlock = styled.div`
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.register});
  padding: 90px 75px;
`;
const LoginText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 180px;
`;
export default LoginPage;

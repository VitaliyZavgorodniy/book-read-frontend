import styled from 'styled-components';
import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginBlock>
        <LoginForm />
      </LoginBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
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
`;

export default LoginPage;

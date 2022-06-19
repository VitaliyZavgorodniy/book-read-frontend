import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import LoginForm from './LoginForm';
import Quotes from './Quotes';

const LoginPage = () => (
  <Wrapper>
    <ContainerBackround>
      <LoginForm />
    </ContainerBackround>
    <ContainerContent>
      <Quotes />
    </ContainerContent>
  </Wrapper>
);

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

const ContainerLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media ${breakpoints.tablet} {
    min-width: 0px;
    padding: 65px 0;
  }

  @media ${breakpoints.desktop} {
    min-width: 550px;
    padding: 32px 0;
  }
`;

const ContainerContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;

  @media ${breakpoints.tablet} {
    padding: 60px 0;
  }

  @media ${breakpoints.desktop} {
    padding: 32px 0;
  }
`;

const ContainerBackround = styled(ContainerLogin)`
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.logMb});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.colors.bgAlpha},
        ${(p) => p.theme.colors.bgAlpha}
      ),
      url(${(p) => p.theme.backgrounds.logMb_2x});
  }

  @media ${breakpoints.tablet} {
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.colors.bgAlpha},
        ${(p) => p.theme.colors.bgAlpha}
      ),
      url(${(p) => p.theme.backgrounds.logTb});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${(p) => p.theme.colors.bgAlpha},
          ${(p) => p.theme.colors.bgAlpha}
        ),
        url(${(p) => p.theme.backgrounds.logTb_2x});
    }
  }

  @media ${breakpoints.desktop} {
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.colors.bgAlpha},
        ${(p) => p.theme.colors.bgAlpha}
      ),
      url(${(p) => p.theme.backgrounds.logDs});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${(p) => p.theme.colors.bgAlpha},
          ${(p) => p.theme.colors.bgAlpha}
        ),
        url(${(p) => p.theme.backgrounds.logDs_2x});
    }
  }
`;

export default LoginPage;

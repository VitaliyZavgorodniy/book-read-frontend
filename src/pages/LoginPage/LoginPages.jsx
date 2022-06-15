import Media from 'react-media';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

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
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

const LoginBlock = styled.div`
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.logMb});
  background-size: contain;
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
    padding: 64px 184px;
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
    padding: 185px 74px 175px 75px;
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
const LoginText = styled.div`
  margin: 0 auto;
  width: 229px;
  padding-top: 4px;
  padding-bottom: 48px;

  @media ${breakpoints.tablet} {
    width: 397px;
    padding-top: 64px;
    padding-bottom: 109px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 206px;
    padding-bottom: 252px;
  }
`;
export default LoginPage;

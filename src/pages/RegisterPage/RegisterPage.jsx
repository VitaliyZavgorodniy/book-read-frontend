import Media from 'react-media';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

import RegsiterForm from './RegisterForm';
import InfoBlockAbout from './InfoBlockAbout';

const RegisterPage = () => (
  <Wrapper>
    <ContainerBackground>
      <RegsiterForm />
    </ContainerBackground>
    <Media
      query={breakpoints.tablet}
      render={() => (
        <ContainerContent>
          <InfoBlockAbout />
        </ContainerContent>
      )}
    />
  </Wrapper>
);

const Wrapper = styled.main`
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);

  @media ${breakpoints.tablet} {
    flex-direction: row;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContainerRegister = styled.section`
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

const ContainerBackground = styled(ContainerRegister)`
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.regMb});
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
      url(${(p) => p.theme.backgrounds.regMb_2x});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media ${breakpoints.tablet} {
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.colors.bgAlpha},
        ${(p) => p.theme.colors.bgAlpha}
      ),
      url(${(p) => p.theme.backgrounds.regTb});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${(p) => p.theme.colors.bgAlpha},
          ${(p) => p.theme.colors.bgAlpha}
        ),
        url(${(p) => p.theme.backgrounds.regTb_2x});
    }
  }
  @media ${breakpoints.desktop} {
    background-image: linear-gradient(
        to right,
        ${(p) => p.theme.colors.bgAlpha},
        ${(p) => p.theme.colors.bgAlpha}
      ),
      url(${(p) => p.theme.backgrounds.regDs});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          ${(p) => p.theme.colors.bgAlpha},
          ${(p) => p.theme.colors.bgAlpha}
        ),
        url(${(p) => p.theme.backgrounds.regDs_2x});
    }
  }
`;

export default RegisterPage;

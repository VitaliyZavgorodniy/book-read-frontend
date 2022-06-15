import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';
import useLocalStorage from 'hooks/useLocalStorage';

import RegsiterForm from './RegisterForm';
import InfoBlockAbout from './InfoBlockAbout';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const modalRoot = document.querySelector('#modal-root');

const RegisterPage = () => {
  const [modal, setModal] = useState(true);

  const [visited, setVisited] = useLocalStorage('visited', false);

  const navigate = useNavigate();

  const toggleModal = async (link) => {
    await setVisited(true);
    setModal(!modal);
    navigate(link);
  };
  return (
    <Wrapper>
      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {(matches) =>
          matches.small &&
          !visited &&
          modal &&
          createPortal(
            <Overlay>
              <Header>
                <Logo>BR</Logo>
              </Header>
              <Content>
                <InfoBlockAbout />
                <ButtonBlockWrapper>
                  <ButtonWrapper>
                    <CommonButton
                      type="button"
                      title="Login"
                      variant="transparent"
                      onClick={() => toggleModal('/login')}
                    />
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <CommonButton
                      type="button"
                      title="Register"
                      variant="accent"
                      onClick={() => toggleModal('/register')}
                    />
                  </ButtonWrapper>
                </ButtonBlockWrapper>
              </Content>
            </Overlay>,
            modalRoot
          )
        }
      </Media>

      <RegisterBlock>
        <RegsiterForm />
      </RegisterBlock>
      <Media query="(min-width: 768px)" render={() => <InfoBlockAbout />} />
    </Wrapper>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: white;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  box-shadow: ${(p) => p.theme.shadows.block};
`;
const Logo = styled.span`
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.font.familyLogo};
  font-size: 20px;
  line-height: 27px;
`;
const Content = styled.div``;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
const ButtonBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 275px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const ButtonWrapper = styled.div`
  width: 130px;
`;
const RegisterBlock = styled.div`
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.regMb});
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
      url(${(p) => p.theme.backgrounds.regMb_2x});
  }

  @media ${breakpoints.tablet} {
    padding: 64px 184px;
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
    padding: 90px 75px;
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

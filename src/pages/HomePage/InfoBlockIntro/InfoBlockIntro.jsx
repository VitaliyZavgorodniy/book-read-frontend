import { useState } from 'react';
import Media from 'react-media';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import InfoTextIntro from './InfoTextIntro';

const modalRoot = document.querySelector('#modal-root');

const InfoBlockIntro = () => {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(false);
  };
  return (
    <>
      <Media
        queries={{
          small: { maxWidth: 767 },
        }}
      >
        {(matches) =>
          matches.small &&
          modal &&
          createPortal(
            <Overlay>
              <Wrapper>
                <InfoTextIntro />
                <Button type="button" onClick={toggleModal}>
                  Ok
                </Button>
              </Wrapper>
            </Overlay>,
            modalRoot
          )
        }
      </Media>
      <Media queries={{ medium: { minWidth: 768 } }}>
        {(matches) =>
          matches.medium && (
            <Wrapper>
              <InfoTextIntro />
            </Wrapper>
          )
        }
      </Media>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  pointer-events: auto;
  /* background-color: ${(p) => p.theme.colors.bgPrimary}; */
  /* padding: 153px 0 70px; */
`;

const Wrapper = styled.div`
position: absolute;
  top: 153px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 425px;
  padding: 42px 20px;
  margin: 0 auto;
  font-weight: 600;
  background: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.block};
  @media ${breakpoints.tablet} {
    top: 372px;
    width: 608px;
    height: 272px;
    padding: 40px;
  }
   @media ${breakpoints.desktop} {
    top: 207px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 127px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.button};
  &:hover {
    background: ${(p) => p.theme.colors.hover};
  }
`;

export default InfoBlockIntro;

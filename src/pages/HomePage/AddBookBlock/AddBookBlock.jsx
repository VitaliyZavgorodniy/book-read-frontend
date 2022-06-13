import { useState } from 'react';
import Media from 'react-media';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { CgArrowLongLeft } from 'react-icons/cg';

import FormAddBook from '../FormAddBook/FormAddBook';

const modalRoot = document.querySelector('#modal-root');

const AddBookBlock = () => {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
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
              <WrapperModal>
                <ButtonBack type="button" onClick={toggleModal}>
                  <ArrowBack />
                </ButtonBack>
                <FormAddBook />
              </WrapperModal>
            </Overlay>,
            modalRoot
          )
        }
      </Media>
      <Media queries={{ medium: { minWidth: 768 } }}>
        {(matches) =>
          matches.medium && (
            <FormWrapper>
              <FormAddBook />
            </FormWrapper>
          )
        }
      </Media>
    </>
  );
};

const ButtonBack = styled.button`
  position: relative;
  width: 24px;
  height: 12px;
  margin-bottom: 32px;
  margin-right: auto;
  background-color: transparent;
  cursor: pointer;
`;
const ArrowBack = styled(CgArrowLongLeft)`
  position: absolute;
  top: -10px;
  left: 0;
  width: 24px;
  height: 32px;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.accent};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  padding: 84px 0 110px;
`;
const WrapperModal = styled.div`
  position: relative;
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid black;
  background: ${(p) => p.theme.colors.bgPrimary};
`;
const FormWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 110px;

  @media ${breakpoints.tablet} {
    padding-bottom: 40px;
  }

  @media ${breakpoints.desktop} {
    padding-bottom: 80px;
  }
`;

export default AddBookBlock;

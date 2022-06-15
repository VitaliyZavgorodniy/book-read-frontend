import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import styled from 'styled-components';

import { CgArrowLongLeft } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

import { breakpoints } from 'constants/breakpoints';

import BooksList from '../../components/BooksList';
import InfoBlockIntro from './InfoBlockIntro';
import FormAddBook from './FormAddBook';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import IconButton from 'components/UI-kit/buttons/IconButton';
const modalRoot = document.querySelector('#modal-root');

const HomePage = ({
  handleClose,
  isFetching,
  totalBooks,
  completedBooks,
  readingBooks,
  pendingBooks,
  onLibraryLoad,
}) => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    onLibraryLoad();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();

  return (
    <Wrapper>
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
                <FormAddBook isModal={modal} handleClose={toggleModal} />
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

      {totalBooks ? (
        <>
          <LibraryWrapper>
            {completedBooks.length ? (
              <BooksList title="Already read" list={completedBooks} />
            ) : null}
            {readingBooks.length ? (
              <BooksList title="Reading now" list={readingBooks} />
            ) : null}
            {pendingBooks.length ? (
              <BooksList title="Going to read" list={pendingBooks} />
            ) : null}

            <ButtonWrapper>
              <CommonButton
                type="button"
                title="My training"
                variant="accent"
                onClick={() => navigate('/training')}
              />
            </ButtonWrapper>

            <Media
              query="(max-width: 767px)"
              render={() => (
                <AddWrapper>
                  <IconButton onClick={toggleModal}>
                    <Add />
                  </IconButton>
                </AddWrapper>
              )}
            />
          </LibraryWrapper>
        </>
      ) : (
        <InfoBlockIntro />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  pointer-events: auto;
  background-color: ${(p) => p.theme.colors.bgPrimary};
  padding: 84px 0 110px;
`;
const WrapperModal = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 280px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 0 110px;
  background-color: ${(p) => p.theme.colors.bgPrimary};
`;
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
const FormWrapper = styled.div`
  @media ${breakpoints.tablet} {
    padding-top: 32px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 40px;
  }
`;

const LibraryWrapper = styled.div`
  position: relative;
  @media ${breakpoints.tablet} {
    padding-top: 32px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 80px;
  }
`;
const ButtonWrapper = styled.div`
  width: 130px;
  margin: 0 auto;
  padding-top: 28px;
  padding-bottom: 128px;

  @media ${breakpoints.tablet} {
    width: 200px;
    padding-top: 40px;
    padding-bottom: 299px;
  }
  @media ${breakpoints.desktop} {
    padding-bottom: 245px;
  }
`;
const AddWrapper = styled.div`
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12px;
  width: 52px;
`;
const Add = styled(AiOutlinePlus)`
  width: 16px;
  height: 16px;
`;
export default HomePage;

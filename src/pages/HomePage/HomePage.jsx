import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import styled from 'styled-components';

import { AiOutlinePlus } from 'react-icons/ai';

import { breakpoints } from 'constants/breakpoints';

import BooksList from '../../components/BooksList';
import InfoBlockIntro from './InfoBlockIntro';
import FormAddBook from './FormAddBook/FormAddBook';
import AddBookBlock from './AddBookBlock';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import IconButton from 'components/UI-kit/buttons/IconButton';
const modalRoot = document.querySelector('#modal-root');

const HomePage = ({
  onOpenForm,
  isFetching,
  totalBooks,
  completedBooks,
  readingBooks,
  pendingBooks,
  onLibraryLoad,
}) => {
  useEffect(() => {
    onLibraryLoad();
  }, []);
  const navigate = useNavigate();

  const [show, setShow] = useState(true);
  // const toggleModal = () => {
  //   setModal(!modal);
  // };
  return (
    <Wrapper>
      {show && <AddBookBlock />}

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
                  <IconButton onClick={() => navigate('/training')}>
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
  /* @media ${breakpoints.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  } */
`;

const LibraryWrapper = styled.div`
  position: relative;
  padding-bottom: 28px;
  padding-top: 20px;
`;
const ButtonWrapper = styled.div`
  width: 130px;
  margin: 0 auto;
  padding-bottom: 128px;

  @media ${breakpoints.tablet} {
    width: 200px;
    padding-bottom: 299px;
  }

  @media ${breakpoints.desktop} {
    padding-bottom: 245px;
  }
`;
const AddWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12px;
  width: 52px;
  /* margin: 0 auto; */
  /* padding-bottom: 128px; */
`;
const Add = styled(AiOutlinePlus)`
  width: 16px;
  height: 16px;
`;
export default HomePage;

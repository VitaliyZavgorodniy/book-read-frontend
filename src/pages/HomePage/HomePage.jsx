import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';
import useLocalStorage from 'hooks/useLocalStorage';

import BooksList from '../../components/BooksList';
import InfoBlockIntro from './InfoBlockIntro';
import FormAddBook from './FormAddBook';

const modalRoot = document.querySelector('#modal-root');

const HomePage = ({
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
const [modal, setModal] = useState(false);
  return (
    <Wrapper>
      <SectionWrapper>
        <FormAddBook />
      </SectionWrapper>
      

      {totalBooks ? (
        <>
          {completedBooks.length ? (
            <BooksList title="Already read" list={completedBooks} />
          ) : null}
          {readingBooks.length ? (
            <BooksList title="Reading now" list={readingBooks} />
          ) : null}
          {pendingBooks.length ? (
            <BooksList title="Going to read" list={pendingBooks} />
          ) : null}
        </>
      ) : (modal &&
          createPortal(
        <InfoBlockIntro />, modalRoot)
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section``;
const SectionWrapper = styled.div`
  margin-bottom: 110px;
  @media ${breakpoints.tablet} {
    margin-bottom: 40px;
  }
  @media ${breakpoints.desktop} {
    margin-bottom: 80px;
  }
`

export default HomePage;

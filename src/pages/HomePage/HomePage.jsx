import { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import BooksList from '../../components/BooksList';
import InfoBlockIntro from './InfoBlockIntro';
import FormAddBook from './FormAddBook';

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

  return (
    <Wrapper>
      <FormAddBook />

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
      ) : (
        <InfoBlockIntro />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;

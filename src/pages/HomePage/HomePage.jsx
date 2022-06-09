import { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import BooksList from '../../components/BooksList';
import InfoBlockIntro from './InfoBlockIntro';
import FormAddBook from './FormAddBook';

const HomePage = ({ library, onLibraryLoad }) => {
  useEffect(() => {
    onLibraryLoad();
  }, []);

  return (
    <Wrapper>
      {!library.total && <InfoBlockIntro />}
      <FormAddBook />
      <BooksList title="Already read" list={library.completed} />
      <BooksList title="Reading now" list={library.reading} />
      <BooksList title="Going to read" list={library.pending} />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;

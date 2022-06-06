import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import books from '../../components/BooksList/books.json'

import InfoBlockIntro from './InfoBlockIntro';
import BooksList from '../../components/BooksList';
// Экран создания книг
const HomePage = ({ library }) => {
  return (
    <Wrapper>
      <h1>HOME PAGE</h1>
      <div>
        <InfoBlockIntro />
        <BooksList title="Already read" books={books} />
        <BooksList title="Reading now" books={books} />
        <BooksList title="Going to read" books={books} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;

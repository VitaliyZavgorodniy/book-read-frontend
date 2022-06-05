import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import InfoBlockIntro from './InfoBlockIntro';
// Экран создания книг
const HomePage = ({ library }) => {
  return (
    <Wrapper>
      <h1>HOME PAGE</h1>
      <div>
        <InfoBlockIntro />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;

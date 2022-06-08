import { useState } from 'react';
import styled from 'styled-components';

import InfoBlockIntro from './InfoBlockIntro';

import StarRating from 'components/UI-kit/inputs/StarRating';
// Экран создания книг
const HomePage = () => {
  return (
    <Wrapper>
      <h1>HOME PAGE</h1>
      <div>
        <InfoBlockIntro />
      </div>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default HomePage;

import styled from 'styled-components';
import { motion } from 'framer-motion';

import Spinner from 'components/UI-kit/spinner/Spinner';

const Loading = () => (
  <Wrapper
    as={motion.section}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Title>BR</Title>
    <Spinner />
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: '#F6F7FB';
`;

const Title = styled.h1`
  margin-bottom: 40px;
  color: '#bac5d9';
  font-family: 'Abril Fatface, curcive';
  font-size: 72px;
  line-height: 27px;
`;

export default Loading;

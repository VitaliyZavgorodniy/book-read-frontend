import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from 'constants/themes';

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
  background-color: theme.colors.bgPrimary;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  color: theme.colors.primary;
  font-family: theme.font.familyLogo;
  font-size: 72px;
  line-height: 27px;
`;

export default Loading;

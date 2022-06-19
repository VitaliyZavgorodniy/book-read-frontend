import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { motion } from 'framer-motion';

const Container = ({ children }) => (
  <Wrapper
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.section`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export default Container;

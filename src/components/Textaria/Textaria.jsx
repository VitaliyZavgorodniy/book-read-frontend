import { current } from '@reduxjs/toolkit';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Textaria = (value) => {
  return (
    <Wrapper>
      <Textariaform>
        <Resume>Резюме</Resume>
        <textarea value={current.value} />
      </Textariaform>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Textariaform = styled.div`
  flex-direction: column;
`;

const Resume = styled.div`
  margin-bottom: 12px;
`;

Textaria.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Textaria;

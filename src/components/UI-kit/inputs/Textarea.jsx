// import { current } from '@reduxjs/toolkit';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Textarea = ({ title, value, onChange, props }) => (
  <Wrapper>
    <Label>{title}</Label>
    <Input value={value} onChange={onChange} {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 12px;
`;

const Input = styled.textarea`
display: block;
padding: 8px;
resize: none;
width: 100%;
height: 170px;
border-radius: 4px;
  `;

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Textarea;


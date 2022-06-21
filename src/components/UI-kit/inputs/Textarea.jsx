import styled from 'styled-components';
import PropTypes from 'prop-types';

const Textarea = ({ title, value, onChange, props, error }) => (
  <Wrapper>
    <Label>{title}</Label>
    <Input value={value} onChange={onChange} {...props} />
    {error ? <Error>{error}</Error> : null}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary};
`;

const Input = styled.textarea`
  height: 170px;
  resize: none;
  padding: 8px;
  border: 1px solid ${(p) => p.theme.colors.textLight};
  background-color: ${p => p.theme.colors.bgSecondary};
  color: ${p => p.theme.colors.text};
`;

const Error = styled.p`
  padding: 5px 0;
  color: ${(p) => p.theme.colors.error};
`;

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Textarea;

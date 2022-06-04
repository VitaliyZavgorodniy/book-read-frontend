import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormInput = ({ name, required, title, error, field, ...props }) => (
  <Wrapper>
    <Label htmlFor={name} isRequired={required}>
      {title}
    </Label>
    <Input name={name} id={name} {...field} {...props} />
    <ErrorMessage>{error}</ErrorMessage>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &::after {
    content: '*';
    display: ${(p) => (p.isRequired ? 'inline' : 'none')};
    margin-left: 3px;
    color: ${(p) => p.theme.colors.accent};
  }

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 12px;
  color: ${(p) => p.theme.colors.primary};
  background-color: ${(p) => p.theme.colors.bgLight};
  box-shadow: ${(p) => p.theme.shadows.innerInput};
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  &::placeholder {
    color: ${(p) => p.theme.colors.textLight};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${(p) => p.theme.colors.error};
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
`;

FormInput.propTypes = {
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default FormInput;

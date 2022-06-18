import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommonInput = ({
  id,
  title,
  required,
  type,
  value,
  onChange,
  error,
  disabled,
  autofocus,
  ...props
}) => (
  <Wrapper>
    <Label htmlFor={id} isRequired={required}>
      {title}
    </Label>
    <Input
      id={id}
      autoFocus={autofocus ?? false}
      name={id}
      required={required}
      value={value}
      type={type ?? 'text'}
      disabled={disabled}
      onChange={onChange}
      {...props}
    />
    <ErrorMessage>{error}</ErrorMessage>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
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
  background-color: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.innerInput};
  border: none;
  color: ${(p) => p.theme.colors.textLight};
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
    border: 1px solid ${(p) => p.theme.colors.textLight};
    background-color: ${(p) => p.theme.colors.bgPrimary};
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${(p) => p.theme.colors.error};
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  height: 18px;
`;

CommonInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

export default CommonInput;

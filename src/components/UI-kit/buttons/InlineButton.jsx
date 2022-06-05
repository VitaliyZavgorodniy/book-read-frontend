import PropTypes from 'prop-types';
import styled from 'styled-components';

const InlineButton = ({ onClick, label, variant }) => (
  <Button variant={variant} onClick={onClick}>
    {label}
  </Button>
);

const Button = styled.button`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  color: ${(p) =>
    p.variant === 'accent' ? p.theme.colors.accent : p.theme.colors.primary};
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
`;
InlineButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default InlineButton;

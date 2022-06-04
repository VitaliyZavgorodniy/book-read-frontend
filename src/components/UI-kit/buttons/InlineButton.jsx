import PropTypes from 'prop-types';
import styled from 'styled-components';

export const InlineButton = ({ onClick, text }) => (
  <Button type="button" onClick={onClick}>
    {text}
  </Button>
);

const Button = styled.button`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  color: ${(p) => p.theme.colors.accent};
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
`;
InlineButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

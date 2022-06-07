import styled from 'styled-components';

const CommonButton = ({ title, onClick, type, variant }) => (
  <Button onClick={onClick} type={type} variant={variant}>
    {title}
  </Button>
);

const Button = styled.button`
  width: 100%;
  padding: 20px 0;
  background-color: ${(p) =>
    p.variant === 'accent' ? p.theme.colors.accent : 'transparent'};
  color: ${(p) =>
    p.variant === 'accent' ? p.theme.colors.contrast : p.theme.colors.primary};
  border: 1px solid
    ${(p) =>
      p.variant === 'accent' ? p.theme.colors.accent : p.theme.colors.primary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
`;

export default CommonButton;

import styled from 'styled-components';

const CommonButton = ({ title, onClick, type, variant, size }) => (
  <Button onClick={onClick} type={type} variant={variant} size={size}>
    {title}
  </Button>
);

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: ${(p) => (p.size === 'lg' ? '20px' : '10px')};
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

  &:hover {
    cursor: pointer;
  }
`;

export default CommonButton;

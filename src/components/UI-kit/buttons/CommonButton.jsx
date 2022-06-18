import styled from 'styled-components';

const CommonButton = ({
  title,
  onClick,
  type,
  variant,
  size,
  disabled = false,
}) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    type={type}
    variant={variant}
    size={size}
  >
    {title}
  </Button>
);

const Button = styled.button`
  width: 100%;
  height: ${(p) => (p.size === 'lg' ? '60px' : '40px')};
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
  transition: ${(p) => p.theme.animations.primary} box-shadow;

  &:hover {
    cursor: pointer;
    box-shadow: ${(p) =>
      p.variant === 'accent' ? p.theme.shadows.accent : p.theme.shadows.button};
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;

export default CommonButton;

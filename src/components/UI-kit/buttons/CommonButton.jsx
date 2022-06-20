import styled from 'styled-components';
import { Bars } from 'react-loader-spinner';
import { theme } from 'constants/themes';

const CommonButton = ({
  isFetching,
  title,
  onClick,
  type,
  variant,
  size,
  disabled = false,
}) => {
  const settings =
    variant === 'accent' ? theme.colors.contrast : theme.colors.primary;

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      type={type}
      variant={variant}
      size={size}
    >
      {isFetching ? <Bars color={settings} height="25px" /> : title}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

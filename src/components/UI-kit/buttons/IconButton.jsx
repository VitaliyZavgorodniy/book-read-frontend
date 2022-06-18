import styled from 'styled-components';

const IconButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.contrast};
  font-size: 16px;
  transition: ${(p) => p.theme.animations.primary} box-shadow;

  &:hover {
    cursor: pointer;
    box-shadow: ${(p) => p.theme.shadows.accent};
  }
`;

export default IconButton;

import styled from 'styled-components';

const IconButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.contrast};
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default IconButton;

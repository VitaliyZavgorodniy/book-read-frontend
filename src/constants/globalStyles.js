import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.bgLight};
    color: ${({ theme }) => theme.colors.text};
  }
  `;

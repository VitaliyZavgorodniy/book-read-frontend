import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

export const LogoutButton = () => <Logout type="button">Logout</Logout>

const Logout = styled.button`
  margin-left: 14px;
  margin-right: 0;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  text-decoration-line: underline;
  background-color: transparent;

  @media ${breakpoints.tablet} {
   margin-left: 8px;
  }
`;
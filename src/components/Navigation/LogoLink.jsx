import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = () => (
  <Link to="/">
    <Logo>BR</Logo>
  </Link>
);

const Logo = styled.span`
  font-family: ${(p) => p.theme.font.familyLogo};
  font-size: 20px;
  line-height: 27px;
  color: ${(p) => p.theme.colors.primary};
`;
